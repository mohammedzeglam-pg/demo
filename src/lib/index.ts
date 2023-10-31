// place files you want to import through the `$lib` alias in this folder.

import { z } from 'zod';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
function searchParamsToObject(searchParams: URLSearchParams) {
	const query: Record<string, unknown> = {};
	for (const [key, value] of searchParams.entries()) {
		if (query[key]) {
			const existing = query[key];
			if (Array.isArray(existing)) {
				existing.push(value);
			} else {
				query[key] = [query[key], value];
			}
		} else {
			query[key] = value;
		}
	}
	return query;
}

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function parseQuery(searchParams: URLSearchParams, schema: z.AnyZodObject) {
	const query = searchParamsToObject(searchParams);
	return schema.parse(query);
}

export function safeParseQuery(searchParams: URLSearchParams, schema: z.AnyZodObject) {
	const query = searchParamsToObject(searchParams);
	return schema.safeParse(query);
}

export const strToNum = z
	.string()
	.regex(/^-?\d*\.?\d+$/, 'Must be a number string')
	.transform(Number);
