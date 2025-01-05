export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["DALL·E 2024-12-12 17.02.02 - A vibrant and dynamic depiction of a martial arts and fitness studio filled with diverse individuals of various ages, races, and abilities engaging in.webp","favicon.png","formbg.webp","generic-avatar.png","grid-pattern.png","noise-texture.svg"]),
	mimeTypes: {".webp":"image/webp",".png":"image/png",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.CaqVBiLW.js","app":"_app/immutable/entry/app.DW9nHW7w.js","imports":["_app/immutable/entry/start.CaqVBiLW.js","_app/immutable/chunks/entry.B79BDEyk.js","_app/immutable/chunks/scheduler.IDmOjlTZ.js","_app/immutable/chunks/index.BjOTI3Gq.js","_app/immutable/entry/app.DW9nHW7w.js","_app/immutable/chunks/pocketbase.GTJ7-wcp.js","_app/immutable/chunks/index.BjOTI3Gq.js","_app/immutable/chunks/scheduler.IDmOjlTZ.js","_app/immutable/chunks/index.5QbAzJfi.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js')),
			__memo(() => import('./nodes/13.js')),
			__memo(() => import('./nodes/14.js'))
		],
		routes: [
			{
				id: "/api/preview",
				pattern: /^\/api\/preview\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/preview/_server.ts.js'))
			},
			{
				id: "/auth/callback/google",
				pattern: /^\/auth\/callback\/google\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/auth/callback/google/_server.ts.js'))
			},
			{
				id: "/[[preview=preview]]/(users)/location/[uid]",
				pattern: /^(?:\/([^/]+))?\/location\/([^/]+?)\/?$/,
				params: [{"name":"preview","matcher":"preview","optional":true,"rest":false,"chained":true},{"name":"uid","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/logout",
				pattern: /^\/logout\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/profile",
				pattern: /^\/profile\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/[[preview=preview]]/(users)/program/[uid]",
				pattern: /^(?:\/([^/]+))?\/program\/([^/]+?)\/?$/,
				params: [{"name":"preview","matcher":"preview","optional":true,"rest":false,"chained":true},{"name":"uid","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/register",
				pattern: /^\/register\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/slice-simulator",
				pattern: /^\/slice-simulator\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/unauthorized",
				pattern: /^\/unauthorized\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/[[preview=preview]]/(users)/videoindex",
				pattern: /^(?:\/([^/]+))?\/videoindex\/?$/,
				params: [{"name":"preview","matcher":"preview","optional":true,"rest":false,"chained":true}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/[[preview=preview]]/(users)/video/[uid]",
				pattern: /^(?:\/([^/]+))?\/video\/([^/]+?)\/?$/,
				params: [{"name":"preview","matcher":"preview","optional":true,"rest":false,"chained":true},{"name":"uid","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/[[preview=preview]]",
				pattern: /^(?:\/([^/]+))?\/?$/,
				params: [{"name":"preview","matcher":"preview","optional":true,"rest":false,"chained":true}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/[[preview=preview]]/[uid]",
				pattern: /^(?:\/([^/]+))?\/([^/]+?)\/?$/,
				params: [{"name":"preview","matcher":"preview","optional":true,"rest":false,"chained":true},{"name":"uid","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			}
		],
		matchers: async () => {
			const { match: preview } = await import ('./entries/matchers/preview.js')
			return { preview };
		},
		server_assets: {}
	}
}
})();
