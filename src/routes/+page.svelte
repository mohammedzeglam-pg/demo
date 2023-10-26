<script lang="ts">
	import { Table, tableMapperValues } from '@skeletonlabs/skeleton';
	import type { TableSource } from '@skeletonlabs/skeleton';
	export let data;

	function tableMapper(sourceData: Awaited<typeof data.streamed.logs>) {
		return {
			head: ['Host', 'Scan Identifier', 'Admin Rights', 'OS', 'Cpu Count', 'Memory', 'IP'],
			body: tableMapperValues(sourceData, [
				'hostname',
				'scanId',
				'adminRights',
				'platform',
				'cpuCount',
				'memory',
				'ip'
			]),
			meta: tableMapperValues(sourceData, ['id'])
		} satisfies TableSource;
	}
</script>

<div class="container mx-auto p-8 space-y-8">
	<!-- Card statistics -->
	<div class="flex gap-4 h-48 justify-between">
		<div class="card w-full flex flex-col justify-center items-center space-y-8">
			<h3
				class="h2 bg-gradient-to-br from-blue-500 to-cyan-300 bg-clip-text text-transparent box-decoration-clone"
			>
				{data.count?.count ?? '0'}
			</h3>
			<p>Number of devices</p>
		</div>
	</div>

	<!-- Table -->
	{#await data.streamed.logs}
		<section class="card w-full">
			<div class="p-4 space-y-4">
				<div class="placeholder" />
				<div class="grid grid-cols-3 gap-8">
					<div class="placeholder" />
					<div class="placeholder" />
					<div class="placeholder" />
				</div>
				<div class="grid grid-cols-4 gap-4">
					<div class="placeholder" />
					<div class="placeholder" />
					<div class="placeholder" />
					<div class="placeholder" />
				</div>
			</div>
		</section>
	{:then logs}
		<section class="card w-full">
			<Table source={tableMapper(logs)} interactive={true} on:selected={(e) => console.log(e)} />
		</section>
	{/await}
</div>
