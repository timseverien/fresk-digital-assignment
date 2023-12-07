import { AlertError } from '@/app/ui/Alert';
import { Flow } from '@/app/ui/Flow';
import { SpecificationList } from '@/app/ui/SpecificationList';
import { createClient, getCasetteTapes } from '@/data/tapedeck';
import styles from './styles.module.css';

export default async function Page(props: { params: { id: string } }) {
	const client = createClient(process.env.TAPEDECK_API_KEY as string);

	try {
		const casetteTapes = await getCasetteTapes(client);
		const casetteTape = casetteTapes.find((c) => c.id === props.params.id);

		// Fall through to error handler
		if (!casetteTape) {
			throw new Error('Nope');
		}

		return (
			<div className={styles.layout}>
				<img src={casetteTape.imageUrl} alt="" />

				<div>
					<SpecificationList
						specifications={[
							{ name: 'Type', value: casetteTape.type },
							{ name: 'Brand', value: casetteTape.brand },
							{ name: 'Color', value: casetteTape.color },
							{ name: 'Playing time', value: casetteTape.playingTime },
						]}
					/>
				</div>
			</div>
		);
	} catch {
		return (
			<main>
				<AlertError>
					<Flow>
						<p>Unable to load casette tape!</p>
						<p>Please clean the casette tray.</p>
					</Flow>
				</AlertError>
			</main>
		);
	}
}
