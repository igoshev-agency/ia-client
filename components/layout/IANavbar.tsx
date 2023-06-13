'use client'

import styles from '@/components/layout/layout.module.scss'
import { useDispatch } from 'react-redux'
import Link from 'next/link'
import { useEffect } from 'react'
import { setLanguage } from '@/redux/settingsSlice'
import { HiOutlineMenu } from 'react-icons/hi'

export const IANavbar = ({ language }: { language: string }) => {
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

			<HiOutlineMenu className={styles.icon}/>
		</header>
	)
}