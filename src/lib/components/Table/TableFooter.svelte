<script>
	import { cn } from '$lib';
	import TableFootCell from './TableFooterCell.svelte';
	const C = {
		Cell: TableFootCell
	};
</script>

<tfoot class={cn('table-foot', $$props.class)} {...$$restProps}>
	<tr>
		<slot {...C} />
	</tr>
</tfoot>
