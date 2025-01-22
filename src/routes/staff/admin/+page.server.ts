import { pb } from '$lib/pocketbase'

export async function load({ locals, fetch, cookies }) {
  const users = await pb.collection('users').getFullList()
  return {
    users,
  }
}
