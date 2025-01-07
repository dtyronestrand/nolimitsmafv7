import { writable, type Writable } from 'svelte/store';
import { pb } from './pocketbase';
import type { BaseModel } from 'pocketbase';
import { browser } from '$app/environment';

function createPersistentStore() {
    const store: Writable<BaseModel | null> = writable(pb.authStore.model);
    
    if (browser) {
        // Force sync with local storage on init
        const storedAuth = localStorage.getItem('pocketbase_auth');
        if (storedAuth) {
            try {
                const authData = JSON.parse(storedAuth);
                pb.authStore.save(authData.token, authData.model);
                store.set(authData.model);
            } catch (err) {
                console.error('Error loading stored auth:', err);
            }
        }

        pb.authStore.onChange((token, model) => {
            console.log("Auth state changed:", { token: !!token, model: !!model });
            store.set(model);
            
            // Explicitly save to localStorage
            if (token && model) {
                localStorage.setItem('pocketbase_auth', JSON.stringify({
                    token,
                    model
                }));
            } else {
                localStorage.removeItem('pocketbase_auth');
            }
        });
    }
    
    return {
        subscribe: store.subscribe,
        set: store.set,
        update: store.update
    };
}

export const currentUser = createPersistentStore();