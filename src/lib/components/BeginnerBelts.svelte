<script>
    import clsx from 'clsx';

let active = '';

</script>
<div class="options">
    
    <div class={clsx("option", active==='none' ? 'active':'')} on:click={()=> {if (active === 'none'){
        active = ''} else {
            active = 'none'
        }}
    }>
    <div class="shadow"></div>
    <div class="label"><div class="icon bg-white/10"/></div>
    <div class={clsx(active === 'none' ? "info p-12 text-surface-50" : "hidden")}>
        <h4>No Belt</h4>
        <table class="mt-8">
            <tr>
                <td>Time:</td>
                <td>No Time Limit</td>
            </tr>
            <tr>
                <td>Ponse</td>
                <td>First 8 movees of ITF Form Chon-Ji</td>
            </tr>
            <tr>
                <td>Stances</td>
                <td>Joon-Be, Walking Stance, Front Stance, Back Stance, Fighting Stance</td>
            </tr>
            <tr>
                <td>Blocks</td>
                <td>Low Block, High Block, Middle Block</td>
            </tr>
            <tr>
                <td>Attacks:</td>
                <td>Punches--low, middle, high with correct form</td>
            </tr>
            <tr>
                <td>Combinations:</td>
                <td>Combination #1</td>
            </tr>
            
        </table>
    </div>
</div>
<div class={clsx("option", active==='white' ? 'active':'')} on:click={()=> {if (active === 'white'){
    active = ''} else {
        active = 'white'
    }}
}>
    <div class="shadow"></div>
    <div class="label"><div class="icon bg-white"/></div>
    <div class={clsx(active === 'white' ? "info p-12 text-surface-50" : "hidden")}>
        <h4>White Belt</h4>
        <table class="mt-8">
            <tr>
                <td>Time:</td>
                <td>~3 months</td>
            </tr>
            <tr>
                <td>Ponse</td>
                <td>Taekwondo Form I - II Jang & ITF Form Chon-Ji</td>
            </tr>
            <tr>
                <td>Sparring/Self-Defense</td>
                <td><ul>
                    <li>Beginner 1 & 2 One Step Sparring</li>
                    <li>Beginner Self-Defense 1 & 2</li>
                    <li>Combination 1 & 2</li>
                </ul><td>
            </tr>
            <tr>
                <td>Breaking</td>
                <td>Stomping Kick and Hammerfist</td>
            </tr>
            <tr>
                <td>Knowledge:</td>
                <td>Poomsae name & meaning, School Oath & Motto</td>
            </tr>
        
    </div>
</div>
<div class={clsx("option", active==='yellow' ? 'active':'')} on:click={()=> {if (active === 'yellow'){
    active = ''} else {
        active = 'yellow'
    }}
}>
    <div class="shadow"></div>
    <div class="label"><div class="icon bg-[yellow]"/></div>
    <div class={clsx(active === 'yellow' ? "info p-12 text-surface-50" : "hidden")}>
        <h4>Yellow Belt</h4>
        <table class="mt-8">
            <tr>
                <td>Time:</td>
                <td>~3 months</td>
            </tr>
            <tr>
                <td>Ponse</td>
                <td>Taekwondo Form 2 - Ee Jang & ITF Form Dan-Gun</td>
            </tr>
            <tr>
                <td>Sparring/Self-Defense</td>
                <td><ul>
                    <li>Beginner 3 & 4 One Step Sparring</li>
                    <li>Beginner Self-Defense 3 & 4</li>
                    <li>Combination 3 & 4</li>
                </ul><td>
            </tr>
            <tr>
                <td>Breaking</td>
                <td>Sidekick and Reverse Elbow</td>
            </tr>
            <tr>
                <td>Knowledge:</td>
                <td>Poomsae name & meaning, Counting to 10 in Korean, Basic classroom terms</td>
            </tr>
    </div>
</div>
</div>
<style>
    :root {
  --optionColor1: rgba(255, 255, 255, 0.1);
  --optionColor2:   white
  ;
  --optionColor3: yellow;
  --optionColor4: orange;
  --optionColor5: #5D9CEC;
  --optionColor6: #AC92EC;
}
td{
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
h4{
    @apply text-3xl;
}
.options {
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
  .options {
    min-width: 520px;
  }
  .options .option:nth-child(5) {
    display: none;
  }
}

@media screen and (max-width: 638px) {
  .options {
    min-width: 440px;
  }
  .options .option:nth-child(4) {
    display: none;
  }
}

@media screen and (max-width: 558px) {
  .options {
    min-width: 360px;
  }
  .options .option:nth-child(3) {
    display: none;
  }
}

@media screen and (max-width: 478px) {
  .options {
    min-width: 280px;
  }
  .options .option:nth-child(2) {
    display: none;
  }
}

.option {
  position: relative;
  overflow: hidden;
  min-width: 60px;
  margin: 10px;
  background: var(--optionBackground, var(--defaultBackground, #E6E9ED));
  background-size: auto 120%;
  background-position: center;
  cursor: pointer;
  transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);
}

.option:nth-child(1) {
  --defaultBackground: var(--optionColor1);
}

.option:nth-child(2) {
  --defaultBackground: var(--optionColor2);
}

.option:nth-child(3) {
  --defaultBackground: var(--optionColor3);
}

.option:nth-child(4) {
  --defaultBackground: var(--optionColor4);
}

.option:nth-child(5) {
  --defaultBackground: var(--optionColor5);
}

.option:nth-child(6) {
  --defaultBackground: var(--optionColor6);
}

.option.active {
  flex-grow: 10000;
  transform: scale(1);
  max-width: 600px;
  margin: 0;
  border-radius: 40px;
@apply bg-surface-700/60 border-2 text-surface-50 border-secondary-500;

  background-size: auto 100%;
}

.option.active .shadow {
  box-shadow: inset 0 -120px 120px -120px black, inset 0 -120px 120px -100px black;
}

.option.active .label {
  bottom: 20px;
  left: 20px;
}

.option.active .label .info > div {
  left: 0;
  opacity: 1;
}

.option:not(.active) {
  flex-grow: 1;
  border-radius: 30px;
}

.option:not(.active) .shadow {
  bottom: -40px;
  box-shadow: inset 0 -120px 0px -120px black, inset 0 -120px 0px -100px black;
}

.option:not(.active) .label {
  bottom: 10px;
  left: 10px;
}

.option:not(.active) .label .info > div {
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
  transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95), opacity 0.5s ease-out;
}

.label .info .main {
  font-weight: bold;
  font-size: 1.2rem;
}

.label .info .sub {
  transition-delay: 0.1s;
}

</style>