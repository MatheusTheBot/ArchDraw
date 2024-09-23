import type { Project } from './types/Project';
import {
	behaviorEdges,
	behaviorNodes,
	dataEdges,
	dataNodes,
	highLevelEdges,
	highLevelNodes
} from './stores/projectStore';

// This function will be called after loading the project
export function splitNodesIntoStores(loadedProject: Project) {
	// Clear existing data in the stores
	highLevelNodes.set([]);
	highLevelEdges.set([]);
	behaviorNodes.set([]);
	behaviorEdges.set([]);
	dataNodes.set([]);
	dataEdges.set([]);

	// Load high-level nodes and edges
	const highLevel = loadedProject.highLevel;
	if (highLevel) {
		highLevelNodes.set(highLevel.nodes);
		highLevelEdges.set(highLevel.edges);
	}

	// Load behavior nodes and edges
	loadedProject.behavior.forEach((behavior) => {
		if (behavior) {
			behaviorNodes.update((nodes) => [...nodes, ...behavior.nodes]);
			behaviorEdges.update((edges) => [...edges, ...behavior.edges]);
		}
	});

	// Load data structure nodes and edges
	loadedProject.dataStructure.forEach((data) => {
		if (data) {
			dataNodes.update((nodes) => [...nodes, ...data.nodes]);
			dataEdges.update((edges) => [...edges, ...data.edges]);
		}
	});
}
