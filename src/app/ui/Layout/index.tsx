import { ReactNode } from 'react';
import styles from './styles.module.css';

export const CLASSNAME_CONTENT = styles.content;
export const CLASSNAME_FULL = styles.fullWidth;
export const CLASSNAME_POPOUT = styles.popout;

export function Layout(props: { children: ReactNode }) {
	return <div className={styles.container}>{props.children}</div>;
}
