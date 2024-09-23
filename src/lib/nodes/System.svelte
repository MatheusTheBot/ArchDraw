<script lang="ts">
	import { Handle, Position, type NodeProps } from '@xyflow/svelte';

	type $$Props = NodeProps;

	export let data: $$Props['data'];
	export let isConnectable: $$Props['isConnectable'];
	let handleBg = 'background: #555;';
</script>

<div>
	<Handle type="target" position={Position.Left} style={handleBg} {isConnectable} />
	<Handle type="source" position={Position.Left} style={handleBg} {isConnectable} />

	<Handle type="target" position={Position.Right} style={handleBg} {isConnectable} />
	<Handle type="source" position={Position.Right} style={handleBg} {isConnectable} />

	<Handle type="target" position={Position.Top} style={handleBg} {isConnectable} />
	<Handle type="source" position={Position.Top} style={handleBg} {isConnectable} />

	<Handle type="target" position={Position.Bottom} style={handleBg} {isConnectable} />
	<Handle type="source" position={Position.Bottom} style={handleBg} {isConnectable} />
</div>
?
