<script lang="ts">
  import { SliceZone } from '@prismicio/svelte'
  import { components } from '$lib/slices'
  import { PrismicText, PrismicImage, PrismicRichText } from '@prismicio/svelte'
  import { currentUser } from '$lib/pocketbase'
  import { goto } from '$app/navigation'
  let { data } = $props();
  console.log(currentUser)
  const getStarted = () => {
    goto('/register')
  }
</script>

<div class=" mx-auto -mt-6">
  <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
    <bento-item
      class="rounded-[0.75rem] gap-[1.5rem] col-span-1 bg-gradient-to-br from-surface-300/30 to-surface-800/40 border-4 border-secondary-500 backdrop-blur-xl filter shadow-md shadow-white"
    >
     
        <h1 class="text-2xl justify-self-center pt-6 md:text-3xl lg:text-5xl font-bold mb-4">
          <PrismicText field={data.page.data.program_title} />
        </h1>
        <p class="text-xl text-primary-200 justify-self-center">{data.page.data.program_tagline}</p>
    
    </bento-item>
    <bento-item
      class="rounded-[0.75rem] gap-[1.5rem] bg-gradient-to-br from-surface-300/30 to-surface-800/40 border-4 border-secondary-500 backdrop-blur-xl py-6 filter shadow-md shadow-white col-span-1"
    >
      <h2 class="text-2xl text-center font-bold mb-4">Schol Motto</h2>
      <p class="prose prose-invert prose-lg text-center">Train with integrity, humility and heart.</p>
    </bento-item>
    <bento-item
      class="rounded-[0.75rem] gap-[1.5rem] bg-gradient-to-br from-surface-300/30 to-surface-800/40 border-4 border-secondary-500 backdrop-blur-xl py-6 filter shadow-md shadow-white md:col-span-2"
    >
      <h2 class="text-2xl font-bold mb-4 text-center">School Oath</h2>
      <p class="prose prose-invert mx-auto prose-lg text-center">
        I will come to each class with an open mind and loving spirit. I will honor martial arts
        tradition, unaffected by the expectations of others. I will set goals and work hard to
        achieve them. My only limitation is myself.
      </p>
    </bento-item>
    <bento-item
      class="rounded-[0.75rem] p-10 gap-[1.5rem] bg-gradient-to-br from-surface-300/30 to-surface-800/40 border-4 border-secondary-500 md:col-span-4 backdrop-blur-xl filter shadow-md shadow-white"
    >
      <div class="container mx-auto">
        <nav class="glass">
          <ul class="mx-auto">
            <li>
              <p class="text-2xl md:text-4xl">
                Come experience the art of Taekwondo and unlock your potential.
              </p>
            </li>
          </ul>
        </nav>
        <main>
          <section>
            <div class="headings">
              <div class="text-center">
                <h2 class="cta">ARE YOU READY?</h2>
              </div>
              <div class="mt-8 md:mt-12">
                <h3 class="font-sans">Embark on a journey of self-discovery and transformation.</h3>
                <h3 class="font-sans">
                  Our Taekwondo classes offer the perfect blend of tradition, fitness, and fun.
                </h3>
                <div class="mx-auto flex items-center justify-center">
                  <button type="button" onclick={getStarted} class=" mt-8">Get Started</button>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </bento-item>
    <bento-item
      class=" rounded-[0.75rem] p-10 gap-[1.5rem] bg-gradient-to-br from-surface-300/30 to-surface-800/40 border-4 border-secondary-500 backdrop-blur-xl filter shadow-md shadow-white md:col-span-2"
    >
      <h2 class="text-2xl font-bold mb-4">Charyut Kyungyet</h2>
      <p class="prose prose-invert prose-lg text-primary-200">
        Originating in Korea over 2,000 years ago, Taekwondo is a martial art that combines combat
        techniques, self-defense, sport, and exercise. The name "Taekwondo" is derived from the
        Korean words "Tae" (foot), "Kwon" (fist), and "Do" (way of life). This powerful yet graceful
        martial art is known for its high-flying kicks, swift strikes, and dynamic movements. Our
        Taekwondo classes are designed for students of all ages, from young children to adults.
        Whether you are a beginner looking to learn the basics or an experienced practitioner aiming
        to refine your skills, our expert instructors will guide you every step of the way.
      </p>
    </bento-item>
    <bento-item
      class="rounded-[0.75rem] p-10 gap-[1.5rem] md:col-span-2 bg-gradient-to-br from-surface-300/30 to-surface-800/40 border-4 border-secondary-500 backdrop-blur-xl filter shadow-md shadow-white"
    >
      <p class="prose prose-invert prose-lg text-primary-200 mb-8">
        Taekwondo is more than just a martial art; it's a way to improve your overall health and
        well-being. Regular practice can help you:
      </p>
      <ul class="prose prose-invert prose-lg text-primary-200 list-outside list-disc">
        <li>
          <span class="font-bold">Enhance Physical Fitness:</span>
          Improve your strength, flexibility, and endurance through dynamic workouts.
        </li>
        <li>
          <span class="font-bold">Boost Mental Clarity:</span>
          Develop focus, discipline, and resilience, reducing stress and enhancing mental clarity.
        </li>
        <li>
          <span class="font-bold">Build Self-Confidence:</span>
          Gain a sense of accomplishment and self-assurance as you progress through the ranks and achieve
          your goals.
        </li>
        <li>
          <span class="font-bold">Foster Community:</span>
          Join a supportive and welcoming community where you can make new friends and build lasting
          relationships
        </li>
      </ul>
    </bento-item>
  </div>
</div>

<style>
  :root {
    --icon-dimensions: 4rem;
    --full-w: 100%;
    --full-h: 100%;
    --default-font: -apple-system, BlinkMacSystemFont, Roboto, helvetica neue, sans-serif;
    --spartan: 'LeagueSpartanVariable';

    --h1-clamp: clamp(6.5rem, 15vw, 30rem);
    --default-font-size: 1.75rem;
    --duration: 350ms;
    --gap: 0.4rem;
    --default-padding: 1.2rem;
    --z-20: 20;
    --z-30: 30;

    --black: rgb(12, 12, 10);
    --white: rgb(255, 255, 255);
    --pale-blue: #c1dcee;
    --blue: #389dd6;
    --dark-blue: #064f99;
    --light-blue: #68b0de;

    --bg-1: url('/fire.webp');
    --bg-2: url('/fire3.jpg');
  }

  ::selection {
    -webkit-background-clip: text;
    -webkit-box-direction: clone;
    -webkit-text-fill-color: var(--yellow);
    background-color: var(--light-blue);
    color: var(--dark-blue);
  }

  ul {
    gap: 0.8rem;
  }

  h2.cta {
    -webkit-background-clip: text;
    -webkit-box-decoration-break: clone;
    -webkit-text-fill-color: rgba(0, 0, 0, 0);
    background-image: var(--bg-2);
    background-position: right 3rem top 75%;
    background-repeat: no-repeat;
    background-size: cover;
    filter: saturate(1.5);
    display: inline;
    font-size: clamp(4rem, 6vw, 8.5rem);
    @apply text-center;
    order: 2;
    overflow: hidden;
    user-select: none;
  }



  h3 {
    @apply text-center text-2xl;
  }

  h3::before,
  h3::after {
    content: '';
    border-top: 1.2rem solid;
    @apply border-primary-400;
  }

  h3,
  h4 {
    @apply text-surface-50;
  }

  .container {
    display: flex;
    flex-flow: column;
    overflow: hidden;
    position: relative;
  }

  .container::before {
    @apply rounded-2xl;
    background-image: var(--bg-1);
    background-position: center 50%;
    background-repeat: no-repeat;
    background-size: cover;
    content: '';
    height: 100%;
    filter: brightness(0.4);
    position: absolute;
    inset: 0;
    width: 100%;
  }

  /* Continue un-nesting similarly */
  nav {
    align-items: center;
    display: flex;
    grid-area: nav;
    gap: 1.2rem;
    justify-content: space-between;
    padding: 1.2rem;
    position: relative;
    z-index: 30;
  }

  nav > a {
    font-size: 1.75rem;
  }

  main {
    align-items: center;
    display: flex;
    flex-flow: column nowrap;
    grid-area: main;
    justify-content: center;
    padding: 1.2rem;
    position: relative;
    z-index: 20;
  }

  main > * {
    margin: 1.2rem 0;
  }

  button {
    appearance: none;

    padding: 1rem 1.33rem;

    @apply text-surface-50 bg-gradient-to-t from-surface-500 via-secondary-500 to-primary-500;
    border-radius: 3rem;
    border: none;

    font-size: 1.5rem;

    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-name: pulse-shadow;

    cursor: pointer;
  }

  button:hover {
    animation-duration: 1s;
  }

  @keyframes pulse-shadow {
    0% {
      box-shadow: 0 0 0 0 #f28729;
    }

    50% {
      box-shadow: 0 0 0 10px #f2b33d;
    }

    100% {
      box-shadow: 0 0 0 0px #59190b;
    }
  }
</style>
