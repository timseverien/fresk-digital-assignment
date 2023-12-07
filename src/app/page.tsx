import { CasetteTapeOverview } from '@/app/ui/CasetteTapeOverview';
import { createClient, getCasetteTapes } from '@/data/tapedeck';
import { CasetteLoadError } from './ui/CasetteLoadError';

export default async function Page() {
	const client = createClient(process.env.TAPEDECK_API_KEY as string);

	try {
		const casetteTapes = await getCasetteTapes(client);

		return (
			<main>
				<CasetteTapeOverview casetteTapes={casetteTapes} />
			</main>
		);
	} catch {
		return (
			<main>
				<CasetteLoadError />
			</main>
		);
	}
}
