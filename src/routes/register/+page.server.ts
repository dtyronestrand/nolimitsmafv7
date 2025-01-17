import type {Actions} from './$types'
import {pb} from '$lib/pocketbase'
import {goto} from '$app/navigation'
   let email = ""
       let password = ""
export const actions = {
    login: async ({cookies, request}) =>{
    
        const data = await request.formData();
        email = JSON.stringify(data.get('email'))
       password = JSON.stringify(data.get('password'))
        try {
          await pb.collection('users').authWithPassword(email, password)
    
          goto('/') // Redirect to home page after login
        } catch (err) {
        let  error = err instanceof Error ? err.message : 'Login failed'
        } 
    }
}satisfies Actions