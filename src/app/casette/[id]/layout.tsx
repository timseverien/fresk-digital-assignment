import { Flow } from '@/app/ui/Flow';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { ReactNode } from 'react';

export default function Layout(props: { children: ReactNode }) {
	return (
		<Flow as="main" space="xl">
			<Link href="/">
				<ArrowLeft size="var(--step--1)" />
				Back to overview
			</Link>

			<div>{props.children}</div>
		</Flow>
	);
}
