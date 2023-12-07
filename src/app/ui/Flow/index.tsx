import { ReactNode } from 'react';
import styles from './styles.module.css';

export function Flow(props: {
	as?: keyof JSX.IntrinsicElements;
	children: ReactNode;
	space?: 'xs' | 's' | 'm' | 'l' | 'xl';
}) {
	const Element = props.as ?? 'div';

	return (
		<Element
			className={styles.container}
			style={{
				'--flow-space': `var(--space-${props.space ?? 'xs'})`,
			}}
		>
			{props.children}
		</Element>
	);
}
