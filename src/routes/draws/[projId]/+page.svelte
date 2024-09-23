<script lang="ts">
	import { onMount } from 'svelte';
	import { get, type Writable } from 'svelte/store';
	import { onDragOver, onDrop } from '$lib/events/dragAndDrop';

	import DragAndDropProvider from '$lib/providers/DragAndDropProvider.svelte';

	import Actor from '$lib/nodes/Actor.svelte';
	import Boundary from '$lib/nodes/Boundary.svelte';
	import Container from '$lib/nodes/Container.svelte';
	import Database from '$lib/nodes/Database.svelte';
	import Service from '$lib/nodes/Service.svelte';
	import UseCase from '$lib/nodes/UseCase.svelte';
	import System from '$lib/nodes/System.svelte';

	import {
		projectStore,
		highLevelEdges,
		highLevelNodes,
		behaviorEdges,
		behaviorNodes,
		dataEdges,
		dataNodes
	} from '$lib/stores/projectStore';
	import {
		SvelteFlowProvider,
		SvelteFlow,
		Background,
		Controls,
		MiniMap,
		type Node,
		type Edge,
		type ColorMode
	} from '@xyflow/svelte';

	import '@xyflow/svelte/dist/style.css';
	import { activeLayer } from '$lib/stores/tabStore';
	import ColorPicker from '$lib/nodes/ColorPicker.svelte';

	let active: string;
	export let nodes: Writable<Node[]>;
	export let edges: Writable<Edge[]>;

	export let colorMode: ColorMode = 'dark';

	const nodeTypes = {
		// system: System,
		// actor: Actor,
		// boundary: Boundary,
		// container: Container,
		// database: Database,
		// service: Service,
		// usecase: UseCase
		'color-picker': ColorPicker
	};

	onMount(() => {
		active = get(activeLayer);

		if (active == 'highLevel') {
			nodes = highLevelNodes;
			edges = highLevelEdges;
		} else if (active == 'behavior') {
			nodes = behaviorNodes;
			edges = behaviorEdges;
		} else if (active == 'dataStructure') {
			nodes = dataNodes;
			edges = dataEdges;
		}
	});
</script>

<div class="flex">
	<div style="height:100vh; flex-grow: 1;">
		<SvelteFlowProvider>
			<DragAndDropProvider>
				<SvelteFlow
					{nodes}
					{edges}
					{nodeTypes}
					{colorMode}
					fitView
					attributionPosition="top-right"
					on:dragover={onDragOver}
					on:drop={onDrop}
				>
					<MiniMap />
					<Background />
					<Controls position="bottom-right" orientation="horizontal" />
				</SvelteFlow>
			</DragAndDropProvider>
		</SvelteFlowProvider>
	</div>
</div>
