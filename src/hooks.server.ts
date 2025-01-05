import { pb } from '$lib/pocketbase';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
    const cookieString = event.request.headers.get('cookie') || '';
    console.log("Incoming cookie:", cookieString); // Debug log

    pb.authStore.loadFromCookie(cookieString);
    console.log("Auth valid after load:", pb.authStore.isValid); // Debug log

    try {
        if (pb.authStore.isValid) {
            await pb.collection('users').authRefresh();
            console.log("Auth refreshed successfully"); // Debug log
        }
    } catch (err) {
        console.error("Auth refresh failed:", err); // Debug log
        pb.authStore.clear();
    }

    event.locals.pb = pb;
    event.locals.user = pb.authStore.model;

    const response = await resolve(event);

    // Make sure we're setting the cookie with the current auth state
    const cookie = pb.authStore.exportToCookie({
        httpOnly: false,
        secure: true,
        sameSite: 'Lax',
        path: '/',
        maxAge: 7 * 24 * 60 * 60
    });

    console.log("Setting cookie:", cookie); // Debug log

    response.headers.set('set-cookie', cookie);

    return response;
};