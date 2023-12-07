import { CasetteTape } from '@/data/tapedeck';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

export type CasetteTapeFilterSettings = {
	type: string | null;
	brand: string | null;
	color: string | null;
	playingTime: string | null;
};

export function useCasetteTapeFilterSettings(): [
	CasetteTapeFilterSettings,
	Dispatch<SetStateAction<CasetteTapeFilterSettings>>,
] {
	const [state, setState] = useState<CasetteTapeFilterSettings>(
		createCasetteTapeFilterSettingsFromPartial({}),
	);

	return [state, setState];
}

export function useCasetteTapeFilter(initialState: CasetteTape[] = []) {
	const [casetteTapes, setCasetteTapes] = useState<CasetteTape[]>(initialState);
	const [filterSettings, setFilterSettings] = useCasetteTapeFilterSettings();

	useEffect(
		() => setCasetteTapes(applyCasetteTapeFilter(initialState, filterSettings)),
		[initialState, filterSettings],
	);

	return {
		casetteTapes,
		setCasetteTapes,
		filterSettings,
		setFilterSettings,
		resetFilterSettings() {
			setFilterSettings(createCasetteTapeFilterSettingsFromPartial({}));
		},
	};
}

export function applyCasetteTapeFilter(
	casetteTapes: CasetteTape[],
	filter: CasetteTapeFilterSettings,
) {
	return casetteTapes.filter(
		(t) =>
			(filter.brand ? t.brand === filter.brand : true) &&
			(filter.color ? t.color === filter.color : true) &&
			(filter.playingTime ? t.playingTime === filter.playingTime : true) &&
			(filter.type ? t.type === filter.type : true),
	);
}

export function createCasetteTapeFilterSettingsFromPartial(
	filter: Partial<CasetteTapeFilterSettings>,
): CasetteTapeFilterSettings {
	return {
		type: null,
		brand: null,
		color: null,
		playingTime: null,
		...filter,
	};
}
