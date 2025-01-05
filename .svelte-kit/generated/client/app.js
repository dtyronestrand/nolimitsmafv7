import * as client_hooks from '../../../src/hooks.client.ts';


export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14')
];

export const server_loads = [0];

export const dictionary = {
		"/[[preview=preview]]/(users)/location/[uid]": [~4,[2]],
		"/login": [9],
		"/logout": [10],
		"/profile": [11],
		"/[[preview=preview]]/(users)/program/[uid]": [~5,[2]],
		"/register": [12],
		"/slice-simulator": [13],
		"/unauthorized": [14],
		"/[[preview=preview]]/(users)/videoindex": [~7,[2]],
		"/[[preview=preview]]/(users)/video/[uid]": [~6,[2]],
		"/[[preview=preview]]": [~3],
		"/[[preview=preview]]/[uid]": [~8]
	};

export const hooks = {
	handleError: client_hooks.handleError || (({ error }) => { console.error(error) }),
	init: client_hooks.init,
	reroute: (() => {}),
	transport: {}
};

export const decoders = Object.fromEntries(Object.entries(hooks.transport).map(([k, v]) => [k, v.decode]));

export const hash = false;

export const decode = (type, value) => decoders[type](value);

export { default as root } from '../root.svelte';