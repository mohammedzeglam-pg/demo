<script>
	import { cn } from '$lib';
	import TableBody from './TableBody.svelte';
	import TableFooter from './TableFooter.svelte';
	import TableHeader from './TableHeader.svelte';
	import { tableA11y } from './actions';

	const C = {
		Header: TableHeader,
		Body: TableBody,
		Footer: TableFooter
	};
</script>

<table role="grid" use:tableA11y class={cn('table', $$props.class)} {...$$restProps}>
	<slot {...C} />
</table>
