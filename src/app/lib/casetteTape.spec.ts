import { CasetteTape, createCasetteTapeFromPartial } from '../../core/tapedeck';
import {
	CasetteTapeFilterSettings,
	applyCasetteTapeFilter,
	createCasetteTapeFilterSettingsFromPartial,
} from './casetteTape';

describe('applyCasetteTapeFilter', () => {
	test('given empty filter, returns all casette tapes', () => {
		const casetteTapes: CasetteTape[] = [
			createCasetteTapeFromPartial({ id: '1' }),
			createCasetteTapeFromPartial({ id: '2' }),
		];
		const filter: CasetteTapeFilterSettings = createCasetteTapeFilterSettingsFromPartial({});

		const result = applyCasetteTapeFilter(casetteTapes, filter);

		expect(result).toEqual([
			expect.objectContaining({ id: '1' }),
			expect.objectContaining({ id: '2' }),
		]);
	});

	test.each<[CasetteTape[], CasetteTapeFilterSettings, any[]]>([
		[
			[
				createCasetteTapeFromPartial({ id: '1', brand: 'Brand 1' }),
				createCasetteTapeFromPartial({ id: '2', brand: 'Brand 1' }),
				createCasetteTapeFromPartial({ id: '3', brand: 'Brand 2' }),
				createCasetteTapeFromPartial({ id: '4', brand: 'Brand 2' }),
			],
			createCasetteTapeFilterSettingsFromPartial({
				brand: 'Brand 1',
			}),
			[expect.objectContaining({ id: '1' }), expect.objectContaining({ id: '2' })],
		],
		[
			[
				createCasetteTapeFromPartial({ id: '1', brand: 'Brand 1' }),
				createCasetteTapeFromPartial({ id: '2', brand: 'Brand 1' }),
				createCasetteTapeFromPartial({ id: '3', brand: 'Brand 2' }),
				createCasetteTapeFromPartial({ id: '4', brand: 'Brand 2' }),
			],
			createCasetteTapeFilterSettingsFromPartial({
				brand: 'Brand 2',
			}),
			[expect.objectContaining({ id: '3' }), expect.objectContaining({ id: '4' })],
		],
		[
			[
				createCasetteTapeFromPartial({
					id: '1',
					brand: 'Brand 1',
					color: 'Color 1',
					type: 'Type 1',
					playingTime: 'Playing time 1',
				}),
				createCasetteTapeFromPartial({
					id: '2',
					brand: 'Brand 1',
					color: 'Color 1',
					type: 'Type 1',
					playingTime: 'Playing time 2',
				}),
				createCasetteTapeFromPartial({
					id: '3',
					brand: 'Brand 1',
					color: 'Color 1',
					type: 'Type 2',
					playingTime: 'Playing time 1',
				}),
				createCasetteTapeFromPartial({
					id: '4',
					brand: 'Brand 1',
					color: 'Color 2',
					type: 'Type 1',
					playingTime: 'Playing time 1',
				}),
			],
			createCasetteTapeFilterSettingsFromPartial({
				brand: 'Brand 1',
				color: 'Color 1',
				type: 'Type 1',
				playingTime: 'Playing time 2',
			}),
			[expect.objectContaining({ id: '2' })],
		],
	])(
		'given casette tapes %j and filter %j, returns matching casette tapes',
		(casetteTapes, filter, expectedResult) => {
			const result = applyCasetteTapeFilter(casetteTapes, filter);
			expect(result).toEqual(expectedResult);
		},
	);
});
