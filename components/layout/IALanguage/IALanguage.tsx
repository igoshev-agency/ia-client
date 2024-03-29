'use client'

import { MdOutlineLanguage } from 'react-icons/md'
import { useRouter } from 'next/navigation'
import { setLang } from '@/app/actions'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import styles from './IALanguage.module.scss'
import { setLanguage } from '@/redux/settingsSlice'

export const locales = ['en', 'de', 'ru']

export const IALanguage = ({ isMobile = false }: { isMobile?: boolean }) => {
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
		<>
			<div className={styles.language}>
				<MdOutlineLanguage className={styles.icon} />
				<span>{language}</span>
				<div className={styles.block}>
					<ul className={styles.list}>
						{languages?.map(language => (
							<li
								key={language}
								className={styles.item}
								onClick={() => onLanguageSwitch(language)}
							>
								{language}
							</li>
						))}
					</ul>
				</div>
			</div>

			{isMobile &&
				<div className={styles.mobile}>
					<MdOutlineLanguage className={styles.icon_mobile} />
					<span>{language}</span>
					{languages?.map(lang => (
						<span key={lang} onClick={() => onLanguageSwitch(lang)}>{lang}</span>
					))}
				</div>
			}
		</>
	)
}
