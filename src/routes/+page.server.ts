import { createContext } from '$lib/trpc/context';
import { router } from '$lib/trpc/router.js';

export const load = async (event) => {
	return {
		count: await router.createCaller(await createContext(event)).countLog(),
		streamed: {
			logs: router.createCaller(await createContext(event)).listLogs()
		}
	};
};
