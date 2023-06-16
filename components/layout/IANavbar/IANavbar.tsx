'use client'

import styles from './IANavbar.module.scss'
import { useDispatch } from 'react-redux'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { setLanguage } from '@/redux/settingsSlice'
import { HiOutlineMenu } from 'react-icons/hi'
import { IAButton } from '@/components/ui'
import { useTranslations } from 'use-intl'
import { IAMenu, IALanguage, IAMobileMenu, MenuItem } from '@/components/layout'
import { IAForm } from '@/components/widgets'

export const IANavbar = ({ language, menu }: { language: string, menu: MenuItem[] }) => {
	const t = useTranslations('Navbar')
	const dispatch = useDispatch()
	const [isModal, setIsModal] = useState(false)
	const [isMenuOpened, setIsMenuOpened] = useState(false)

	useEffect(() => {
		dispatch(setLanguage(language))
	}, [])

	const closeModal = () => {
		setIsModal(false)
	}

	const menuClose = () => {
		setIsMenuOpened(false)
	}

	return (
		<>
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
					<IAButton theme="filled" className={styles.action} onClick={() => setIsModal(true)}>{t('button')}</IAButton>
					<HiOutlineMenu className={styles.burger} onClick={() => setIsMenuOpened(true)}/>
				</div>
			</header>

			<IAForm isModal close={closeModal} visible={isModal} />
			<IAMobileMenu menu={menu} visible={isMenuOpened} onClose={menuClose}/>
		</>
	)
}