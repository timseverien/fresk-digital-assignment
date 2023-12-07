import '@/styles/main.css';
import type { Metadata } from 'next';
import styles from './styles.module.css';

export const metadata: Metadata = {
	title: 'Tapedeck',
	description: 'Casettes are awesome',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>
				<div className={styles.container}>{children}</div>
			</body>
		</html>
	);
}
