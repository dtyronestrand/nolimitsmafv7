<script>
  import clsx from 'clsx'
  import BeginnerBelts from '$lib/components/BeginnerBelts.svelte'
  import IntermediateBelts from '$lib/components/IntermediateBelts.svelte'
  import AdvancedBelts from '$lib/components/AdvancedBelts.svelte'
  import BoDanBelts from '$lib/components/BoDanBelts.svelte'
</script>

<h1
  class="text-balance text-primary-400 mb-8 text-center text-5xl font-medium max-w-3xl mx-auto md:text-7xl"
>
  Belts
</h1>
<div class="text-2xl text-surface-50 flex flex-col">
  <p>
    Belting in Taekwondo represents far more than just a colorful piece of fabric around the waist.
    It is a powerful symbol of progress, dedication, and mastery, reflecting a student's journey
    through the art. Each belt level embodies the hard work, discipline, and perseverance required
    to reach new milestones in both skill and personal growth.
  </p>
  <p>
    The belt system provides a structured path for learning, with each rank introducing new
    techniques, forms (poomsae), and principles. As students advance, they develop not only their
    physical abilities but also their mental strength and character, embracing Taekwondo's core
    values of respect, integrity, and indomitable spirit.
  </p>
  <p>
    Belts also play a crucial role in motivation. They give students clear, achievable goals to
    strive for, fostering a sense of accomplishment and encouraging continuous improvement. The
    progression through the belt ranks reflects not only growing expertise but also a deepening
    commitment to the art and its traditions.
  </p>
  <p>
    For instructors and students alike, the belt system creates a shared language of progress and
    achievement. It unites practitioners of all ages and backgrounds, celebrating their unique
    journeys while honoring the collective heritage of Taekwondo.
  </p>
  <p>
    In short, belting is not just a measure of skill; it’s a testament to personal growth, a roadmap
    for success, and a cornerstone of the Taekwondo experience.
  </p>
</div>
<section class="mx-auto flex w-full max-w-6xl flex-col items-center">
  <h2 class=" text-center text-3xl mt-20 font-medium md:text-5xl max-w-3xl">Advancement</h2>
  <h3 class="text-balance mt-10 text-center text-xl font-medium md:text-3xl max-w-3xl">
    Beginner Belts
  </h3>
  <BeginnerBelts />
  <h3 class="text-balance mt-10 text-center text-xl font-medium md:text-3xl max-w-3xl">
    Intermediate Belts
  </h3>
  <IntermediateBelts />
  <h3 class="text-balance mt-10 text-center text-xl font-medium md:text-3xl max-w-3xl">
    Advanced Belts
  </h3>
  <AdvancedBelts />
  <h3 class="text-balance mt-10 text-center text-xl font-medium md:text-3xl max-w-3xl">
    Bo-Dan Belts
  </h3>
  <BoDanBelts />
</section>

<style>
  p {
    margin-bottom: 1rem;
  }
</style>
