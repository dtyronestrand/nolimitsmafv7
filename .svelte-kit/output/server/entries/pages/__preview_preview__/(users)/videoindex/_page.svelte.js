import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/ssr.js";
import { c as components, P as PrismicRichText, S as SliceZone } from "../../../../../chunks/index3.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `${validate_component(PrismicRichText, "PrismicRichText").$$render($$result, { field: data.page.data.title }, {}, {})} ${validate_component(SliceZone, "SliceZone").$$render($$result, { slices: data.slices, components }, {}, {})}`;
});
export {
  Page as default
};
