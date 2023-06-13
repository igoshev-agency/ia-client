'use client'

import { MdOutlineLanguage } from 'react-icons/md'
import { useRouter } from 'next/navigation'
import { setLang } from '@/app/actions'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import styles from './layout.module.scss'
import { setLanguage } from '@/redux/settingsSlice'

const locales = ['en', 'de', 'ru']

export const IALanguage = () => {
	const language = useSelector((state: RootState) => state.settings.language)
	const dispatch = useDispatch()
	const languages = locales.filter(l => l !== language)
	const router = useRouter()

	const onLanguageSwitch = async (language: string) => {
		dispatch(setLanguage(language))
		await setLang(language).then()
		await router.push(`/${language}/`)
	}

	return (
		<div className={styles.language}>
			<MdOutlineLanguage className={styles.languageIcon} />
			<span>{language}</span>
			<div className={styles.languageBlock}>
				<ul className={styles.languageList}>
					{languages?.map(language => (
						<li
							key={language}
							className={styles.languageItem}
							onClick={() => onLanguageSwitch(language)}
						>
							{language}
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}
