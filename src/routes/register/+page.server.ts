import type {Actions} from './$types';
import { redirect } from '@sveltejs/kit';
export  const actions: Actions = {
    register: async ({locals, request}) => {
        const data = Object.fromEntries(await request.formData()) as {
            firstName: string;
            lastName: string;
            email: string;
            role: string;
            password: string;
            passwordConfirm: string;
        };
        data.role = 'User';
        try {
            await locals.pb.collection('users').create(data);
            await locals.pb. collection('users').authWithPassword(data.email, data.password);
       } catch (e) {
            console.error(e);
            throw e;

            }
            throw redirect (303, '/');
       },

       login: async ({locals, request}) => {
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
    