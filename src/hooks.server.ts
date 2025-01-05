import { pb } from '$lib/pocketbase';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
    // Get the cookie from the request headers
    const cookie = event.request.headers.get('cookie') || '';
    pb.authStore.loadFromCookie(cookie);

    try {
        // If we have a valid auth, try to refresh it
        if (pb.authStore.isValid) {
            await pb.collection('users').authRefresh();
        }
    } catch {
        // If refresh fails, clear the auth
        pb.authStore.clear();
    }

    event.locals.pb = pb;
    event.locals.user = pb.authStore.model;

    const response = await resolve(event);

    // Set the cookie with appropriate options for both dev and prod
    response.headers.set(
        'set-cookie',
        pb.authStore.exportToCookie({
            secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
            sameSite: 'Lax',  // Protects against CSRF
            httpOnly: false,  // Allow client-side access
            path: '/',       // Cookie available for all paths
            maxAge: 7 * 24 * 60 * 60  // 7 days
        })
    );

    return response;
};