'use client'

import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { useTranslations } from 'use-intl'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/motion'
import { IAButton } from '@/components/ui'
import Image from 'next/image'
import Link from 'next/link'
import cn from 'classnames'
import styles from './IAServiceCard.module.scss'

export interface Service {
	id: number
	title: string
	desc: string
	img: string
	size: number
	path: string
	price: string
}

interface ServiceCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	service: Service
	index: number
}

export const IAServiceCard = ({ service, index }: ServiceCardProps) => {
	const t = useTranslations('Services')

	return (
		<motion.div
			className={cn('card perspective', styles.card)}
			variants={fadeIn('right', 'spring', 0.5 * index, 0.5)}
		>
			<div className={cn('card-front', styles.card_front)}>
				<div className={styles.front}>
					<div className={styles.icon}>
						<Image src={`/icons/${service.img}`} alt={service.title} width={service.size} height={service.size} />
					</div>
					<div className={styles.title}>{service.title}</div>
				</div>
			</div>

			<div
				className={cn('card-back', styles.card_back)}>
				<div className={styles.back}>
					<div className={styles.number}>{`0${index + 1}.`}</div>
					<div className={styles.back_title}>{service.title}</div>
					<div className={styles.desc}>{service.desc}</div>
					<div className={styles.wrapper}>
						<div className={styles.price}>{t('from')}<span> {service.price}</span></div>
						<Link href={service.path}>
							<IAButton size="s">{t('button')}</IAButton>
						</Link>
					</div>
				</div>
			</div>
		</motion.div>
	)
}