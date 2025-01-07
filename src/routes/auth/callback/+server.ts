import {redirect} from '@sveltejs/kit'
import type {RequestEvent, RequestHandler} from './$types'

export const GET: RequestHandler = async ({locals, url, cookies}: RequestEvent) =>{
    const redirectURL = `${url.origin}/auth/callback`;
    const expectedState = cookies.get('state');

    const query = new URLSearchParams(url.search);
    const state = query.get('state');
    const code = query.get('code');

    const authMethods = await locals.pb?.collection('users').listAuthMethods();

    if (!authMethods?.oauth2?.providers){
        console.log('authy providers');
        throw redirect(303, '/register');
    }
    const provider = authMethods.oauth2.providers.find(provider => provider.name === 'google');

    if (!provider){
        console.group('Provder not found');
        throw redirect(303, '/register');

    }
    if (expectedState !== state){
        console.log('state does not match expected', expectedState, state);
        throw redirect(303, '/register');
    }

    try {
        await locals.pb
            ?.collection('users')
            .authWithOAuth2(provider.name, code || '', provider.codeVerifier, redirectURL);
    } catch (err) {
        console.log('Error loggin in with OAuth user', err);
    }
    throw redirect(303, '/');
};