<script lang="ts">
    import {pb} from '$lib/pocketbase'
    import {page} from '$app/stores'
   import clsx from 'clsx'
	import { RecordService } from 'pocketbase';
   export let data
   let record = ""
   let role
    let edit: number | undefined = undefined

const handleDelete = async () => {

    const response = await pb.collection('users').delete(record)
    console.log(response)
}

const save = async () => {
    const response = await pb.collection('users').update(record)
    console.log(response)
    edit = undefined
}
</script>

<h1>NLMAF Members</h1>
<div>
    <table class="mx-auto my-4">
        <thead>
            <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>TKD Student</th>
                <th>Avatar</th>
            </tr>
        </thead>
        <tbody>
            {#each data.users as user, index}
            {#if edit !== index}
                <tr class={clsx(index % 2 === 0 && 'bg-primary-300 text-surface-900')}>
                    <td>{user.id}</td>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.email}</td>
                    <td>{user.role }</td>
                    <td><input type="checkbox" disabled bind:value={user.TKD} name="TKD" id="TKD"></td>
                    <td>{user.avatar}</td>
                    <td>
                        <button on:click={()=>{edit=index}}>Edit {index}</button>
                    </td>
                    </tr>
                {:else}
                <tr class={clsx(index % 2 === 0 && 'bg-primary-300 text-surface-900')}>
                    <td>{user.id}</td>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.email}</td>
                    <td><select bind:value={user.role} >
                        <option value="Admin">Admin</option>
                        <option value="User">User</option>  
                        <option value="Staff">Staff</option>
                        <option value="Member">Member</option>
                    </select></td>
                    <td><input type="checkbox" bind:value={user.TKD}></td>
                    <td>{user.avatar}</td>
                    <td>
                        <button on:click={()=>{edit = undefined} }>Cancel</button>
                        <button on:click={save}>Save</button>
                        <button on:click={handleDelete}>Delete</button>
                    </td>
                </tr>
            {/if}
            {/each}
        </tbody>
    </table>
</div>
<style>
    table, th, td{
        @apply border-2 border-secondary-600 border-collapse;
    }

    table td, table th {
        @apply text-center p-3;
    }
</style>