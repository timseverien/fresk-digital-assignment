import { Flow } from '../Flow';
import styles from './styles.module.css';

export type SpecificationListItem<T extends string> = {
	name: string;
	value: T;
};

export function SpecificationList<T extends string>(props: {
	specifications: SpecificationListItem<T>[];
}) {
	return (
		<Flow as="dl">
			{props.specifications.map((spec) => (
				<div key={spec.name}>
					<dt className={styles.specificationName}>{spec.name}</dt>
					<dd>{spec.value}</dd>
				</div>
			))}
		</Flow>
	);
}
