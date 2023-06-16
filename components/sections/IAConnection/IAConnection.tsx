'use client'

import { useTranslations } from 'use-intl'
import { IASection } from '@/components/sections'
import Image from 'next/image'
import { IAForm } from '@/components/widgets'
import { motion } from 'framer-motion'
import { slideIn } from '@/utils/motion'
import styles from './IAConnection.module.scss'

export const IAConnection = () => {
	const t = useTranslations('Connection')

	return (
		<IASection
			hash="connection"
			full={true}
			className={styles.section}
		>
			<div className={styles.position}>
				<div className={styles.wrapper}>
					<motion.div
						variants={slideIn('left', 'tween', 0.2, 0.75)}
						className={styles.rocket}
					>
						<img
							src="/images/falcon9.png"
							alt="rocket"
							// width={150}
							// height={700}
							className={styles.img}
						/>
					</motion.div>

					<motion.div
						variants={slideIn('right', 'tween', 0.2, 0.75)}
						className={styles.form}
					>
						<IAForm hasTitle/>
					</motion.div>
				</div>
			</div>

			<video
				src={`/videos/stars.mov`}
				loop
				muted
				autoPlay
				className={styles.video}
			/>
			{/*<StarsCanvas/>*/}
		</IASection>
	)
}
