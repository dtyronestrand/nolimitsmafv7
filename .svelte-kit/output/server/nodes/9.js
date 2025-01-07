import * as server from '../entries/pages/logout/_page.server.ts.js';

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/logout/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/logout/+page.server.ts";
export const imports = ["_app/immutable/nodes/9.B7NeSX-4.js","_app/immutable/chunks/scheduler.DRXOiffo.js","_app/immutable/chunks/index.1dBllwLl.js"];
export const stylesheets = [];
export const fonts = [];
