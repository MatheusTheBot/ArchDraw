import { type Node, type Edge } from '@xyflow/svelte';

export interface DiagramData {
	nodes: Array<Node>;
	edges: Array<Edge>;
}
