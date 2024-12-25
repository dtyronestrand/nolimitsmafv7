<script lang="ts">
    import {currentUser} from '$lib/pocketbase';
    import {Avatar} from '@skeletonlabs/skeleton';
</script>
<h1>{$currentUser?.firstName} {$currentUser?.lastName}'s Profile</h1>
{#if $currentUser?.avatar}
    <img src={$currentUser?.avatar} alt="Profile Picture" />
{:else}
<Avatar src="/generic-avatar.png" width="w-32" rounded="rounded-full"/>
{/if}
<p>Email: {$currentUser?.email}</p>
<p>Role: {$currentUser?.role}</p>
<p>Member Since: {$currentUser?.created}</p>


