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

export function createCasetteTapeFromPartial(overrides: Partial<CasetteTape>): CasetteTape {
	return {
		id: '',
		type: '',
		brand: '',
		color: '',
		playingTime: '',

		imageUrl: '',
		pageUrl: '',
		thumbnailUrl: '',

		...overrides,
	};
}
