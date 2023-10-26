<script lang="ts">
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';

	export let data;
	const { log } = data;
</script>

<div class="container mx-auto p-8 space-y-8">
	<!-- Card statistics -->
	<div class="flex gap-4 h-48 justify-between">
		<div class="card w-full flex flex-col justify-center items-center space-y-8">
			<h3
				class="h2 bg-gradient-to-br from-blue-500 to-cyan-300 bg-clip-text text-transparent box-decoration-clone"
			>
				{log?.hostname}
			</h3>
			<p>Host</p>
		</div>
		<div class="card w-full flex flex-col justify-center items-center space-y-8">
			<h3
				class="h2 bg-gradient-to-br from-blue-500 to-cyan-300 bg-clip-text text-transparent box-decoration-clone"
			>
				{log?.ip}
			</h3>
			<p>IP</p>
		</div>
		<div class="card w-full flex flex-col justify-center items-center space-y-8">
			<h3
				class="h2 bg-gradient-to-br from-blue-500 to-cyan-300 bg-clip-text text-transparent box-decoration-clone"
			>
				{log?.memory} MB
			</h3>
			<p>RAM</p>
		</div>
	</div>
	<div class="flex gap-4 h-48 justify-between">
		<div class="card w-full flex flex-col justify-center items-center space-y-8">
			<h3
				class="h2 bg-gradient-to-br from-blue-500 to-cyan-300 bg-clip-text text-transparent box-decoration-clone"
			>
				{log?.platform}
			</h3>
			<p>OS</p>
		</div>
		<div class="card w-full flex flex-col justify-center items-center space-y-8">
			<h3
				class="h2 bg-gradient-to-br from-blue-500 to-cyan-300 bg-clip-text text-transparent box-decoration-clone"
			>
				{log?.cpuCount}
			</h3>
			<p>CPU</p>
		</div>
	</div>
	{#if log}
		{#each log.log as entry (entry)}
			<section
				class="card w-full p-8"
				class:variant-filled-error={entry.level == 'Alerts'}
				class:variant-filled-warning={entry.level == 'Warnings'}
				class:variant-filled={entry.level == 'Info'}
				class:variant-filled-surface={entry.level == 'Notice'}
				class:variant-filled-tertiary={entry.level == 'Errors'}
			>
				<div>
					{#if entry.module}
						<p><span class="h3">Module:</span> {entry.module}</p>
					{/if}
                    {#if entry.message}
						<p><span class="h3">Message:</span> {entry.message}</p>
					{/if}
                    {#if entry.rule}
						<p><span class="h3">Rule:</span> {entry.rule}</p>
					{/if}
                    {#if entry.tags.length}
						<p><span class="h3">Tags:</span> {entry.tags.join(",")}</p>
					{/if}
                    {#if entry.desc.length}
						<p><span class="h3">Desc:</span> {entry.desc.join(",")}</p>
					{/if}
                    {#if entry.command}
						<p><span class="h3">CMD:</span> {entry.command}</p>
					{/if}
                    {#if entry.pid}
						<p><span class="h3">PID:</span> {entry.pid}</p>
					{/if}
                    {#if entry.file.length}
						<p><span class="h3">File:</span> {entry.file.join(",")}</p>
					{/if}
				</div>
			</section>
		{/each}
	{/if}
</div>
