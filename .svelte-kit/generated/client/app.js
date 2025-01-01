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
	() => import('./nodes/10')
];

export const server_loads = [0,2];

export const dictionary = {
		"/profile": [8],
		"/[[preview=preview]]/program/[uid]": [~5,[2]],
		"/[[preview=preview]]/program/[uid]/testingapp": [~6,[2]],
		"/[[preview=preview]]/program/[uid]/video/[uid]": [~7,[2]],
		"/register": [~9],
		"/slice-simulator": [10],
		"/[[preview=preview]]": [~3],
		"/[[preview=preview]]/[uid]": [~4]
	};

export const hooks = {
	handleError: client_hooks.handleError || (({ error }) => { console.error(error) }),

	reroute: (() => {})
};

export { default as root } from '../root.svelte';