import { writable } from 'svelte/store';
import type { Project } from '../types/Project';
import type { Edge, Node } from '@xyflow/svelte';

export const projectStore = writable<Project | null>(null);

export const behaviorNodes = writable<Node[]>();
export const behaviorEdges = writable<Edge[]>();

export const highLevelNodes = writable<Node[]>();
export const highLevelEdges = writable<Edge[]>();

export const dataNodes = writable<Node[]>();
export const dataEdges = writable<Edge[]>();
