

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/profile/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.B7OrKfOv.js","_app/immutable/chunks/scheduler.DRXOiffo.js","_app/immutable/chunks/index.1dBllwLl.js","_app/immutable/chunks/pocketbase.DTuYus1y.js","_app/immutable/chunks/index.BSOuyD6n.js","_app/immutable/chunks/auth.C00_U8rO.js"];
export const stylesheets = ["_app/immutable/assets/10.DDrdaabM.css"];
export const fonts = [];
