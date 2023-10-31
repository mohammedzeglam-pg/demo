<script>
	import TableContainer from '$lib/components/Table/TableContainer.svelte';
	
	import Chips from './Chips.svelte';
	export let data;
</script>

<div class="container mx-auto p-8 space-y-8">
	<!-- Card statistics -->
	<div class="flex gap-4 h-48 justify-between">
		<div class="card w-full flex flex-col justify-center items-center space-y-8">
			<h3
				class="h2 bg-gradient-to-br from-blue-500 to-cyan-300 bg-clip-text text-transparent box-decoration-clone"
			>
				{data.clients.length ?? 0}
			</h3>
			<p>Number of devices</p>
		</div>
	</div>
	{#if data}
		<TableContainer let:Table>
			<Table let:Header let:Body>
				<Header let:Cell>
					<Cell>Host</Cell>
					<Cell>Scan Identifier</Cell>
					<Cell>Admin Rights</Cell>
					<Cell>OS</Cell>
					<Cell>CPU count</Cell>
					<Cell>Memory</Cell>
					<Cell>IP</Cell>
					<Cell>Results</Cell>
					<Cell>Actions</Cell>
				</Header>
				<Body items={data.clients} let:Cell let:item>
					<Cell>{item.hostname}</Cell>
					<Cell>{item.scanid}</Cell>
					<Cell>{item.adminRights}</Cell>
					<Cell>{item.platform}</Cell>
					<Cell>{item.cpuCount}</Cell>
					<Cell>{item.memory}</Cell>
					<Cell>{item.ip}</Cell>
					<Cell>
						<Chips items={item.logs} />
					</Cell>
					<Cell>
						<a href={`${item.id}`}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								class="w-5 h-5"
							>
								<path
									fill-rule="evenodd"
									d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
									clip-rule="evenodd"
								/>
							</svg>
						</a>
					</Cell>
				</Body>
			</Table>
		</TableContainer>
	{/if}
</div>
