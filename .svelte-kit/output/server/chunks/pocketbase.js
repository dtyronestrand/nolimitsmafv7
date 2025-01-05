import PocketBase from "pocketbase";
import { w as writable } from "./index2.js";
const PUBLIC_POCKETBASE_URL = "https://nolimitsmafdb.nolimitsmaf.com";
const pb = new PocketBase(PUBLIC_POCKETBASE_URL);
const currentUser = writable(pb.authStore.model);
export {
  currentUser as c,
  pb as p
};
