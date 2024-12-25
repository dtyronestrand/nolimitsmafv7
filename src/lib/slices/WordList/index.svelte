n<script lang="ts">
	import type { Content } from '@prismicio/client';
	import IconFire from '~icons/mdi/fire';
	export let slice: Content.WordListSlice;
import clsx from 'clsx';
	function getRandomInt(max: number) {
		return Math.floor(Math.random() * max);
	}
	let colors = [
		'#F28729',
		'#da7a25',
		' #b6651f',
		'#915119',
		'#774214',
		'#77581e',
		'#916b25',
		'#b6862e',
		'#daa137',
		'#b4dbdb',
		'#44A6A6'
	];
</script>

<section
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	class=" absolute inset-0 -top-80 -z-30 h-vh overflow-hidden rounded bg-transparent transition-transform duration-300 ease-in-out"
>
	{#each slice.primary.words as { word}, index}
		<!-- Render content for item -->
		<div class="word-row mb-8 flex items-center justify-center gap-4 text-surface-500">
			{#each Array(15) as _, index}
				<span class="word-itself text-8xl font-extrabold tracking-tighter" style="color:{index === getRandomInt(15) && index!==7 ? `${colors[getRandomInt(colors.length)]}` : "inherit"}">
					{word}
				</span>
				<span class="text-3xl">
					<IconFire />
				</span>
			{/each}
		</div>
	{/each}
</section>
