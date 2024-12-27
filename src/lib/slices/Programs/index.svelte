<script lang="ts">
  import GoldText from '$lib/components/GoldText.svelte'
  import Heading from './Heading.svelte'
  import Bounded from '$lib/components/Bounded.svelte'
  import { PrismicRichText, PrismicLink, PrismicText } from '@prismicio/svelte'
  import ButtonLink from '$lib/components/ButtonLink.svelte'
  import { isFilled, type Content } from '@prismicio/client'
  export let slice: Content.ProgramsSlice
  export let programs: Content.ProgramDocument[]
  const buttonClass = 'btn btn-md variant-filled-primary'
</script>

<Bounded data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
  <div class="mt-20 grid gap-16 overflow-visible">
    <div class="row">
      {#each programs as program, index}
        <div class="effect1 container">
          <img src={program.data.program_image.url} alt="" />
          <span class="text-center">
            <PrismicRichText
              field={program.data.program_title}
              components={{ em: GoldText, heading1: Heading }}
            />
          </span>
          <div class="caption">
            <div class="leftSide"></div>
            <span class="rightInfo">
              <PrismicLink document={program}>
                <button class="btn btn-md variant-filled-primary">Learn More</button>
              </PrismicLink>
            </span>

            <span class="leftInfo">{program.data.program_tagline}</span>
          </div>
        </div>
      {/each}
    </div>
  </div>
</Bounded>

<style>
  .row {
    margin: 0 auto;
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;
  }

  .row:last-child {
    margin-bottom: 0px;
  }

  .row .container {
    min-width: 650px;
    max-width: 850px;
    box-shadow: 0 0 0px 4px rgba(18, 18, 18, 0.47);
  }

  .container:hover {
    box-shadow: 0 0 10px 4px rgba(0, 0, 0, 0.47);
  }

  .row:nth-of-type(1) .container {
    width: auto;
    min-width: 500px;
    max-width: 650px;
  }

  .row img {
    cursor: pointer;
    display: block;
    width: 100%;
  }

  .row .caption {
    cursor: pointer;
  }

  .row h2 {
    display: inline;
    background: rgba(51, 51, 51, 0.5);
    padding: 15px;
    letter-spacing: 2px;
    font-weight: 100;
    font-size: 22px;
    cursor: pointer;
  }

  .row p {
    display: inline-block;
    background: rgba(51, 51, 51, 0.7);
    padding: 10px;
    margin-top: 20px;
    font-weight: 100;
    font-size: 14px;
    cursor: pointer;
  }

  /* 
    ===== Effect 1 =====
*/
  .effect1 {
    overflow: hidden;
    clip-path: circle(50% at 50% 50%);
    position: relative;
  }

  .effect1 img {
    position: relative;
  }

  /*Line*/
  .effect1 .caption:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 49%;
    width: 3px;
    height: 10px;
    @apply bg-primary-300;
    transition:
      top 0.5s,
      height 0.5s;
  }

  .effect1:hover .caption:before,
  .effect1:active .caption:before {
    top: 0;
    height: 100%;
  }

  /*Left & Right Side*/
  .effect1 .leftSide,
  .effect1 .rightSide {
    position: absolute;
    top: 0;
    left: -100%;
    width: 50%;
    height: 100%;
    background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 100%);
    transition: left 0.7s;
  }

  .effect1 .rightSide {
    left: 125%;
    background: linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 100%);
  }

  .effect1:hover .leftSide,
  .effect1:active .leftSide {
    left: 10;
  }

  .effect1:hover .rightSide,
  .effect1:active .rightSide {
    left: 49%;
  }

  /* Text */
  .effect1 .leftInfo,
  .effect1 .rightInfo {
    opacity: 0;

    position: absolute;
    top: 50%;
    transition:
      opacity 0.6s,
      left 0.6s;
    @apply prose text-balance text-center;
  }

  .effect1 .leftInfo {
    @apply text-primary-200  text-2xl pl-12 rounded-full bg-primary-500/70;

    transform: translate(-100%, -50%);
    left: 0;
  }

  .effect1 .rightInfo {
    transform: translateY(-50%);
    left: 100%;
  }

  .effect1:hover .leftInfo,
  .effect1:active .leftInfo {
    opacity: 1;
    left: 47%;
  }

  .effect1:hover .rightInfo,
  .effect1:active .rightInfo {
    opacity: 1;
    left: 53%;
  }
</style>
