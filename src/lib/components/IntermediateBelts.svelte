<script>
  import clsx from 'clsx'

  let active = ''
</script>

<div class="optionsa">
  <div
    class={clsx('optiona', active === 'orange' ? 'active' : '')}
    on:click={() => {
      if (active === 'orange') {
        active = ''
      } else {
        active = 'orange'
      }
    }}
  >
    <div class="shadow"></div>
    <div class="label"><div class="icon bg-orange-500" /></div>
    <div class={clsx(active === 'orange' ? 'info p-12 text-surface-50' : 'hidden')}>
      <h4>Orange Belt</h4>
      <table class="mt-8">
        <tbody>
          <tr>
            <td>Time:</td>
            <td>~3 Months</td>
          </tr>
          <tr>
            <td>Ponse</td>
            <td>Taekwondo Form 3 - Sam Jang & ITF Form Do-San</td>
          </tr>
          <tr>
            <td>Sparring/Self-Defense</td>
            <td>
              <ul>
                <li>Intermediate 1 & 2 One Step Sparring</li>
                <li>Intermediate Self-Defense 1 & 2</li>
                <li>Combination 5</li>
              </ul>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>Breaking</td>
            <td>Front Snap Kick and Knife Hand</td>
          </tr>
          <tr>
            <td>Knowledge:</td>
            <td>Poomsae name & meaning, "What is Taekwondo?"</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div
    class={clsx('optiona', active === 'green' ? 'active' : '')}
    on:click={() => {
      if (active === 'green') {
        active = ''
      } else {
        active = 'green'
      }
    }}
  >
    <div class="shadow"></div>
    <div class="label"><div class="icon bg-green-500" /></div>
    <div class={clsx(active === 'green' ? 'info p-12 text-surface-50' : 'hidden')}>
      <h4>Green Belt</h4>
      <table class="mt-8">
        <tbody>
          <tr>
            <td>Time:</td>
            <td>~4 -5 months</td>
          </tr>
          <tr>
            <td>Ponse</td>
            <td>Taekwondo Form 4- II Sa Jang & ITF Won-Hyo</td>
          </tr>
          <tr>
            <td>Sparring/Self-Defense</td>
            <td>
              <ul>
                <li>Intermediate 3 & 4 One Step Sparring</li>
                <li>Intermediate Self-Defense 3 & 4</li>
                <li>Combinations 6 & 7</li>
              </ul>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>Breaking</td>
            <td>Back kick and Inside Knife Hand/Neck Chop</td>
          </tr>
          <tr>
            <td>Knowledge:</td>
            <td>Poomsae name & meaning, History of Taekwondo</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div
    class={clsx('optiona', active === 'purple' ? 'active' : '')}
    on:click={() => {
      if (active === 'purple') {
        active = ''
      } else {
        active = 'purple'
      }
    }}
  >
    <div class="shadow"></div>
    <div class="label"><div class="icon bg-purple-600" /></div>
    <div class={clsx(active === 'purple' ? 'info p-12 text-surface-50' : 'hidden')}>
      <h4>Purple Belt</h4>
      <table class="mt-8">
        <tbody>
          <tr>
            <td>Time:</td>
            <td>~4 - 5 months</td>
          </tr>
          <tr>
            <td>Ponse</td>
            <td>Taekwondo Form 5 - Oh Jang & ITF Form Yul-Gok</td>
          </tr>
          <tr>
            <td>Sparring/Self-Defense</td>
            <td>
              <ul>
                <li>Advanced 1 & 2 One Step Sparring</li>
                <li>Advanced Self-Defense 1 & 2</li>
                <li>Combinations 8 & 9</li>
              </ul>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>Breaking</td>
            <td>Roundhouse Kick and Front Elbo</td>
          </tr>
          <tr>
            <td>Knowledge:</td>
            <td>Poomsae name & meaning, Korean Flag, Uniform, Bowing and Ki-Yap explaination</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

<style>
  :root {
    --optionaColor1: orange;
    --optionaColor2: green;
    --optionaColor3: purple;
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
  .optionsa {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    overflow: hidden;
    min-width: 600px;
    max-width: 900px;
    width: calc(100% - 100px);
    height: 500px;
  }

  @media screen and (max-width: 718px) {
    .optionsa {
      min-width: 520px;
    }
    .options .optiona:nth-child(5) {
      display: none;
    }
  }

  @media screen and (max-width: 638px) {
    .optionsa {
      min-width: 440px;
    }
    .options .optiona:nth-child(4) {
      display: none;
    }
  }

  @media screen and (max-width: 558px) {
    .optionsa {
      min-width: 360px;
    }
    .optionsa .optiona:nth-child(3) {
      display: none;
    }
  }

  @media screen and (max-width: 478px) {
    .optionsa {
      min-width: 280px;
    }
    .optionsa .optiona:nth-child(2) {
      display: none;
    }
  }

  .optiona {
    position: relative;
    overflow: hidden;
    min-width: 60px;
    margin: 10px;
    background: var(--optionaBackground, var(--defaultBackground, #e6e9ed));
    background-size: auto 120%;
    background-position: center;
    cursor: pointer;
    transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);
  }

  .optiona:nth-child(1) {
    --defaultBackground: var(--optionaColor1);
  }

  .optiona:nth-child(2) {
    --defaultBackground: var(--optionaColor2);
  }

  .optiona:nth-child(3) {
    --defaultBackground: var(--optionaColor3);
  }

  .optiona:nth-child(4) {
    --defaultBackground: var(--optionaColor4);
  }

  .option:nth-child(5) {
    --defaultBackground: var(--optionColor5);
  }

  .option:nth-child(6) {
    --defaultBackground: var(--optionColor6);
  }

  .optiona.active {
    flex-grow: 10000;
    transform: scale(1);
    max-width: 600px;
    margin: 0;
    border-radius: 40px;
    @apply bg-surface-700/60 border-2 text-surface-50 border-secondary-500;

    background-size: auto 100%;
  }

  .optiona.active .shadow {
    box-shadow:
      inset 0 -120px 120px -120px black,
      inset 0 -120px 120px -100px black;
  }

  .optiona.active .label {
    bottom: 20px;
    left: 20px;
  }

  .optiona.active .label .info > div {
    left: 0;
    opacity: 1;
  }

  .optiona:not(.active) {
    flex-grow: 1;
    border-radius: 30px;
  }

  .optiona:not(.active) .shadow {
    bottom: -40px;
    box-shadow:
      inset 0 -120px 0px -120px black,
      inset 0 -120px 0px -100px black;
  }

  .optiona:not(.active) .label {
    bottom: 10px;
    left: 10px;
  }

  .optiona:not(.active) .label .info > div {
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
