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
	() => import('./nodes/17'),
	() => import('./nodes/18'),
	() => import('./nodes/19')
];

export const server_loads = [0,2];

export const dictionary = {
		"/[[preview=preview]]/(users)/location/[uid]": [~4,[2]],
		"/login": [13],
		"/logout": [14],
		"/profile": [15],
		"/[[preview=preview]]/(users)/program/[uid]": [~5,[2]],
		"/[[preview=preview]]/(users)/program/[uid]/belts": [6,[2]],
		"/[[preview=preview]]/(users)/program/[uid]/studenthandbook": [7,[2]],
		"/[[preview=preview]]/(users)/program/[uid]/testingapp": [~8,[2]],
		"/[[preview=preview]]/(users)/program/[uid]/video/[uid]": [~9,[2]],
		"/register": [16],
		"/slice-simulator": [17],
		"/staff/admin": [~18],
		"/unauthorized": [19],
		"/[[preview=preview]]/(users)/videoindex": [~11,[2]],
		"/[[preview=preview]]/(users)/video/[uid]": [~10,[2]],
		"/[[preview=preview]]": [~3],
		"/[[preview=preview]]/[uid]": [~12]
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

export { default as root } from '../root.js';