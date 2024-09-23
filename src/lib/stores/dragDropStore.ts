import { getContext } from 'svelte';
import type { Writable } from 'svelte/store';

// export const $dragAndDropStore = getContext('dnd') as Writable<string | null>;

export const useDnD = () => {
	return getContext('dnd') as Writable<string | null>;
};
