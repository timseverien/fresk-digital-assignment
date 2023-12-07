import { ReactNode } from 'react';
import styles from './styles.module.css';

export function Flow(props: { children: ReactNode; space?: 'xs' | 's' | 'm' | 'l' | 'xl' }) {
	return (
		<div>
			<div
				className={styles.container}
				style={{
					'--flow-space': `var(--space-${props.space ?? 'xs'})`,
				}}
			>
				{props.children}
			</div>
		</div>
	);
}
