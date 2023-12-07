import { CasetteTape, createCasetteTapeFromPartial } from './tapedeck';

describe('createCasetteTapeFromPartial', () => {
	test('given empty object, returns casette tape with empty values', () => {
		const result = createCasetteTapeFromPartial({});

		expect(result).toEqual({
			id: '',
			type: '',
			brand: '',
			color: '',
			playingTime: '',

			imageUrl: '',
			pageUrl: '',
			thumbnailUrl: '',
		});
	});

	test.each<[Partial<CasetteTape>, CasetteTape]>([
		[
			{ id: 'value' },
			{
				id: 'value',
				type: '',
				brand: '',
				color: '',
				playingTime: '',

				imageUrl: '',
				pageUrl: '',
				thumbnailUrl: '',
			},
		],
		[
			{ type: 'value' },
			{
				id: '',
				type: 'value',
				brand: '',
				color: '',
				playingTime: '',

				imageUrl: '',
				pageUrl: '',
				thumbnailUrl: '',
			},
		],
		[
			{ id: 'value1', brand: 'value2' },
			{
				id: 'value1',
				type: '',
				brand: 'value2',
				color: '',
				playingTime: '',

				imageUrl: '',
				pageUrl: '',
				thumbnailUrl: '',
			},
		],
	])('given %j, returns %j', (partial, expectedResult) => {
		const result = createCasetteTapeFromPartial(partial);

		expect(result).toEqual(expectedResult);
	});
});
