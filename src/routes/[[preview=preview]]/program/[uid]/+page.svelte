<script lang="ts">
  	import { SliceZone } from '@prismicio/svelte';
	  import { components } from '$lib/slices';
	
	  import Heading1 from '$lib/components/Heading1.svelte'
    import {PrismicText, PrismicImage,PrismicRichText} from '@prismicio/svelte';
    import {currentUser} from '$lib/pocketbase';
	import {enhance} from '$app/forms'
	import { createClient } from '$lib/prismicio';
	export let data;
	let firstName: string = '';
	let lastName: string = '';
	let email: string = '';
	let primaryBranch: string = '';
	


let editProfile = false;
const handleEdit = () => {
	editProfile = !editProfile;
}
</script>
{#if $currentUser !== null }

	<div class="grid grid-rows-[3fr 1fr 1fr 2fr 2fr 3fr] gap-[1ch] min-h-inherit flex-[2 0 320px] grid-cols-[2fr 3fr 1fr 2fr] ">
			<div class="h-full w-full bg-surface-900 rounded-[1rem] col-span-3 py-4">
				<h1>
					<PrismicRichText field={data.page.data.program_title} components={{heading1:Heading1}}/>
				</h1>
			</div>
	
			<div class="h-full w-full bg-primary-400/10 rounded-[1rem] px-4 col-span-1">
				<p class="pt-4 py-4  max-w-xl text-balance mx-auto text-xl  md:text-2xl text-primary-500">
					{data.page.data.program_tagline} 
				</p>
			</div>
		
			<div class="h-full w-full px-8 py-10 bg-gradient-to-t from-surface-500/20 via-secondary-500/20 to-primary-500/20 rounded-[1rem]  col-span-4 row-span-3"><h2 class="text-balance text-center text-5xl font-medium md:text-7xl max-w-3xl mb-8">{$currentUser?.firstName} {$currentUser?.lastName}'s Profile</h2>
				{#if !editProfile}
				<ul>
					<img src={$currentUser?.avatar ? $currentUser.avatar : '/generic-avatar.png'} alt="avatar" class="rounded-full w-24 h-24 mx-auto mb-8"/>
					<li>Name: {$currentUser?.firstName} {$currentUser?.lastName}</li>
					<li>Email: {$currentUser?.email}</li>
					<li>Current Belt:</li>
					<li>Next Belt:</li>
					<li>Primary Branch:</li>
				</ul>
				<button on:click={handleEdit} class="btn mt-8 mx-auto btn-lg variant-filled-success">Edit Profile</button>
				{:else}
				<form method="POST" use:enhance
			>
				<ul>
					<img src={$currentUser?.avatar ? $currentUser.avatar : '/generic-avatar.png'} alt="avatar" class="rounded-full w-24 h-24 mx-auto mb-8"/>
					<li>Name: <input type="text" bind:value={firstName} class="input" placeholder={$currentUser.firstName}/>&nbsp;<input type="text" bind:value={lastName} class="input" placeholder={$currentUser.lastName}/></li>
					<li>Email: {$currentUser?.email}</li>
					<li>Current Belt:</li>
					<li>Next Belt:</li>
					<li>Primary Branch: <select name="primaryBranch" ><option value="Main (Beaverdam)">Main (Beaverdam)</option><option value="Reynolds">Reynolds</option></select></li>
				</ul>
				<button class="btn mt-8 mx-auto btn-lg variant-filled-success">Save</button>
				<button class="btn mt-8 mx-auto btn-lg variant-filled-error" on:click={handleEdit}>Cancel</button>
				</form>
			
				{/if}
			</div>
			
		</div>
	
{:else}
<main class="min-h-screen flex flex-wrap gap-[1ch] p-[1ch]">
<div class="grid grid-rows-[3fr 1fr 1fr 2fr 2fr 3fr] gap-[1ch] min-h-inherit flex-[2 0 320px] grid-cols-[2fr 3fr 1fr 2fr] ">
		<div class="h-full py-4 w-full bg-primary-500/10 rounded-[1rem] col-span-3">
			<h1>
				<PrismicRichText field={data.page.data.program_title} components={{heading1:Heading1}}/>
			</h1>
		</div>
		<div class="h-full w-full bg-primary-400/10 rounded-[1rem] px-4 col-span-1">
			<p class=" py-4  max-w-xl text-balance mx-auto text-xl  md:text-2xl text-primary-500">
				{data.page.data.program_tagline} 
			</p>
		</div>
		<div class="h-full w-full bg-surface-900/50 rounded-[1rem]"></div>
			<div class="h-full w-full px-8 py-10 bg-primary-500/10 rounded-[1rem] col-span-4 row-span-4">	<PrismicImage class="rounded-full mb-8 mx-auto" field={data.page.data.program_image} /><p class="text-xl md:text-2xl">Are you ready to embark on a journey of self-discovery and transformation? Our Taekwondo classes offer the perfect blend of tradition, fitness, and fun. Come experience the art of Taekwondo and unlock your potential.</p>
			<a href='/register'><button class="btn mt-8 mx-auto text-center btn-xl variant-ghost-secondary">Get Started</button></a></div>
		
			<div class="h-full w-full bg-primary-500/10 rounded-[1rem]  p-8 col-span-2"><h2 class="text-balance text-center text-5xl font-medium md:text-7xl max-w-3xl mb-8">Charyut Kyungyet</h2><p class="text-lg">Our Taekwondo class begin with a bow to show respect.  Originating in Korea over 2,000 years ago, Taekwondo is a martial art that combines combat techniques, self-defense, sport, and exercise. The name "Taekwondo" is derived from the Korean words "Tae" (foot), "Kwon" (fist), and "Do" (way of life). This powerful yet graceful martial art is known for its high-flying kicks, swift strikes, and dynamic movements.
				Our Taekwondo classes are designed for students of all ages, from young children to adults. Whether you are a beginner looking to learn the basics or an experienced practitioner aiming to refine your skills, our expert instructors will guide you every step of the way.</p></div>
				<div class="p-10 h-full w-full bg-primary-400/10 rounded-[1rem] col-span-2"><p class="mb-6 text-xl">Taekwondo is more than just a martial art; it's a way to improve your overall health and well-being. Regular practice can help you:</p>
					<ul class="list-disc list-outside justify-between">
					<li><span>Enhance Physical Fitness:</span> Improve your strength, flexibility, and endurance through dynamic workouts.</li>
					<li><span>Boost Mental Clarity: </span>Develop focus, discipline, and resilience, reducing stress and enhancing mental clarity.</li>
					<li><span>Build Self-Confidence:</span> Gain a sense of accomplishment and self-assurance as you progress through the ranks and achieve your goals.</li>
					<li><span>Foster Community:</span> Join a supportive and welcoming community where you can make new friends and build lasting relationships.</li></ul>
			</div>
				
			</div>
			
	
				
	
	</main>
	{/if}
	
		
 

<style >
li{
	@apply mb-6;
}

span{
	@apply font-bold text-xl text-secondary-500;
}
</style>