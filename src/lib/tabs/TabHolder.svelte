<!-- <script lang="ts">
	import { tabStore } from '$lib/stores/tabStore';
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';
	import type { Tab } from './Tab';

	export let group: number;
	let tabs: Array<Tab> | null = [];
	let activeTab: Tab | null = null;

	onMount(() => {
		const allTabs = get(tabStore);
		if (allTabs) {
			tabs = allTabs.filter((t) => t.group === group);
			activeTab = tabs[0]; // Set the first tab as the active tab
		}
	});

	function selectTab(tab: Tab) {
		activeTab = tab;
	}
</script>

<div class="tabs">
	{#if tabs}
		{#each tabs as tab}
			<button
				class="tab-button {activeTab === tab ? 'active' : ''}"
				on:click={() => selectTab(tab)}
			>
				{tab.title}
			</button>
		{/each}
	{/if}
</div>

<div class="tab-content">
	{#if activeTab}
		<div>
			{#each activeTab.content as section}
				<div class="bg-gray-400 mt-2 mb-2 rounded-md p-3">
					<h2 class="text-xl font-semibold text-black">{section.title}</h2>
					<h4 class="text-black">{section.description}</h4>
					<div class="bg-gray-500 p-3 mt-2 rounded-sm">
						{section.contents}
					</div>
				</div>
			{/each}
		</div>
	{/if}
</div>

<style>
	.tabs {
		display: flex;
		border-bottom: 1px solid #ccc;
	}
	.tab-button {
		padding: 10px;
		cursor: pointer;
		border: none;
		background: none;
	}
	.tab-button.active {
		font-weight: bold;
		border-bottom: 2px solid blue;
	}
	.tab-content {
		padding: 10px;
	}
</style>
-->

<script lang="ts">
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';
	import type { Tab } from '$lib/tabs/Tab';
	import { activeLayer, tabStore } from '$lib/stores/tabStore';
	import { onDragStart } from '$lib/events/dragAndDrop';

	export let group: number;
	let tabs: Tab[] = [];
	let activeTab: Tab | null = null;

	function selectTab(tab: Tab) {
		activeTab = tab;
	}

	function handleLayerClick(layer: string) {
		activeLayer.set(layer);
	}

	onMount(() => {
		const allTabs = get(tabStore);
		if (allTabs) {
			tabs = allTabs.filter((t) => t.group === group);
			activeTab = tabs[0]; // Set the first tab as the active tab
		}
	});
</script>

<div class="flex border-b border-b-white border-b-solid">
	{#if tabs}
		{#each tabs as tab}
			<button
				class="p-2 cursor-pointer border-none bg-transparent {activeTab === tab
					? 'font-bold border-b-2 border-b-solid border-b-blue-700'
					: ''}"
				on:click={() => selectTab(tab)}
			>
				{tab.title}
			</button>
		{/each}
	{/if}
</div>

<div class="p-3">
	{#if activeTab}
		<div>
			{#each activeTab.content as section}
				{#if activeTab.title === 'Layers'}
					<div
						class="bg-gray-400 mt-2 mb-2 rounded-md p-3"
						on:click={() => handleLayerClick(section.title)}
					>
						<h2 class="text-xl font-semibold text-black">{section.title}</h2>
						<h4 class="text-black">{section.description}</h4>
						<div class="bg-gray-500 p-3 mt-2 rounded-sm">
							{section.contents}
						</div>
					</div>
				{:else if activeTab.title === 'Components'}
					<div class="bg-gray-400 mt-2 mb-2 rounded-md p-3">
						<h2 class="text-xl font-semibold text-black">{section.title}</h2>
						<h4 class="text-black">{section.description}</h4>
						<div class="bg-gray-500 p-3 mt-2 rounded-sm">
							{#if section.contents}
								{#each section.contents as node}
									<div class="bg-red-200 m-2 p-2" on:dragstart={() => onDragStart(event, node)}>
										{node}
									</div>
									<br />
								{/each}
							{/if}
						</div>
					</div>
				{/if}
			{/each}
		</div>
	{/if}
</div>

<style>
	/* .tabs {
		display: flex;
		border-bottom: 1px solid #ccc;
	} */
	/* .tab-button {
		padding: 10px;
		cursor: pointer;
		border: none;
		background: none;
	}
	.tab-button.active {
		font-weight: bold;
		border-bottom: 2px solid blue;
	} */
	/* .tab-content {
		padding: 10px;
	} */
</style>
