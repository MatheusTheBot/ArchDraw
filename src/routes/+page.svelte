<script lang="ts">
	import { createProject, loadProjectFromFile } from '$lib/FileOps';
	let files: FileList;

	$: if (files) {
		loadProjectFromFile(files[0]);
	}
</script>

<h1>Select one option</h1>

<br /><br />

<button class="p-5 border-2 border-stone-300 bg-stone-500 rounded-md" on:click={createProject}>
	New Project
</button>

<br /><br />

<input
	type="file"
	title="Load Project"
	class="p-5 border-2 border-stone-300 bg-stone-500 rounded-md"
	bind:files
/>
