import { TRPCError } from '@trpc/server';

export class NotFound extends TRPCError {
	constructor(cause?: unknown) {
		super({ message: 'Not Found', code: 'NOT_FOUND', cause: cause });
		this.name = 'NotFound';
	}

	toJSON() {
		return { message: 'Resource Not Found.' };
	}
}

export function notFound(cause?: unknown) {
	return new NotFound(cause);
}
