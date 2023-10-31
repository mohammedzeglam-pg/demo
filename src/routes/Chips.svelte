<script lang="ts">
	import type { LevelSchema } from '$lib/trpc/schema';
	type T = $$Generic<{ level: LevelSchema }>;

	export let items: T[];
</script>

<span class="chip variant-filled variant-filled-warning"
	>{items.filter((l) => l.level === 'Warnings').length}</span
>
<span class="chip variant-filled variant-filled-tertiary"
	>{items.filter((l) => l.level === 'Alerts').length}</span
>
<span class="chip variant-filled variant-filled-error"
	>{items.filter((l) => l.level === 'Errors').length}</span
>
