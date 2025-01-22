<script>
  import clsx from 'clsx'

  let active = ''
</script>

<div class="optionsc">
  <div
    role="button"
    class={clsx('optionc', active === 'red' ? 'active' : '')}
    on:click={() => {
      if (active === 'red') {
        active = ''
      } else {
        active = 'red'
      }
    }}
  >
    <div class="shadow"></div>
    <div class="label"><div class="icon bg-[red]" /></div>
    <div class={clsx(active === 'red' ? 'info p-12 text-surface-50' : 'hidden')}>
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
    class={clsx('optionc', active === 'stripe' ? 'active' : '')}
    on:click={() => {
      if (active === 'stripe') {
        active = ''
      } else {
        active = 'stripe'
      }
    }}
  >
    <div class="shadow"></div>
    <div class="label"><div class="flex icon bg-[red]" /></div>
    <div class={clsx(active === 'stripe' ? 'info p-12 text-surface-50' : 'hidden')}>
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
              Poomsae name & meaning (all), 1Manual Questions 1-21, History of Taekwondo, Tents of
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
            <td>2 Letters of Reccomendation</td>
          </tr>
          <tr>
            <td>20 hours of community service</td>
          </tr>
          <tr>
            <td>Regular assistance in classess (min. once per week)/td></td>
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
  :root {
    --optioncColor1: red;
    --optioncColor2: linear-gradient(to right, red 180px, black 200px, red 220px);
    --optioncColor3: purple;
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

  @media screen and (max-width: 718px) {
    .optionsc {
      min-width: 520px;
    }
    .options .optionc:nth-child(5) {
      display: none;
    }
  }

  @media screen and (max-width: 638px) {
    .optionsc {
      min-width: 440px;
    }
    .options .optionc:nth-child(4) {
      display: none;
    }
  }

  @media screen and (max-width: 558px) {
    .optionsc {
      min-width: 360px;
    }
    .optionsc .optionc:nth-child(3) {
      display: none;
    }
  }

  @media screen and (max-width: 478px) {
    .optionsc {
      min-width: 280px;
    }
    .optionsc .optionc:nth-child(2) {
      display: none;
    }
  }

  .optionc {
    position: relative;
    overflow: hidden;
    min-width: 60px;
    margin: 10px;
    background: var(--optioncBackground, var(--defaultBackground, #e6e9ed));
    background-size: auto 120%;
    background-position: center;
    cursor: pointer;
    transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);
  }

  .optionc:nth-child(1) {
    --defaultBackground: var(--optioncColor1);
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
    background-position: left 50%;
    background-repeat: no-repeat;
    background-size: 760px;
  }

  .optionc:nth-child(3) {
    --defaultBackground: var(--optioncColor3);
  }

  .optionc:nth-child(4) {
    --defaultBackground: var(--optioncColor4);
  }

  .option:nth-child(5) {
    --defaultBackground: var(--optionColor5);
  }

  .option:nth-child(6) {
    --defaultBackground: var(--optionColor6);
  }

  .optionc.active {
    background-image: none;
    flex-grow: 10000;
    transform: scale(1);
    max-width: 600px;
    margin: 0;
    border-radius: 40px;
    @apply bg-surface-700/60 border-2 text-surface-50 border-secondary-500;

    background-size: auto 100%;
  }

  .optionc.active .shadow {
    box-shadow:
      inset 0 -120px 120px -120px black,
      inset 0 -120px 120px -100px black;
  }

  .optionc.active .label {
    bottom: 20px;
    left: 20px;
  }

  .optionc.active .label .info > div {
    left: 0;
    opacity: 1;
  }

  .optionc:not(.active) {
    flex-grow: 1;
    border-radius: 30px;
  }

  .optionc:not(.active) .shadow {
    bottom: -40px;
    box-shadow:
      inset 0 -120px 0px -120px black,
      inset 0 -120px 0px -100px black;
  }

  .optionc:not(.active) .label {
    bottom: 10px;
    left: 10px;
  }

  .optionc:not(.active) .label .info > div {
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
