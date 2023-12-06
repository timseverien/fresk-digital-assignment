'use client';

import { CasetteTapeFilterSettings, useCasetteTapeFilter } from '@/app/hooks/casetteTape';
import { CasetteTape } from '@/data/tapedeck';
import { AlertWarning } from '../Alert';
import { Flow } from '../Flow';
import styles from './styles.module.css';

type Option<T extends any> = { value: T; text: string };

function CasetteTapeFilter(props: {
	brandOptions: Option<string>[];
	colorOptions: Option<string>[];
	playingTimeOptions: Option<string>[];
	settings: CasetteTapeFilterSettings;
	onChange: (nextSettings: CasetteTapeFilterSettings) => any;
}) {
	return (
		<form className={styles.filterForm}>
			<div className={styles.filterFormItem}>
				<label htmlFor="input-brand">Brand</label>
				<select
					id="input-brand"
					onChange={(e) => props.onChange({ ...props.settings, brand: e.currentTarget.value })}
					value={props.settings.brand ?? ''}
				>
					<option value="">All</option>
					{props.brandOptions.map((brand) => (
						<option key={brand.value} value={brand.value}>
							{brand.text}
						</option>
					))}
				</select>
			</div>

			<div className={styles.filterFormItem}>
				<label htmlFor="input-color">Color</label>
				<select
					id="input-color"
					onChange={(e) => props.onChange({ ...props.settings, color: e.currentTarget.value })}
					value={props.settings.color ?? ''}
				>
					<option value="">All</option>
					{props.colorOptions.map((color) => (
						<option key={color.value} value={color.value}>
							{color.text}
						</option>
					))}
				</select>
			</div>

			<div className={styles.filterFormItem}>
				<label htmlFor="input-playingTime">Playing time</label>
				<select
					id="input-playingTime"
					onChange={(e) =>
						props.onChange({ ...props.settings, playingTime: e.currentTarget.value })
					}
					value={props.settings.playingTime ?? ''}
				>
					<option value="">All</option>
					{props.playingTimeOptions.map((playingTimeOptions) => (
						<option key={playingTimeOptions.value} value={playingTimeOptions.value}>
							{playingTimeOptions.text}
						</option>
					))}
				</select>
			</div>
		</form>
	);
}

export function CasetteTapeOverview(props: { casetteTapes: CasetteTape[] }) {
	const { casetteTapes, filterSettings, setFilterSettings, resetFilterSettings } =
		useCasetteTapeFilter(props.casetteTapes);

	const brandOptions = Array.from(new Set(props.casetteTapes.map((c) => c.brand).filter(Boolean)))
		.map<Option<string>>((brand) => ({
			text: brand,
			value: brand,
		}))
		.sort((a, b) => a.text.localeCompare(b.text));

	const colorOptions = Array.from(new Set(props.casetteTapes.map((c) => c.color).filter(Boolean)))
		.map<Option<string>>((color) => ({
			text: color,
			value: color,
		}))
		.sort((a, b) => a.text.localeCompare(b.text));

	const playingTimeOptions = Array.from(
		new Set(props.casetteTapes.map((c) => c.playingTime).filter(Boolean)),
	)
		.map<Option<string>>((playingTime) => ({
			text: playingTime,
			value: playingTime,
		}))
		.sort((a, b) => a.text.localeCompare(b.text));

	const casetteTapesSorted = casetteTapes.sort((a, b) => a.brand.localeCompare(b.brand));

	return (
		<Flow space="xl">
			<CasetteTapeFilter
				brandOptions={brandOptions}
				colorOptions={colorOptions}
				playingTimeOptions={playingTimeOptions}
				settings={filterSettings}
				onChange={(nextFilterSettings) => setFilterSettings(nextFilterSettings)}
			/>

			{casetteTapes.length > 0 ? (
				<ul role="list" className={styles.layout}>
					{casetteTapesSorted.map((casette) => (
						<li key={casette.id}>
							<a
								href={casette.pageUrl}
								className={styles.itemLink}
								style={{ '--casette-color': casette.color }}
							>
								<img
									src={casette.imageUrl ?? casette.thumbnailUrl}
									alt=""
									className={styles.itemThumbnail}
								/>
							</a>
						</li>
					))}
				</ul>
			) : (
				<Flow>
					<AlertWarning>No results for these filters</AlertWarning>
					<button onClick={() => resetFilterSettings()}>Reset filters</button>
				</Flow>
			)}
		</Flow>
	);
}
