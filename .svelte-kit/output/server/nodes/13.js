

export const index = 13;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/unauthorized/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/13.DLdIbyoF.js","_app/immutable/chunks/scheduler.DRXOiffo.js","_app/immutable/chunks/index.1dBllwLl.js"];
export const stylesheets = ["_app/immutable/assets/13.Dz3Ay_p8.css"];
export const fonts = [];
