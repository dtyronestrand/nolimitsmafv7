<script>
  import clsx from 'clsx'

  let active = ''
</script>

<div class="optionsb">
  <div
    class={clsx('optionb', active === 'blue' ? 'active' : '')}
    on:click={() => {
      if (active === 'blue') {
        active = ''
      } else {
        active = 'blue'
      }
    }}
  >
    <div class="shadow"></div>
    <div class="label"><div class="icon bg-blue-500" /></div>
    <div class={clsx(active === 'blue' ? 'info p-12 text-surface-50' : 'hidden')}>
      <h4>Blue Belt</h4>
      <table class="mt-8">
        <tbody>
          <tr>
            <td>Time:</td>
            <td>~4- 6 Months</td>
          </tr>
          <tr>
            <td>Ponse</td>
            <td>Taekwondo Form 6 - Yuk Jang & ITF Form Joong-Gun</td>
          </tr>
          <tr>
            <td>Sparring/Self-Defense</td>
            <td>
              <ul>
                <li>Advanced 3 & 4 One Step Sparring</li>
                <li>Advanced Self-Defense 3 & 4</li>
                <li>Combinations 10a & 10b</li>
              </ul>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>Breaking</td>
            <td>Push Kick and Palm Strike</td>
          </tr>
          <tr>
            <td>Knowledge:</td>
            <td>Poomsae name & meaning, Qualities to Develop in Taekwondo</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div
    class={clsx('optionb', active === 'brown' ? 'active' : '')}
    on:click={() => {
      if (active === 'brown') {
        active = ''
      } else {
        active = 'brown'
      }
    }}
  >
    <div class="shadow"></div>
    <div class="label"><div class="icon bg-[brown]" /></div>
    <div class={clsx(active === 'brown' ? 'info p-12 text-surface-50' : 'hidden')}>
      <h4>Brown Belt</h4>
      <table class="mt-8">
        <tbody>
          <tr>
            <td>Time:</td>
            <td>~6 -8 months</td>
          </tr>
          <tr>
            <td>Ponse</td>
            <td>Taekwondo Form 7- Chil Jang & ITF Form Toi-Gye</td>
          </tr>
          <tr>
            <td>Sparring/Self-Defense</td>
            <td>
              <ul>
                <li>Proficiency 1 & 2 One Step Sparring</li>
                <li>Knife Self-Defense 1 & 2</li>
                <li>Combinations 11 & 12</li>
              </ul>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>Breaking</td>
            <td>Hook kick and Straight Punch</td>
          </tr>
          <tr>
            <td>Knowledge:</td>
            <td>Poomsae name & meaning, 10 Tenets of Taekwondo</td>
          </tr>
          <tr>
            <td>Assisting in at least 2 classes per month</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

<style>
  :root {
    --optionbColor1: blue;
    --optionbColor2: brown;
    --optionbColor3: purple;
    --optionColor4: orange;
    --optionColor5: #5d9cec;
    --optionColor6: #ac92ec;
  }
  td {
    @apply pl-6 py-2;
  }

  body {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    height: 100vh;
    font-family: 'Roboto', sans-serif;
    transition: 0.25s;
    background: #232223;
    color: white;
  }

  .credit {
    position: absolute;
    bottom: 20px;
    left: 20px;
    color: inherit;
  }
  h4 {
    @apply text-3xl;
  }
  .optionsb {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    overflow: hidden;
    min-width: 600px;
    max-width: 900px;
    width: calc(100% - 100px);
    height: 600px;
  }

  @media screen and (max-width: 718px) {
    .optionsb {
      min-width: 520px;
    }
    .options .optionb:nth-child(5) {
      display: none;
    }
  }

  @media screen and (max-width: 638px) {
    .optionsb {
      min-width: 440px;
    }
    .options .optionb:nth-child(4) {
      display: none;
    }
  }

  @media screen and (max-width: 558px) {
    .optionsb {
      min-width: 360px;
    }
    .optionsb .optionb:nth-child(3) {
      display: none;
    }
  }

  @media screen and (max-width: 478px) {
    .optionsb {
      min-width: 280px;
    }
    .optionsb .optionb:nth-child(2) {
      display: none;
    }
  }

  .optionb {
    position: relative;
    overflow: hidden;
    min-width: 60px;
    margin: 10px;
    background: var(--optionbBackground, var(--defaultBackground, #e6e9ed));
    background-size: auto 120%;
    background-position: center;
    cursor: pointer;
    transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);
  }

  .optionb:nth-child(1) {
    --defaultBackground: var(--optionbColor1);
  }

  .optionb:nth-child(2) {
    --defaultBackground: var(--optionbColor2);
  }

  .optionb:nth-child(3) {
    --defaultBackground: var(--optionbColor3);
  }

  .optionb:nth-child(4) {
    --defaultBackground: var(--optionbColor4);
  }

  .option:nth-child(5) {
    --defaultBackground: var(--optionColor5);
  }

  .option:nth-child(6) {
    --defaultBackground: var(--optionColor6);
  }

  .optionb.active {
    flex-grow: 10000;
    transform: scale(1);
    max-width: 600px;
    margin: 0;
    border-radius: 40px;
    @apply bg-surface-700/60 border-2 text-surface-50 border-secondary-500;

    background-size: auto 100%;
  }

  .optionb.active .shadow {
    box-shadow:
      inset 0 -120px 120px -120px black,
      inset 0 -120px 120px -100px black;
  }

  .optionb.active .label {
    bottom: 20px;
    left: 20px;
  }

  .optionb.active .label .info > div {
    left: 0;
    opacity: 1;
  }

  .optionb:not(.active) {
    flex-grow: 1;
    border-radius: 30px;
  }

  .optionb:not(.active) .shadow {
    bottom: -40px;
    box-shadow:
      inset 0 -120px 0px -120px black,
      inset 0 -120px 0px -100px black;
  }

  .optionb:not(.active) .label {
    bottom: 10px;
    left: 10px;
  }

  .optionb:not(.active) .label .info > div {
    left: 20px;
    opacity: 0;
  }

  .shadow {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 120px;
    transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);
  }

  .label {
    display: flex;
    position: absolute;
    right: 0;
    height: 40px;

    transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);
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

  .label .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 10px;
    color: white;
    white-space: pre;
  }

  .label .info > div {
    position: relative;
    transition:
      0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95),
      opacity 0.5s ease-out;
  }

  .label .info .main {
    font-weight: bold;
    font-size: 1.2rem;
  }

  .label .info .sub {
    transition-delay: 0.1s;
  }
</style>
