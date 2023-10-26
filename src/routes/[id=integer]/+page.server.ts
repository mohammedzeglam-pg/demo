import { createContext } from '$lib/trpc/context.js';
import { router } from '$lib/trpc/router.js';
import { error } from 'console';

export const load = async (event) => {
	const log = await router.createCaller(await createContext(event)).getLog(+event.params.id);
	if (log) {
		return { log };
	}
	return error(404, 'Not Found');
};
