'use client'

import styles from './IAMobileMenu.module.scss'
import cn from 'classnames'
import { AiOutlineClose } from 'react-icons/ai'
import Link from 'next/link'
import {useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { IALanguage, MenuItem } from '@/components/layout'

export const IAMobileMenu = ({ visible = false, onClose, menu }: { visible?: boolean, onClose: () => void, menu: MenuItem[] }) => {
	const language = useSelector((state: RootState) => state.settings.language)

	return (
		<div className={cn(styles.menu, {[styles.active]: visible})}>
			<div className={styles.icon} onClick={onClose}>
				<AiOutlineClose />
			</div>

			<ul className={styles.list}>
				{menu.map((item: MenuItem) => (
					<li key={item.id} onClick={onClose}>
						<Link href={`/${language}/${item.path}`} className={styles.item}>{item.title}</Link>
					</li>
				))}
			</ul>

			<div className={styles.language}>
				<IALanguage isMobile />
			</div>
		</div>
	)
}