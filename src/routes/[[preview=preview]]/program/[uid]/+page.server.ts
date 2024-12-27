import { createClient } from '$lib/prismicio';
import { asText } from '@prismicio/client';

export async function load({ params, fetch, cookies }) {
	const client = createClient({ fetch, cookies });

	const page = await client.getByUID('program', params.uid);

	return {
		page,
		title: asText(page.data.program_title),
		meta_description: page.data.meta_description,
		meta_title: page.data.meta_title,
		meta_image: page.data.meta_image.url
	};
}

export async function entries() {
	const client = createClient();

	const pages = await client.getAllByType('program');

	return pages.map((page) => {
		return { uid: page.uid };
	});
}