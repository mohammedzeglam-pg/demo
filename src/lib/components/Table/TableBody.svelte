<script lang="ts">
	import { cn } from '$lib';
	import TableBodyCell from './TableBodyCell.svelte';

	type T = $$Generic<Record<string, unknown>>;

	export let items: T[];
	const C = { Cell: TableBodyCell };
</script>

<tbody class={cn('table-body', $$props.class)} {...$$restProps}>
	{#each items as row, idx}
		<tr aria-rowindex={idx + 1}>
			<slot {...C} item={row} />
		</tr>
	{/each}
</tbody>
