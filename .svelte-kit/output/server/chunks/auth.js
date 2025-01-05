import "pocketbase";
import { w as writable } from "./index2.js";
import { p as pb } from "./pocketbase.js";
const currentUser = writable(pb.authStore.model);
pb.authStore.onChange((auth) => {
  console.log("Auth state changed:", auth);
  currentUser.set(pb.authStore.model);
});
export {
  currentUser as c
};
