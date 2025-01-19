<!-- @migration-task Error while migrating Svelte code: `<tr>` cannot be a child of `<table>`. `<table>` only allows these children: `<caption>`, `<colgroup>`, `<tbody>`, `<thead>`, `<tfoot>`, `<style>`, `<script>`, `<template>`. The browser will 'repair' the HTML (by moving, removing, or inserting elements) which breaks Svelte's assumptions about the structure of your components.
https://svelte.dev/e/node_invalid_placement -->
<script lang="ts">
  import clsx from 'clsx'
  import  {Flip}  from 'gsap/dist/Flip';
  import {gsap} from 'gsap/dist/gsap';
  import {onMount} from 'svelte';
  gsap.registerPlugin(Flip);
  const dur = 0.5;
  let lastItems = [];
  let lastIndex = -1;
 
 let options: HTMLElement[] = []
  onMount(()=>{
   options = gsap.utils.toArray<HTMLElement>('.optionc');
  
options.forEach((option, i)=>{
      option.addEventListener(`click`, ()=>{
        options.forEach((o, j)=>{
          if(j !== i){
            o.classList.remove(`active`);
          } 
        });
      const itemTargets = gsap.utils.toArray<HTMLElement>(option.querySelectorAll('*'));
      const isSameAsLast = i === lastIndex && options[lastIndex];
      const targets = isSameAsLast ? options.concat(itemTargets) : options.concat(itemTargets.concat(lastItems));
      const state = Flip.getState(targets);
      if(!isSameAsLast && options[lastIndex]){
        options[lastIndex].classList.remove('active');
      }
      options[i].classList.toggle('active');
    
      Flip.from(state, {
        targets:".optionc",
        duration: dur,
        ease: "power1.inOut",
        absolute: true,
        nested: true,
        onEnter: elements => gsap.fromTo(elements, {opacity: 0}, {opacity:1, duration: dur/2, delay: dur/2}),
        onLeave: elements => gsap.fromTo(elements, {opacity: (i, el) => state.getProperty(el, "opacity")}, {opacity: 0, duration: dur/2}),
      });
      lastItems = itemTargets;
      lastIndex = i;
    }
  )
    });
  });


  </script>

<div class="optionsc">
  <div
    class="optionc" 
  >
    <div class="shadow"></div>
    <div class="label"><div class="icon bg-[red]" /></div>
    <div class="info ">
      <h4>Red Belt</h4>
      <table class="mt-8">
        <tbody>
          <tr>
            <td>Time:</td>
            <td>~6- 8 Months</td>
          </tr>
          <tr>
            <td>Ponse</td>
            <td>Taekwondo Form 8 - Pal Jang & ITF Form Hwa-Rang</td>
          </tr>
          <tr>
            <td>Sparring/Self-Defense</td>
            <td>
              <ul>
          <li>Proficiency 3 & 4 One Step Sparring</li>
          <li>Knife Self-Defense 3 & 4</li>
          <li>Combination 13</li>
              </ul>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>Breaking</td>
            <td>Ax Kick and Back Fist</td>
          </tr>
          <tr>
            <td>Knowledge:</td>
            <td>Poomsae name & meaning, Manual Questions Through 10</td>
          </tr>
          <tr>
            <td>Assisting in at least 4 classes per month</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div
    class="optionc "
  >
    <div class="shadow"></div>
    <div class="label"><div class="flex icon bg-[red]" /></div>
    <div class="info">
      <h4>Red Belt Black Stripe/Bo-Dan</h4>
      <table class="mt-8">
        <tbody>
          <tr>
            <td>Time:</td>
            <td>~6 -9 months</td>
          </tr>
          <tr>
            <td>Poomsae</td>
            <td>Koryo + all additional color belt Poomsae</td>
          </tr>
          <tr>
            <td>Sparring/Self-Defense</td>
            <td>
              <ul>
          <li>All One-Steps</li>
          <li>All Self-Defense</li>
          <li>Combinations 1-13 both sides</li>
              </ul>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>Breaking</td>
            <td>Creative Break one board per move. Minimum of 3 moves.</td>
          </tr>
          <tr>
            <td>Knowledge:</td>
            <td>
              Poomsae name & meaning (all), Manual Questions 1-21, History of Taekwondo, Tenets of
              Taekwondo, Philosophy of Taekwondo
            </td>
          </tr>
          <tr>
            <td>Paper (min. 1000 words)</td>
          </tr>
          <tr>
            <td>Book Report Reading Assignment</td>
          </tr>
          <tr>
            <td>2 Letters of Recommendation</td>
          </tr>
          <tr>
            <td>20 hours of community service</td>
          </tr>
          <tr>
            <td>Regular assistance in classes (min. once per week)</td>
          </tr>
          <tr>
            <td>Pretest:</td>
            <td>Dojang Cleanse & Meditation (1 hour)</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

<style>
  * {
    box-sizing: border-box;
  }
  
  :root {
    --optioncColor1: red;
    --optioncColor3: purple;
  }
  
  td {
    @apply pl-6 py-2;
  }

  h4 {
    @apply text-3xl;
  }
  
  .optionsc {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    overflow: hidden;
    min-width: 600px;
    max-width: 900px;
    width: calc(100% - 100px);
    height: 600px;
  }

  .optionc {
    position: relative;
    overflow: hidden;
    min-width: 60px;
    margin: 10px;
    background-size: auto 120%;
    background-position: center;
    cursor: pointer;
  }

  .optionc:nth-child(1) {
    background-color: var(--optioncColor1);
  }

  .optionc:nth-child(2) {
    background-image: linear-gradient(
      90deg,
      #eb0e0e 23.68%,
      #000000 23.68%,
      #000000 50%,
      #eb0e0e 50%,
      #eb0e0e 73.68%,
      #000000 73.68%,
      #000000 100%
    );
    background-size: 760px;
    background-position: left 50%;
    background-repeat: no-repeat;
  }

  .optionc:not(.active) .info {
    display: none;
  }

  .optionsc .optionc.active {
    flex-grow: 10000;
    transform: scale(1);
    max-width: 600px;
    margin: 0;
    border-radius: 40px;
    background-color: #333 !important; /* Background color for active state */
    border: 2px solid orange !important; /* Border color */
    color: #fff !important; /* Text color */
    background-size: auto 100%;
  }

  .optionsc .optionc.active .shadow {
    box-shadow: inset 0 -120px 120px -120px black,
                inset 0 -120px 120px -100px black;
  }

  .optionsc .optionc.active .label {
    bottom: 20px;
    left: 20px;
  }

  .optionc:not(.active) {
    flex-grow: 1;
    border-radius: 30px;
  }

  .optionc:not(.active) .shadow {
    bottom: -40px;
    box-shadow: inset 0 -120px 0px -120px black,
                inset 0 -120px 0px -100px black;
  }

  .optionc:not(.active) .label {
    bottom: 10px;
    left: 10px;
  }

  .shadow {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 120px;
    transition: all 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);
  }

  .label {
    display: flex;
    position: absolute;
    right: 0;
    height: 40px;
    transition: all 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);
  }

  .label .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 40px;
    max-width: 40px;
    height: 40px;
    border-radius: 100%;
    border: 2px solid black;
  }

  .info {
    padding: 3rem;
  }

  @media screen and (max-width: 718px) {
    .optionsc { min-width: 520px; }
  }

  @media screen and (max-width: 638px) {
    .optionsc { min-width: 440px; }
  }

  @media screen and (max-width: 558px) {
    .optionsc { min-width: 360px; }
  }

  @media screen and (max-width: 478px) {
    .optionsc { min-width: 280px; }
  }
</style>
