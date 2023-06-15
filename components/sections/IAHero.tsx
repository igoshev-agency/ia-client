'use client'

import { useTranslations } from 'use-intl'
import { IASection } from '@/components/sections'
import { IAButton } from '@/components/ui'
import { IAEarthCanvas } from '@/components/canvas'
import styles from './IAHero.module.scss'

export const IAHero = async () => {
	const t = useTranslations('Hero')

	return (
		<IASection hash='hero' full={true} className={styles.section}>
			<div className={styles.container}>
				<div className={styles.usp}>
					<h1 className={styles.title}>{t('usp')}</h1>
					<div>
						<IAButton size="l" className="mt-[4rem]">{t('button')}</IAButton>
					</div>
				</div>

				<div className={styles.planet}>
					<div className={styles.earth}>
						{/*<IAEarthCanvas />*/}
					</div>
				</div>
			</div>
			<video
				src={`/videos/stars.mov`}
				loop
				muted
				autoPlay
				className={styles.video}
			/>
		</IASection>
	)
}