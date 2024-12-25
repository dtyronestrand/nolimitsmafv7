// @ts-nocheck
import type {Actions} from './$types';
import { redirect } from '@sveltejs/kit';
export const actions = {
    default: async ({locals}: import('./$types').RequestEvent) => {
        locals.pb.authStore.clear();
        locals.user = null;
        throw redirect(303, '/');
    }
};null as any as Actions;