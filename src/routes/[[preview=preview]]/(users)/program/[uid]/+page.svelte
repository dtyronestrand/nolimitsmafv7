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
          <h2>
            Are you ready to embark on a journey of self-discovery and transformation? Our Taekwondo
            classes offer the perfect blend of tradition, fitness, and fun.
          </h2>
          <hr />
          <br />
          <p>Come experience the art of Taekwondo and unlock your potential.</p>
        
            <a href="/register" class="button button-pulse">Get Started Us</a>
           
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
  

  

  .button {
  position: relative;
  color: white;
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 1px;
  border: 2px solid white;
  border-radius: 1000px;
  padding: 10px 20px;
  margin: 40px;
  box-shadow: 0 2px 5px 0 rgba(3,6,26,0.15);
  transition: .5s all ease-in-out;
  &:hover {
    cursor: pointer;
    background: white;
    color: #1F4141;
    animation: none;
    animation-play-state: paused;
  }
}




.button-pulse {
  animation: pulse 2s infinite 3s cubic-bezier(0.25, 0, 0, 1);
  box-shadow: 0 0 0 0 white;
}
@keyframes pulse {
  to {
    box-shadow: 0 0 0 18px rgba(255, 255, 255, 0); 
  }
}
    
</style>
