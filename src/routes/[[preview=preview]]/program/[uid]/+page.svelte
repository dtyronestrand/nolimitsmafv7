<script>
  	import { SliceZone } from '@prismicio/svelte';
	  import { components } from '$lib/slices';
    import {PrismicText, PrismicImage,PrismicRichText} from '@prismicio/svelte';
    import {currentUser} from '$lib/pocketbase';
	export let data;
	console.log(currentUser)
</script>
 

	<div class="dashboard">
<aside class="sidebar scrollbar__style">
		<h1 class="sidebar__title">
			
		</h1>
		<div class="sidebar__profile">
			<img src={$currentUser?.avatar ? $currentUser?.avatar : "/generic-avatar.png"} class="sidebar__profile__img"/>
			<div class="idebar__profile__data">
				<p class="sidebar__profile__data__name">{$currentUser?.firstName} {$currentUser?.lastName}</p>
			</div>
		</div>
		<nav class="sidebarNav">
			<ul class="siderNav__list">
				<li class="sidebarNav__item">
					<a href="/profile" class="sidebarNav__link sidebarNar__link--active"><span class="sidebarNav__text">Profile</span></a>
					<div class="sidebarNav__divider"></div>
				</li>
			</ul>
		</nav>
	</aside>
		<main class="dashboard__content">
			<h3 class="dashboard__content__title">
				<PrismicText field={data.page.data.program_title}/><span>&nbsp; Current Members
					</span>
			</h3>
			<p class="mb-4 mt-8 max-w-xl text-lg text-yellow-500">
				{data.page.data.program_tagline} 
				</p>
		<figure class="rounded-lg">
			<PrismicImage field={data.page.data.program_image} />
		</figure>
		<SliceZone slices={data.page.data.slices} {components} />
	</main>
	</div>

	
		
 

<style >
	.scrollbar__style::-webkit-scrollbar {
  width: 5px;
  @apply bg-secondary-500;
}

.scrollbar__style::-webkit-scrollbar-thumb {
 @apply bg-secondary-700;
  border-radius: 5px;
}

.scrollbar__style::-webkit-scrollbar-thumb:hover {
 @apply bg-secondary-700;
}

.sidebar {
 @apply bg-surface-500/40;
  left: 0;
  top: 0;
  height: 100vh;
  min-width: 200px;
  padding: 1rem;
  overflow-y: scroll;
  position: fixed;
}

.sidebar__profile {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 2rem 0;
}

.sidebar__profile__img {
  width: 90px;
  height: 90px;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.sidebar__profile__data {
  display: flex;
  gap: 10px;
  margin-top: 7px;
  font-size: 0.9rem;
  text-shadow: 2px 3px 5px rgba(0, 0, 0, 0.2);
}

.sidebar__profile__data__icon {
  @apply text-primary-500;
  font-size: 0.8rem;
  line-height: 1rem;
  cursor: pointer;
}

.sidebar__title {
  font-size: 1.7rem;
  letter-spacing: 2px;
  font-weight: bold;
  text-shadow: 2px 3px 5px rgba(0, 0, 0, 0.5);
}

.sidebar__title span {
  font-size: 0.6rem;
  @apply text-primary-500;
  font-style: italic;
}
.sidebarNav__list {
  list-style: none;
}

.sidebarNav__item {
  margin-top: 2rem;
  list-style-type: none;
}

.sidebarNav__link {
@apply text-primary-100;
  text-decoration: none;
  position: relative;
  display: block;
}

.sidebarNav__text,
.sidebarNav__icon {
  @apply text-primary-500;
  cursor: pointer;
}

.sidebarNav__icon {
  font-size: 1.3rem;
  margin-right: 5px;
}
.sidebarNav__text {
  font-size: 0.85rem;
  font-weight: bold;
  text-shadow: 1px 2px 5px rgba(0, 0, 0, 0.2);
}

.sidebarNav__switch {
  position: absolute;
  right: 0;
  top: 1px;
  @apply bg-secondary-500;
}

.sidebarNav__divider {
  margin-top: 20px;
  width: 100%;
  height: 1px;
  @apply bg-secondary-500;
  opacity: 0.3;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
}

.dashboard {
  display: flex;
}

.dashboard__content {
  height: 100vh;
  margin-left: 270px;
}

.dashboard__content__title {
  padding: 1.5rem 0;
  text-shadow: 2px 3px 5px rgba(0, 0, 0, 0.5);
}
</style>