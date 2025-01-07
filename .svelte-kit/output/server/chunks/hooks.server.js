import { p as pb } from "./pocketbase.js";
const handle = async ({ event, resolve }) => {
  pb.authStore.loadFromCookie(event.request.headers.get("cookie") || "");
  try {
    if (pb.authStore.isValid) {
      await pb.collection("users").authRefresh();
    }
  } catch (_) {
    pb.authStore.clear();
  }
  event.locals.pb = pb;
  event.locals.user = structuredClone(pb.authStore.model);
  const response = await resolve(event);
  const cookie = pb.authStore.exportToCookie({
    secure: true,
    sameSite: "Lax",
    httpOnly: false,
    path: "/"
  });
  response.headers.set("set-cookie", cookie);
  return response;
};
export {
  handle
};
