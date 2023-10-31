import { trpc } from '$lib/trpc/client.js';

export const load = async (event) => {

	const client = trpc(event);

	return {
		clients: client.list.query()
	};
};
