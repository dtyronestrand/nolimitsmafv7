import { c as createClient } from "../../chunks/prismicio.js";
import "../../chunks/index.js";
async function load({ fetch, cookies, locals, url }) {
  const client = createClient({ fetch, cookies });
  const settings = await client.getSingle("settings");
  return {
    settings,
    user: locals.user
  };
}
export {
  load
};
