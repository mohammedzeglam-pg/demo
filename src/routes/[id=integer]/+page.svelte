<script lang="ts">
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import { cn } from '$lib';
	import { title } from 'radash';
	export let data;
	const client = data.client;
	function hasValue(value: any): boolean {
		if (
			typeof value === 'number' ||
			typeof value === 'string' ||
			(Array.isArray(value) && value.length)
		) {
			return true;
		}
		return false;
	}
	function format(value: any): string {
		if (Array.isArray(value)) {
			return value.join(',');
		}
		if (value === null) {
			return '';
		}
		if (value === undefined) {
			return '';
		}
		return value;
	}
</script>

{#if client}
	<div class="container mx-auto p-8 space-y-8">
		<div class="flex gap-4 h-48 justify-between">
			<div class="card w-full flex flex-col justify-center items-center space-y-8">
				<h3
					class="h2 bg-gradient-to-br from-blue-500 to-cyan-300 bg-clip-text text-transparent box-decoration-clone"
				>
					{client.hostname}
				</h3>
				<p>Host</p>
			</div>
			<div class="card w-full flex flex-col justify-center items-center space-y-8">
				<h3
					class="h2 bg-gradient-to-br from-blue-500 to-cyan-300 bg-clip-text text-transparent box-decoration-clone"
				>
					{client.ip}
				</h3>
				<p>IP</p>
			</div>
			<div class="card w-full flex flex-col justify-center items-center space-y-8">
				<h3
					class="h2 bg-gradient-to-br from-blue-500 to-cyan-300 bg-clip-text text-transparent box-decoration-clone"
				>
					{client.memory} MB
				</h3>
				<p>RAM</p>
			</div>
		</div>
		<div class="flex gap-4 h-48 justify-between">
			<div class="card w-full flex flex-col justify-center items-center space-y-8">
				<h3
					class="h2 bg-gradient-to-br from-blue-500 to-cyan-300 bg-clip-text text-transparent box-decoration-clone"
				>
					{client.platform}
				</h3>
				<p>OS</p>
			</div>
			<div class="card w-full flex flex-col justify-center items-center space-y-8">
				<h3
					class="h2 bg-gradient-to-br from-blue-500 to-cyan-300 bg-clip-text text-transparent box-decoration-clone"
				>
					{client.cpuCount}
				</h3>
				<p>CPU</p>
			</div>
		</div>
		<Accordion autocollapse>
			{#each client.logs as item (item.id)}
				<AccordionItem
					class={cn('rounded-md variant-filled', {
						'variant-filled-warning': item.level === 'Warnings',
						'variant-filled-tertiary': item.level === 'Alerts',
						'variant-filled-error': item.level === 'Errors',
						'variant-filled-surface': item.level === 'Info'
					})}
				>
					<svelte:fragment slot="lead"
						><span class="h3">
							{item.level}
						</span>
					</svelte:fragment>
					<svelte:fragment slot="summary">{item.message}</svelte:fragment>
					<svelte:fragment slot="content">
						{#each Object.entries(item) as [key, value]}
							{#if hasValue(value)}
								<p>
									<span class="h4">
										{title(key)}:
									</span>
									{format(value)}
								</p>
							{/if}
						{/each}
					</svelte:fragment>
				</AccordionItem>
			{/each}
		</Accordion>
	</div>
{/if}
