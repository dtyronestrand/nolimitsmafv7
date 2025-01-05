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
        <div class="circle-orange-small"></div>
        <div class="circle-blue"></div>
        <div class="circle-orange-big"></div>
        <div class="circle-center"></div>
        <div class="circle-center-text">
          <h2>
            Are you ready to embark on a journey of self-discovery and transformation? Our Taekwondo
            classes offer the perfect blend of tradition, fitness, and fun.
          </h2>
          <hr />
          <br />
          <p>Come experience the art of Taekwondo and unlock your potential.</p>
          <div class="cta">
            <button>Get Started Us</button>
            <div class="btn"></div>
          </div>
        </div>
        <div class="circle-green"></div>
        <div class="circle-blue-small"></div>
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
  .gradient-text {
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
  .container {
    @apply flex relative;
    box-shadow: 2px 18px 70px 0px #9d9d9d;
  }

  .circle-orange-small {
    height: 120px;
    width: 120px;
    position: relative;
    top: 80px;
    left: 60px;
    @apply bg-secondary-400;
    border-radius: 50%;
    opacity: 0.7;
  }

  .circle-orange-big {
    height: 260px;
    width: 260px;
    position: relative;
    top: -110px;
    right: 220px;
    @apply bg-secondary-500;
    border-radius: 50%;
    opacity: 0.7;
  }

  .circle-blue {
    height: 400px;
    width: 400px;
    position: relative;
    top: -150px;
    right: -100px;
    @apply bg-primary-300;
    border-radius: 50%;
    opacity: 0.5;
  }

  .circle-blue-small {
    height: 170px;
    width: 170px;
    position: relative;
    bottom: -100px;
    left: 50px;
    @apply bg-primary-500;
    border-radius: 50%;
    opacity: 0.5;
  }

  .circle-center {
    height: 600px;
    width: 600px;
    position: relative;
    display: flex;

    @apply bg-surface-500/30;
    border-radius: 50%;
    opacity: 0.5;
  }

  .circle-center-text {
    height: 600px;
    width: 600px;

    background-color: transparent;
    border-radius: 50%;
    opacity: 1;
    @apply text-primary-100;
    padding: 12% 10%;
    box-sizing: border-box;
  }

  h1 {
    font-size: 42px;
  }

  hr {
    width: 50%;
    float: left;

    height: 1px;
    @apply border-secondary-500 bg-surface-500/30;
  }

  p {
    margin-top: 5px;
  }

  .cta {
    height: 80px;
    width: 100px;
    margin-right: 15%;
    margin-top: 5%;
    float: right;
  }

  button {
    height: 80px;
    width: 100px;
    float: right;
    cursor: pointer;
    background: none;
    border: 2px solid;
    @apply border-primary-100 text-primary-100;
    border-radius: 3px;

    font-weight: bolder;
    font-size: 16px;
    outline: none;
  }

  .btn {
    width: 0;
    height: 80px;
    @apply bg-secondary-500;
    transition: width 0.3s ease-in;
  }

  button:hover {
    @apply text-secondary-500;
    transition: color 0.3s ease-in;
  }

  .cta:hover .btn {
    width: 100px;

    @apply bg-primary-100 text-secondary-500;
  }

  .circle-green {
    height: 250px;
    width: 250px;
    position: absolute;
    bottom: 60px;
    left: 150px;
    @apply bg-primary-500;
    border-radius: 50%;
    opacity: 0.5;
  }
</style>
