'use client'

import { IAHeader } from '@/components/layout'
import { IASection } from '@/components/sections'
import { useTranslations } from 'use-intl'
import { animate, motion, useInView, useMotionValue, useTransform } from 'framer-motion'
import { slideIn } from '@/utils/motion'
import { useEffect, useRef } from 'react'
import styles from './IAAbout.module.scss'

export interface Info {
	id: number
	title: string
	value: number
	text: string
}

export const IAAbout = ({ info }: { info: Info[] }) => {
	const t = useTranslations('About')
	const ref = useRef(null)
	const isInView = useInView(ref)

	const year = useMotionValue(new Date().getFullYear())
	const roundedYear = useTransform(year, latest => Math.round(latest))

	const office = useMotionValue(0)
	const roundedOffice = useTransform(office, latest => Math.round(latest))

	const project = useMotionValue(0)
	const roundedProject = useTransform(project, latest => Math.round(latest))

	const employee = useMotionValue(0)
	const roundedEmployee = useTransform(employee, latest => Math.round(latest))

	useEffect(() => {
		if (isInView) {
			const controls = animate(year, info[0].value, { duration: 3 })
			return controls.stop
		}
	}, [isInView])

	useEffect(() => {
		if (isInView) {
			const controls = animate(office, info[1].value, { duration: 3 })
			return controls.stop
		}
	}, [isInView])

	useEffect(() => {
		if (isInView) {
			const controls = animate(project, info[2].value, { duration: 3 })
			return controls.stop
		}
	}, [isInView])

	useEffect(() => {
		if (isInView) {
			const controls = animate(employee, info[3].value, { duration: 3 })
			return controls.stop
		}
	}, [isInView])

	return (
		<div ref={ref}>
			<IASection hash="about" className="mt-[10rem] md:mt-[15rem]">
				<IAHeader text={t('header')}/>

				<motion.div variants={slideIn('down', 'tween', 0.2, 0.75)} className={styles.about}>
					<div className={styles.block}>
						<div>{info[0].title}</div>
						<div><motion.span className={styles.value}>{roundedYear}</motion.span>{info[0].text}</div>
					</div>

					<div className={styles.block}>
						<div>{info[1].title}</div>
						<div><motion.span className={styles.value}>{roundedOffice}</motion.span>{info[1].text}</div>
					</div>

					<div className={styles.block}>
						<div>{info[2].title}</div>
						<div><motion.span className={styles.value}>{roundedProject}</motion.span>{info[2].text}</div>
					</div>

					<div className={styles.block}>
						<div>{info[3].title}</div>
						<div><motion.span className={styles.value}>{roundedEmployee}</motion.span>{info[3].text}</div>
					</div>
				</motion.div>
			</IASection>
		</div>
	)
}
