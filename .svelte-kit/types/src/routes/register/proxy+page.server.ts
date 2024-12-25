// @ts-nocheck
import type {Actions} from './$types';
import { redirect } from '@sveltejs/kit';
export  const actions = {
    register: async ({locals, request}: import('./$types').RequestEvent) => {
        const data = Object.fromEntries(await request.formData()) as {
            firstName: string;
            lastName: string;
            email: string;
            password: string;
            passwordConfirm: string;
        };

        try {
            await locals.pb.collection('users').create(data);
            await locals.pb. collection('users').authWithPassword(data.email, data.password);
       } catch (e) {
            console.error(e);
            throw e;

            }
            throw redirect (303, '/');
       },

       login: async ({locals, request}: import('./$types').RequestEvent) => {
        const data = Object.fromEntries(await request.formData()) as {
         
            email: string;
            password: string;
           
        };

        try {
           
            await locals.pb. collection('users').authWithPassword(data.email, data.password);
       } catch (e) {
            console.error(e);
            throw e;

            }
            throw redirect (303, '/');
       }
    };
    ;null as any as Actions;