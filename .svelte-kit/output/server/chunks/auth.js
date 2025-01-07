import { w as writable } from "./index2.js";
import { p as pb } from "./pocketbase.js";
function createPersistentStore() {
  const store = writable(pb.authStore.model);
  return {
    subscribe: store.subscribe,
    set: store.set,
    update: store.update
  };
}
const currentUser = createPersistentStore();
export {
  currentUser as c
};
