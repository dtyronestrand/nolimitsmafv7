import * as server from '../entries/pages/logout/_page.server.ts.js';

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/logout/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/logout/+page.server.ts";
export const imports = ["_app/immutable/nodes/10.Bb-a16FL.js","_app/immutable/chunks/scheduler.IDmOjlTZ.js","_app/immutable/chunks/index.5QbAzJfi.js"];
export const stylesheets = [];
export const fonts = [];
