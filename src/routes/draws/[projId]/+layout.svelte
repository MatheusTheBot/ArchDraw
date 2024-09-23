<script lang="ts">
	import { tabStore } from '$lib/stores/tabStore';
	import type { Tab } from '$lib/tabs/Tab';
	import TabHolder from '$lib/tabs/TabHolder.svelte';
	import { onMount } from 'svelte';

	const tabStructure: Tab[] = [
		{
			group: 1,
			title: 'Layers',
			content: [] // No contents for layer switching
		},
		{
			group: 1,
			title: 'Components',
			content: [
				{
					title: 'High-Level Structure',
					contents: ['application']
				},
				{
					title: 'Behavior',
					contents: ['behavior']
				},
				{
					title: 'Data Structure',
					contents: ['dataStructure']
				}
			]
		}
	];

	onMount(() => {
		tabStore.set(tabStructure);
	});
</script>

<aside class="border-0 rounded-md bg-zinc-300 m-5 p-2 absolute h-[95%] w-64 z-10 shadow-xl">
	<TabHolder group={1} />
</aside>

<slot />
