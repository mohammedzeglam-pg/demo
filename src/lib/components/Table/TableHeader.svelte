<script>
	import { cn } from '$lib';
	import TableHeaderCell from './TableHeaderCell.svelte';
	const C = {
		Cell: TableHeaderCell
	};
</script>

<thead class={cn('table-head', $$props.class)} {...$$restProps}>
	<tr>
		<slot {...C} />
	</tr>
</thead>
