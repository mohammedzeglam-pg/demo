<script>
	import { cn } from '$lib';
	import Table from './Table.svelte';
	const C = { Table };
</script>

<div class={cn('table-container', $$props.class)} {...$$restProps}>
	<slot {...C} />
</div>
