import saver from 'file-saver';
import { goto } from '$app/navigation';
import { Project } from './types/Project';
import { projectStore } from './stores/projectStore';
import { splitNodesIntoStores } from './projectOps';

const { saveAs } = saver;

let fileHandle: FileSystemFileHandle | null = null;

// Load the project from a user-selected file
export async function loadProjectFromFile(file: File): Promise<void> {
	if (!file) return;

	// Read the file content
	const reader = new FileReader();
	reader.onload = function (event) {
		const content = event.target?.result as string;

		// Parse the JSON content and load it into the Project object
		const loadedProject = JSON.parse(content) as Project;

		// Update the store with the loaded project
		projectStore.set(loadedProject);

		// Split nodes into respective stores
		splitNodesIntoStores(loadedProject);

		// Optionally navigate to a specific page
		goto(`/draws/${loadedProject.id}`);
	};

	// Trigger the file reading
	reader.readAsText(file);
}

// Save project and store the file handle in memory
export async function saveProject(project: Project) {
	// Update the lastModified timestamp
	project.lastModified = Date.now();

	// Store the updated project in the store
	projectStore.set(project);

	const blob = new Blob([JSON.stringify(project)], { type: 'application/json' });
	if (fileHandle) {
		const writable = await fileHandle.createWritable();
		await writable.write(blob);
		await writable.close();
	} else {
		saveAs(blob, `${project.title}.json`);
	}
}

// Create a new project
export async function createProject() {
	let newProj: Project = new Project();
	// await saveProject(newProj);

	// Store the new project in the store
	projectStore.set(newProj);

	// Navigate to the new page
	await goto(`/draws/${newProj.id}`);
}
