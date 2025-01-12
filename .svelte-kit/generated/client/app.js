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
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17')
];

export const server_loads = [0,2];

export const dictionary = {
		"/[[preview=preview]]/(users)/location/[uid]": [~4,[2]],
		"/login": [12],
		"/logout": [13],
		"/profile": [14],
		"/[[preview=preview]]/(users)/program/[uid]": [~5,[2]],
		"/[[preview=preview]]/(users)/program/[uid]/belts": [6,[2]],
		"/[[preview=preview]]/(users)/program/[uid]/testingapp": [~7,[2]],
		"/[[preview=preview]]/(users)/program/[uid]/video/[uid]": [~8,[2]],
		"/register": [15],
		"/slice-simulator": [16],
		"/unauthorized": [17],
		"/[[preview=preview]]/(users)/videoindex": [~10,[2]],
		"/[[preview=preview]]/(users)/video/[uid]": [~9,[2]],
		"/[[preview=preview]]": [~3],
		"/[[preview=preview]]/[uid]": [~11]
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