import { AlertCircle, XCircle } from 'lucide-react';
import { ReactNode } from 'react';
import styles from './styles.module.css';

export function Alert(props: {
	children: ReactNode;
	icon: ReactNode;
	background: string;
	iconColor: string;
}) {
	return (
		<div
			className={styles.container}
			style={{ '--alert-background': props.background, '--alert-icon-color': props.iconColor }}
		>
			<div className={styles.icon}>{props.icon}</div>
			<div>{props.children}</div>
		</div>
	);
}

export function AlertError(props: { children: ReactNode }) {
	return (
		<Alert
			icon={<XCircle />}
			background="var(--color-danger-background)"
			iconColor="var(--color-danger-foreground)"
		>
			{props.children}
		</Alert>
	);
}

export function AlertWarning(props: { children: ReactNode }) {
	return (
		<Alert
			icon={<AlertCircle />}
			background="var(--color-warning-background)"
			iconColor="var(--color-warning-foreground)"
		>
			{props.children}
		</Alert>
	);
}
