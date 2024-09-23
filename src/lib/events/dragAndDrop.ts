// import { $dragAndDropStore } from '$lib/stores/dragDropStore';
import { useDnD } from '$lib/stores/dragDropStore';
import { useSvelteFlow } from '@xyflow/svelte';

const { screenToFlowPosition } = useSvelteFlow();
const $type = useDnD();

export const onDragStart = (event: DragEvent, nodeType: string) => {
	if (!event.dataTransfer) {
		return null;
	}

	$type.set(nodeType);
	// $dragAndDropStore.set(nodeType);

	event.dataTransfer.effectAllowed = 'move';
};

export const onDragOver = (event: DragEvent) => {
	event.preventDefault();

	if (event.dataTransfer) {
		event.dataTransfer.dropEffect = 'move';
	}
};

export const onDrop = (event: DragEvent) => {
	event.preventDefault();

	// !$dragAndDropStore
	if (!$type) {
		return;
	}

	const position = screenToFlowPosition({
		x: event.clientX,
		y: event.clientY
	});

	const newNode = {
		id: `${Math.random()}`,
		type: $type,
		position,
		data: { label: `${$type} node` },
		origin: [0.5, 0.0]
	} satisfies Node;

	//TODO: Ver uma forma de adicionar os nós
	// nos stores e layers certos, usando o $ pra deixar reativo..
};
