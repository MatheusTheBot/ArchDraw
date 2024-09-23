import type { Node } from '@xyflow/svelte';

export interface Section {
	title: string;
	description?: string;
	contents?: Node[] | string[];
}
