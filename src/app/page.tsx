import { createClient, getCasetteTapes } from '@/data/tapedeck';
import { CasetteTapeOverview } from './components/CasetteTapeOverview';
import styles from './styles.module.css';

export default async function Page() {
	const client = createClient(process.env.TAPEDECK_API_KEY as string);
	const casetteTapes = await getCasetteTapes(client);

	return (
		<main className={styles.container}>
			<CasetteTapeOverview casetteTapes={casetteTapes} />
		</main>
	);
}
