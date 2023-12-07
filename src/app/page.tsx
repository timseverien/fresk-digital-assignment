import { AlertError } from '@/app/ui/Alert';
import { CasetteTapeOverview } from '@/app/ui/CasetteTapeOverview';
import { Flow } from '@/app/ui/Flow';
import { createClient, getCasetteTapes } from '@/data/tapedeck';

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
				<AlertError>
					<Flow>
						<p>Unable to load casette tapes!</p>
						<p>Please clean the casette tray.</p>
					</Flow>
				</AlertError>
			</main>
		);
	}
}
