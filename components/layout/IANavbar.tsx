'use client'

import styles from '@/components/layout/layout.module.scss'
import { useDispatch } from 'react-redux'
import Link from 'next/link'
import { useEffect } from 'react'
import { setLanguage } from '@/redux/settingsSlice'
import { HiOutlineMenu } from 'react-icons/hi'
import { IAButton } from '@/components/ui'
import { useTranslations } from 'use-intl'
import { IAMenu, MenuItem } from '@/components/layout/IAMenu'
import { IALanguage } from '@/components/layout/IALanguage'

export const IANavbar = ({ language, menu }: { language: string, menu: MenuItem[] }) => {
	const t = useTranslations('Navbar')
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(setLanguage(language))
	}, [])

	return (
		<header className={styles.navbar}>
			<Link href={`/${language}`}>
				<div className={styles.logo}>
					<img src="/icons/logo.svg" alt="Logo"/>
					<span>Igoshev Agency</span>
				</div>
			</Link>

			<IAMenu menu={menu}/>

			<div className={styles.actions}>
				<IALanguage />
				<IAButton theme="filled" className={styles.button}>{t('Button')}</IAButton>
				<HiOutlineMenu className={styles.burger}/>
			</div>
		</header>
	)
}