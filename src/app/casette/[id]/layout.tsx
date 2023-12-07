import { Flow } from '@/app/ui/Flow';
import { CLASSNAME_CONTENT, Layout as LayoutGrid } from '@/app/ui/Layout';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { ReactNode } from 'react';

export default function Layout(props: { children: ReactNode }) {
	return (
		<LayoutGrid>
			<div className={CLASSNAME_CONTENT}>
				<Flow as="main" space="xl">
					<Link href="/">
						<ArrowLeft size="var(--step--1)" />
						Back to overview
					</Link>

					<div>{props.children}</div>
				</Flow>
			</div>
		</LayoutGrid>
	);
}
