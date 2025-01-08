<script>
  import { SliceZone } from '@prismicio/svelte'
  import { components } from '$lib/slices'
  import { PrismicText, PrismicImage, PrismicRichText } from '@prismicio/svelte'
  import { currentUser } from '$lib/pocketbase'
  export let data
  console.log(currentUser)
</script>

<div class=" mx-auto p-8">
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <bento-item
      class="rounded-[0.75rem] gap-[1.5rem] md:col-span-2 bg-gradient-to-br from-surface-300/30 to-surface-800/40 border-4 border-secondary-500 backdrop-blur-xl filter shadow-md shadow-white"
    >
      <div class="p-10">
       
          <h1 class="text-4xl md:text-5xl font-bold mb-4">
            <PrismicText field={data.page.data.program_title} />
          
        </h1>
        <p class="text-xl text-primary-200">{data.page.data.program_tagline}</p>
      </div>
    </bento-item>
    <bento-item
      class="rounded-[0.75rem] gap-[1.5rem] bg-gradient-to-br from-surface-300/30 to-surface-800/40 border-4 border-secondary-500 backdrop-blur-xl filter shadow-md shadow-white"
    >
      <figure class="rounded-lg">
        <PrismicImage field={data.page.data.program_image} />
      </figure>
    </bento-item>
    <bento-item
      class="rounded-[0.75rem] p-10 gap-[1.5rem] bg-gradient-to-br from-surface-300/30 to-surface-800/40 border-4 border-secondary-500 md:col-span-3 backdrop-blur-xl filter shadow-md shadow-white"
    >
    <div class="container">
      <nav class="glass">
     
        <ul>
          <li>
            <p class="text-center text-2xl md:text-4xl">Come experience the art of Taekwondo and unlock your potential.</p>
          </li>
        </ul>
      </nav>
      <main>
        <section>
          <div class="headings">
            <h2>ARE YOU READY?</h2>
            <h3 class="font-sans">Embark on a journey of self-discovery and transformation.</h3>
            <h3 class="font-sans">Our Taekwondo classes offer the perfect blend of tradition, fitness, and fun.</h3>
        </div>
        </section>
      </main>
      <img src="https://assets.codepen.io/1149983/mountain-lines.svg" class="mountain-lines" alt="image of mountain contour lines for decorative purposes only over the main landing area" />
    </div>
    </bento-item>
    <bento-item
      class=" rounded-[0.75rem] p-10 gap-[1.5rem] bg-gradient-to-br from-surface-300/30 to-surface-800/40 border-4 border-secondary-500 backdrop-blur-xl filter shadow-md shadow-white"
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
  --spartan: "LeagueSpartanVariable";

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

  --bg-1: url("/fire.webp");
  --bg-2: url("https://assets.codepen.io/1149983/gaetan-meyer-WemqIKiduMo-unsplash+%281%29+%281%29.jpg");
}




::selection {
  -webkit-background-clip: text;
  -webkit-box-direction: clone;
  -webkit-text-fill-color: var(--yellow);
  background-color: var(--light-blue);
  color: var(--dark-blue);
}



img {
  max-width: 100%;
  display: block;
}

ul {
  gap: 0.4rem;
}

h2 {
  -webkit-background-clip: text;
  -webkit-box-decoration-break: clone;
  -webkit-text-fill-color: rgba(0, 0, 0, 0);
  background-image: var(--bg-2);
  background-position: center 75%;
  background-repeat: no-repeat;
  background-size: cover;
  display: inline;
  font-size: clamp(3.75rem, 7vw,15rem);
  order: 2;
  overflow: hidden;
  user-select: none;
}

h2,
h3 {
  margin: 0 auto;
}

h2 + h3 {
  border-bottom: 1.2rem solid;
  @apply border-b-primary-400;
  order: 3;
}

h3 {
  align-items: center;
  display: grid;
  font-size: calc(1.75rem * 1.25);
  
  grid-gap: calc(0.4rem * 1.25);
  grid-template-columns: calc(0.4rem* 2) auto calc(0.4rem* 2);
  order: 1;
  width: fit-content;
}

h3::before,
h3::after {
  content: "";
  border-top:1.2rem solid;
  @apply border-t-primary-400;

}

h3,
h4 {
@apply text-surface-50;
  position: relative;
}

h4 {
  align-items: baseline;
  display: flex;
  font-size: calc(1.75rem * 1.5);
 
  padding: calc(1.2rem / 2);
  z-index: 2;
}

svg {
  fill: var(--white);
  mix-blend-mode: exclusion;
  width: 4rem;
}

a {
  align-items: center;
@apply text-surface-50;
  cursor: pointer;
  display: flex;
  flex-flow: row nowrap;
  font-size: 1.75rem;
 
  overflow: hidden;
  position: relative;
  text-decoration: none;
  touch-action: manipulation;
}

a:hover,
a:focus {
  @apply border-secondary-500;
}

.container {
  display: flex;
  flex-flow: column wrap;
  display: grid;
  grid-template-areas: "nav" "main";
  grid-template-columns: 1fr;
  grid-template-rows: 5rem calc(100vh - 5rem);
  min-height: 100vh;
  min-height: -webkit-fill-available;
  overflow: hidden;
  position: relative;
}

.container::before {
  background-image: var(--bg-1);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  content: "";
  height: 100%;
  filter: brightness(0.25);
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

.button {
  background-color: var(--blue);
  border: none;
  border-radius: 0.4rem;
  color: var(--white);
  font-size: var(--default-font-size);
  font-variation-settings: "wght" 700;
  padding: calc(var(--default-padding) / 2) var(--default-padding);
  text-transform: uppercase;
  transition: background-color var(--duration) ease-in-out;
}

.button:hover,
.button:focus {
  background-color: var(--dark-blue);
}

.footer {
  align-items: center;
  background-color: var(--black);
  color: var(--pale-blue);
  display: flex;
  flex-flow: column nowrap;
  gap: var(--gap);
  padding: var(--default-padding);
  text-align: center;
}

.footer a {
  color: var(--blue);
  font-variation-settings: "wght" 600;
  text-decoration: none;
}

.footer a:hover,
.footer a:focus {
  color: var(--light-blue);
}

.card {
  background-color: var(--white);
  border-radius: 0.8rem;
  box-shadow: 0 0.4rem 1rem rgba(0, 0, 0, 0.1);
  color: var(--black);
  display: flex;
  flex-direction: column;
  gap: var(--default-padding);
  padding: var(--default-padding);
}

.card h3 {
  font-size: calc(var(--default-font-size) * 1.25);
  margin-bottom: var(--gap);
}

.card p {
  font-size: var(--default-font-size);
  line-height: 1.5;
}

.card .button {
  align-self: flex-start;
}

.icon {
  align-items: center;
  background-color: var(--pale-blue);
  border-radius: 50%;
  display: flex;
  height: var(--icon-dimensions);
  justify-content: center;
  width: var(--icon-dimensions);
}

.icon svg {
  fill: var(--dark-blue);
  height: 50%;
  width: 50%;
}

.hero {
  align-items: center;
  display: flex;
  flex-flow: column nowrap;
  gap: var(--default-padding);
  text-align: center;
}

.hero h1 {
  margin-bottom: var(--gap);
}

.hero p {
  font-size: calc(var(--default-font-size) * 1.2);
}

.hero .button {
  margin-top: 1.2rem;
}

.grid {
  display: grid;
  gap: 1.2rem;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  width: 100%
}


</style>