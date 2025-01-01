// @ts-nocheck
import type { Actions } from './$types'
import { fail, redirect } from '@sveltejs/kit'
import type {PageServerLoad} from './$types'
export type OutputType = {authProviderRedirect: string; authProviderState: string}

export const load = async({locals, url}: Parameters<PageServerLoad<OutputType>>[0])=>{
const authMethods = await locals.pb.collection('users').listAuthMethods();
if (!authMethods){
  return {
    authProviderRedirect: '',
    authProviderState: '',
  };
  
}
const redirectURL = `${url.origin}/auth/callback`;
const googleAuthProvider = authMethods.oauth2.providers.find(provider => provider.name === 'google');
const authProviderRedirect = `${googleAuthProvider?.authURL}${redirectURL}`;
const state = googleAuthProvider?.state;

return {
  authProviderRedirect: authProviderRedirect,
  authProviderState: state,
};
};

export const actions = {
  register: async ({ locals, request }: import('./$types').RequestEvent) => {
    const data = Object.fromEntries(await request.formData()) as {
      firstName: string
      lastName: string
      email: string
      role: string
      password: string
      passwordConfirm: string
    }
    data.role = 'User'
    try {
      await locals.pb.collection('users').create(data)
      await locals.pb.collection('users').authWithPassword(data.email, data.password)
    } catch (e) {
      console.error(e)
      throw e
    }
    throw redirect(303, '/register')
  },

  login: async ({ locals, request }: import('./$types').RequestEvent) => {
    const data = Object.fromEntries(await request.formData()) as {
      email: string
      password: string
    }

    try {
      await locals.pb.collection('users').authWithPassword(data.email, data.password)
    } catch (e) {
      console.error(e)
      throw e
    }
    throw redirect(303, '/')
    return
  },


google: async ({locals, request, cookies}: import('./$types').RequestEvent) => {
  try {
    await locals.pb.collection('users').authWithOAuth2({provider: 'google'});
} catch (e) {
  console.error(e);
  throw e;
}
throw redirect(303, '/');
},
};null as any as Actions;