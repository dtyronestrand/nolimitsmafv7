<script lang="ts">
  import { pb } from '$lib/pocketbase'
  import { currentUser } from '$lib/auth'
  import { onMount } from 'svelte'
  import { get } from 'svelte/store'

  let loading = false
  let error = ''
  let success = ''
  let avatarFile: File | null = null
  let previewUrl = ''

  // Form fields
  let email = ''
  let name = ''
  let firstName = ''
  let lastName = ''
  let username = '' // Added username declaration
  let oldPassword = ''
  let newPassword = ''
  let newPasswordConfirm = ''

  // Get the current user value safely
  $: user = $currentUser

  onMount(() => {
    if (user) {
      email = user.email
      name = user.name || ''
      username = user.username || ''
      firstName = user.firstName || ''
      lastName = user.lastName || ''
      if (user.avatar) {
        previewUrl = pb.files.getUrl(user, user.avatar)
      }
    }
  })

  function handleAvatarChange(event: Event) {
    const target = event.target as HTMLInputElement
    if (target.files && target.files[0]) {
      avatarFile = target.files[0]
      previewUrl = URL.createObjectURL(avatarFile)
    }
  }

  async function updateProfile() {
    loading = true
    error = ''
    success = ''

    try {
      const formData = new FormData()
      const currentUserValue = get(currentUser)

      // Only add fields that have values and are different from current values
      if (email !== currentUserValue?.email) {
        formData.append('email', email)
      }
      if (firstName !== currentUserValue?.firstName) {
        formData.append('firstName', firstName)
      }
      if (lastName !== currentUserValue?.lastName) {
        formData.append('lastName', lastName)
      }
      if (name !== currentUserValue?.name) {
        formData.append('name', name)
      }
      if (username !== currentUserValue?.username) {
        formData.append('username', username)
      }

      // Handle avatar separately
      if (avatarFile) {
        try {
          // Validate file size (max 5MB)
          if (avatarFile.size > 5 * 1024 * 1024) {
            throw new Error('Avatar file must be less than 5MB')
          }

          // Validate file type
          if (!avatarFile.type.startsWith('image/')) {
            throw new Error('File must be an image')
          }

          formData.append('avatar', avatarFile)
        } catch (fileErr) {
          throw new Error(`File error: ${fileErr.message}`)
        }
      }

      const authStoreModel = pb.authStore.model
      if (!authStoreModel?.id) {
        throw new Error('No authenticated user found')
      }

      const record = await pb.collection('users').update(authStoreModel.id, formData)

      currentUser.set(record)
      success = 'Profile updated successfully!'
    } catch (err) {
      console.error('Full error details:', err)
      error = err instanceof Error ? err.message : 'Failed to update profile'
    } finally {
      loading = false
    }
  }

  let editProfile = false
  const toggleEditProfile = () => {
    editProfile = !editProfile
  }
</script>

{#if !editProfile}
  <div class="profile-container">
    <h1>{$currentUser.name}'s Profile</h1>
    {#if previewUrl}
    <img
      src={previewUrl}
      alt="Profile avatar"
      class="avatar-preview"
    />
    {:else}
    <img
    src=" /generic-avatar.png"
    alt="Profile avatar"
    class="avatar-preview"/>
    {/if}
    <p>First Name: {$currentUser.firstName}</p>
    <p>Last Name: {$currentUser.lastName}</p>
    <p>Email: {$currentUser.email}</p>
    <div>
      <button class="btn variant-filled-success" on:click={toggleEditProfile}>Edit Profile</button>
    </div>
  </div>
{:else}
  <div class="profile-container">
    <h1>Update Profile</h1>

    <form on:submit|preventDefault={updateProfile}>
      <!-- Avatar upload section -->
      <div class="avatar-section">
        {#if previewUrl}
          <img src={previewUrl} alt="Profile avatar" class="avatar-preview" />
        {/if}
        <input type="file" accept="image/*" on:change={handleAvatarChange} id="avatar" />
      </div>

      <div>
        <label for="email">Email (readonly)</label>
        <input type="email" id="email" bind:value={email} disabled />
      </div>

      <div>
        <label for="name">Name</label>
        <input type="text" id="name" bind:value={name} />
      </div>

      <div>
        <label for="firstName">First Name</label>
        <input type="text" id="firstName" bind:value={firstName} />
      </div>
      <div>
        <label for="lastName">Last Name</label>
        <input type="text" id="lastName" bind:value={lastName} />

        <h3>Change Password (optional)</h3>

        <div>
          <label for="oldPassword">Current Password</label>
          <input type="password" id="oldPassword" bind:value={oldPassword} />
        </div>

        <div>
          <label for="newPassword">New Password</label>
          <input type="password" id="newPassword" bind:value={newPassword} />
        </div>

        <div>
          <label for="newPasswordConfirm">Confirm New Password</label>
          <input type="password" id="newPasswordConfirm" bind:value={newPasswordConfirm} />
        </div>

        {#if error}
          <p class="error">{error}</p>
        {/if}

        {#if success}
          <p class="success">{success}</p>
        {/if}

        <button type="submit" disabled={loading}>
          {loading ? 'Updating...' : 'Update Profile'}
        </button>
        <button type="button" on:click={toggleEditProfile}>Cancel</button>
      </div>
    </form>
  </div>
{/if}

<style>
  .profile-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
  }

  .avatar-section {
    margin-bottom: 20px;
    text-align: center;
  }

  .avatar-preview {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 10px;
  }

  .error {
    color: red;
  }

  .success {
    color: green;
  }

  form div {
    margin-bottom: 15px;
  }

  label {
    display: block;
    margin-bottom: 5px;
  }

  input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }

  button {
    width: 100%;
    padding: 10px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  button:disabled {
    background-color: #cccccc;
  }
</style>
