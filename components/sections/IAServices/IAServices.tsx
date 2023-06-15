'use client'

import { useTranslations } from 'use-intl'
import { IAHeader } from '@/components/layout'
import { Service, IAServiceCard } from '@/components/widgets'
import { IASection } from '@/components/sections'
import styles from './IAServices.module.scss'

export const IAServices = ({ services }: { services: Service[] }) => {
	const t = useTranslations('Services')

	return (
		<IASection hash="services">
			<IAHeader text={t('header')} />
			<div className={styles.services}>
				{services && services.map((service: Service, index: number) => (
					<IAServiceCard key={service.id} service={service} index={index} />
				))}
			</div>
		</IASection>
	)
}