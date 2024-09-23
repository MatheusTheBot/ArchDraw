import type { Section } from './Section';

export interface Tab {
	group: number;
	title: string;
	content: Section[];
}
