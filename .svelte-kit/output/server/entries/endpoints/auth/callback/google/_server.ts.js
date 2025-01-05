import { r as redirect } from "../../../../../chunks/index.js";
import { d as private_env } from "../../../../../chunks/shared-server.js";
const GET = async ({ locals, url, cookies }) => {
  const provider = JSON.parse(cookies.get("provider") || "{}");
  if (provider.state !== url.searchParams.get("state")) {
    throw new Error("State parameters don't match");
  }
  try {
    await locals.pb.collection("users").authWithOAuth2Code(
      provider.name,
      url.searchParams.get("code") || "",
      provider.codeVerifier,
      private_env.REDIRECT_URL
    );
  } catch (error) {
    console.error(error);
    return redirect(303, "/login?fail=true");
  }
  throw redirect(303, "/login");
};
export {
  GET
};
