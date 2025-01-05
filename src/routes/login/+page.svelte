<script lang="ts">
  import { pb } from '$lib/pocketbase'
  import { goto } from '$app/navigation'

  let email = ''
  let password = ''
  let loading = false
  let error = ''

  async function login() {
    loading = true
    error = ''

    try {
      await pb.collection('users').authWithPassword(email, password)
      goto('/') // Redirect to home page after login
    } catch (err) {
      error = err instanceof Error ? err.message : 'Login failed'
    } finally {
      loading = false
    }
  }
</script>

<form on:submit|preventDefault={login}>
  <div>
    <label for="email">Email</label>
    <input type="email" id="email" bind:value={email} required />
  </div>

  <div>
    <label for="password">Password</label>
    <input type="password" id="password" bind:value={password} required />
  </div>

  {#if error}
    <p class="error">{error}</p>
  {/if}

  <button type="submit" disabled={loading}>
    {loading ? 'Logging in...' : 'Login'}
  </button>
</form>
