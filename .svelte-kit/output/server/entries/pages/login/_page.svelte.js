import { c as create_ssr_component, a as add_attribute, g as escape } from "../../../chunks/ssr.js";
import "../../../chunks/pocketbase.js";
import "../../../chunks/client.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let email = "";
  let password = "";
  return `<form><div><label for="email" data-svelte-h="svelte-1p9d3fm">Email</label> <input type="email" id="email" required${add_attribute("value", email, 0)}></div> <div><label for="password" data-svelte-h="svelte-pepa0a">Password</label> <input type="password" id="password" required${add_attribute("value", password, 0)}></div> ${``} <button type="submit" ${""}>${escape("Login")}</button></form>`;
});
export {
  Page as default
};
