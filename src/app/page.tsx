import { AlertError } from '@/app/ui/Alert';
import { CasetteTapeOverview } from '@/app/ui/CasetteTapeOverview';
import { Flow } from '@/app/ui/Flow';
import { createClient, getCasetteTapes } from '@/data/tapedeck';
import styles from './styles.module.css';

export default async function Page() {
	const client = createClient(process.env.TAPEDECK_API_KEY as string);

	try {
		const casetteTapes = await getCasetteTapes(client);

		return (
			<main className={styles.container}>
				<CasetteTapeOverview casetteTapes={casetteTapes} />
			</main>
		);
	} catch {
		return (
			<main className={styles.container}>
				<Flow>
					<AlertError>Unable to load casette tapes!</AlertError>
					<p>Please clean the casette tray.</p>
				</Flow>
			</main>
		);
	}
}
