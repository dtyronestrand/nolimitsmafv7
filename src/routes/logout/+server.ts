import {redirect} from '@sveltejs/kit';
import type {RequestEvent, RequestHandler} from './$types';
export const GET: RequestHandler = ({locals}: RequestEvent) => {
  locals.pb?.authStore.clear();
  localStorage.user = undefined;
  throw redirect(303, '/')
};