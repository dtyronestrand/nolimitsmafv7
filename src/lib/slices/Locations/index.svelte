<script lang="ts">
  import type { Content } from '@prismicio/client'
  import { PrismicRichText } from '@prismicio/svelte'
  import Heading1 from '$lib/components/Heading1.svelte'
  import { asText } from '@prismicio/client'
  import Paragraph from '$lib/components/Paragraph.svelte'
  import Heading2 from '$lib/components/Heading2.svelte'
  import Heading3 from '$lib/components/Heading3.svelte'
  import Bounded from '$lib/components/Bounded.svelte'
  export let slice: Content.LocationsSlice

  export let locations
  let selectedLocation = ''
  function handleSelection(event) {
    selectedLocation = event.target.value
  }
</script>

<Bounded data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
  <div class="container">
    <div class="locations">
      <h1 class="text-primary-200 text-7xl">Locations</h1>
      <select class="mt-6 text-surface-900" on:change={handleSelection}>
        <option value="">Select a location</option>
        {#each locations as location}
          <option value={location.uid}>{asText(location.name)}</option>
        {/each}
      </select>
    </div>
  </div>
  {#each slice.primary.locations as location}
    {#if location.uid === selectedLocation}
      <div class="profile">
        <PrismicRichText
          field={location.name}
          components={{ heading1: Heading1, heading2: Heading2, heading3: Heading3 }}
        />
        <PrismicRichText field={location.data.details} />
      </div>
      <div class="container">
        <div class="block-large glow">
          <h2>Class Schedule</h2>
          <table>
            <tbody>
              <tr>
                <th>Day</th>
                <th>Class</th>
                <th>Time</th>
              </tr>
              {#each location.data.schedule as schedule}
                <tr>
                  <td>{schedule.day}</td>

                  <td>{schedule.time}</td>
                </tr>
              {/each}
            </tbody>
          </table>
        </div>
        <div class="block-large glow">
          <h2>Pricing</h2>
          <table>
            <tbody>
              <tr>
                <th>Membership</th>
                <th>Price</th>
              </tr>
              {#each location.data.pricing as pricing}
                <tr>
                  <td>{pricing.membership}</td>
                  <td>{pricing.price}</td>
                </tr>
              {/each}
            </tbody>
          </table>
        </div>
        <div class="container">
          <div class="list-item glow">
            <h2>Testing Information</h2>
            <PrismicRichText field={location.data.testing_info} />
          </div>
        </div>
      </div>
    {/if}
  {/each}
</Bounded>

<style>
  .dashboard {
    max-width: 991px;
    margin: auto;
    height: 100%;
    padding: 0 24px;
  }

  .container {
    display: flex;
    gap: 24px;
    margin-bottom: 24px;
  }

  .container > div {
    flex: 1;
    border-radius: 24px;
    border: 1px solid;
    @apply border-secondary-500 bg-gradient-to-l from-primary-600/40 to-primary-600/20;
    padding: 20px;
    box-sizing: border-box;
  }

  h1 {
    font-weight: 600;
    margin: 40px 0 8px;
  }

  table th {
    font-weight: 400;
    text-align: left;
    font-size: 14px;
    margin: 0;
    padding: 0 0 8px;
    border-bottom: 1px solid;
    @apply border-b-secondary-500;
    color: #dad3ee;
  }

  table tr td {
    font-size: 14px;
    font-weight: 200;
    padding: 10px 0px;
    color: #d8cbff;
    @apply border-b-secondary-500;
  }
  table tr:last-child td {
    border-bottom: 0;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  .container h2 {
    margin: 8px 0 16px;
    font-weight: 500;
    font-size: 18px;
    color: #dad3ee;
  }

  .block-large .group div {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }

  .block-large .group div span {
    padding: 2px 0;
    font-size: 14px;
    color: #dad3ee;
    font-weight: 400;
    text-align: center;
  }

  .block-large .group {
    display: flex;
    justify-content: space-between;
  }

  .block-large .group div span:first-child {
    order: 1;
    font-size: 14px;
  }

  .block-large .group div span:last-child {
    font-size: 30px;
    font-weight: 700;
    color: #a477f3;
    background: -webkit-linear-gradient(#fff, #a477f3);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .block-large {
    min-height: 170px;
  }

  .listitem ul {
    list-style: square;
    padding: 0 16px;
  }

  .listitem ul li {
    margin: 16px 0;
    font-size: 14px;
    font-weight: 200;
    color: #d8cbff;
  }

  .profile {
    margin-bottom: 20px;
  }

  .profile p {
    color: #e6d8ff;
  }

  table th:first-child {
    min-width: 68px;
  }

  .glow {
    position: relative;
  }
  .glow:after {
    border-radius: 1153px;
    @apply bg-surface-400;
    filter: blur(102px);
    height: 100%;
    width: 100%;
    position: absolute;
    content: '';
    bottom: 11px;
    z-index: -1;
  }

  @media screen and (max-width: 767px) {
    .container {
      flex-direction: column;
    }
    .block-large .group div span:last-child {
      font-size: 24px;
      font-weight: 600;
    }
    .block-large .group div span:first-child {
      font-size: 12px;
    }
  }
</style>
