import { writable } from 'svelte/store';
import type { Tab } from '$lib/tabs/Tab';

export const tabStore = writable<Tab[]>([]);

export const activeLayer = writable<string>('highLevel');
