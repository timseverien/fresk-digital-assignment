import { AlertError } from './Alert';
import { Flow } from './Flow';

export function CasetteLoadError() {
	return (
		<AlertError>
			<Flow>
				<p>Unable to load casette tapes!</p>
				<p>
					Please{' '}
					<a href="" aria-current="page">
						clean the casette tray
					</a>
					.
				</p>
			</Flow>
		</AlertError>
	);
}
