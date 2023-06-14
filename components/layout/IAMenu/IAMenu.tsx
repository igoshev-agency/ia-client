'use client'

import Link from 'next/link'
import styles from './IAMenu.module.scss'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'

export interface MenuItem {
	id: number
	title: string
	path: string
}

export const IAMenu = ({ menu } : { menu: MenuItem[] }) => {
	const language = useSelector((state: RootState) => state.settings.language)

	return (
		<ul className={styles.menu}>
			{menu && menu.map((item: MenuItem) => (
				<li key={item.id}>
					<Link href={`/${language}/${item.path}`} className={styles.item}>{item.title}</Link>
				</li>
			))}
		</ul>
	)
}
