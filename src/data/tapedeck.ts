import axios, { AxiosInstance } from 'axios';
import { z } from 'zod';

type TapedeckClient = AxiosInstance;

const casetteTapeResponseSchema = z.record(
	z.string(),
	z.array(
		z
			.object({ page: z.string() })
			.or(z.object({ brand: z.string() }))
			.or(z.object({ color: z.string() }))
			.or(z.object({ img: z.string() }))
			.or(z.object({ playingTime: z.string() }))
			.or(z.object({ thumb: z.string() }))
			.or(z.object({ type: z.string() })),
	),
);

export type CasetteTape = {
	id: string;
	type: string;
	brand: string;
	color: string;
	playingTime: string;

	imageUrl: string;
	pageUrl: string;
	thumbnailUrl: string;
};

export function createClient(apiKey: string): TapedeckClient {
	return axios.create({
		baseURL: 'https://tapedeck-api-fresk.vercel.app/api',
		headers: {
			'X-Api-Key': apiKey,
		},
		responseType: 'json',
	});
}

const getCasetteTapesSchema = z.array(casetteTapeResponseSchema);

export async function getCasetteTapes(client: TapedeckClient): Promise<CasetteTape[]> {
	const response = await client.get('/');
	const { data } = response;
	const casetteTapes = getCasetteTapesSchema.parse(data);

	// The API response is horrendous, so let’s clean that up
	return casetteTapes.map((c) => {
		const [id] = Object.keys(c);
		const [props] = Object.values(c);

		return {
			id,
			type: props.find((p): p is { type: string } => 'type' in p)?.type ?? 'other',
			brand: props.find((p): p is { brand: string } => 'brand' in p)?.brand ?? '',
			color: props.find((p): p is { color: string } => 'color' in p)?.color ?? '',
			playingTime:
				props.find((p): p is { playingTime: string } => 'playingTime' in p)?.playingTime ?? '',

			imageUrl: props.find((p): p is { img: string } => 'img' in p)?.img ?? '',
			pageUrl: props.find((p): p is { page: string } => 'page' in p)?.page ?? '',
			thumbnailUrl: props.find((p): p is { thumb: string } => 'thumb' in p)?.thumb ?? '',
		};
	});
}
