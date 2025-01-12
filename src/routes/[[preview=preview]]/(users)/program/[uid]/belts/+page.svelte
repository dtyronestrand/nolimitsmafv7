<script>
    import clsx from 'clsx';
    import BeginnerBelts from '$lib/components/BeginnerBelts.svelte';
	import IntermediateBelts from '$lib/components/IntermediateBelts.svelte';
	import AdvancedBelts from '$lib/components/AdvancedBelts.svelte';
	import BoDanBelts from '$lib/components/BoDanBelts.svelte';
   
 
 
</script>
<section class="mx-auto flex w-full max-w-6xl flex-col items-center">

    <h1   class="text-balance text-primary-400 text-center text-5xl font-medium max-w-3xl mx-auto md:text-7xl">Belts</h1>
    <p>In taekwondo, beltng </p>
    
    <h2 class=" text-center text-3xl mt-20 font-medium md:text-5xl max-w-3xl">Advancement</h2>
    <h3 class="text-balance mt-10 text-center text-xl font-medium md:text-3xl max-w-3xl">Beginner Belts</h3>
   <BeginnerBelts/>
    <h3 class="text-balance mt-10 text-center text-xl font-medium md:text-3xl max-w-3xl">Intermediate Belts</h3>
    <IntermediateBelts/>
    <h3 class="text-balance mt-10 text-center text-xl font-medium md:text-3xl max-w-3xl">Advanced Belts</h3>
    <AdvancedBelts/>
        <h3 class="text-balance mt-10 text-center text-xl font-medium md:text-3xl max-w-3xl">Bo-Dan Belts</h3>
        <BoDanBelts/>

</section>
