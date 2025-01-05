import { c as createClient } from "../../../../../chunks/prismicio.js";
import { mapSliceZone } from "@prismicio/client";
import { m as mappers } from "../../../../../chunks/mappers.js";
async function load({ params, fetch, cookies }) {
  const client = createClient({ fetch, cookies });
  const page = await client.getSingle("videoindex");
  const slices = await mapSliceZone(page.data.slices, mappers, { client });
  return {
    page,
    slices
  };
}
async function entries() {
  return [{}];
}
export {
  entries,
  load
};
