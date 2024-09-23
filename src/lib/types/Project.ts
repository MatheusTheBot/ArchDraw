import type { DiagramData } from './DiagramData';

export class Project {
	id: string = crypto.randomUUID();
	title: string = 'My New Project';
	description: string = 'My New Project Description';

	createdAt: number = Date.now();
	lastModified: number = Date.now();

	highLevel: DiagramData | undefined;
	behavior: Array<DiagramData | undefined> = [];
	dataStructure: Array<DiagramData | undefined> = [];
}
