import { trpc } from '$lib/trpc/client';

export const load = async (event) => {


	const { id } = event.params;
	const client = trpc(event);

	return {
		client: client.getById.query(+id)
	};
};
