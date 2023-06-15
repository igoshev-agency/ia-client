'use client'

import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'
import { motion } from 'framer-motion'
import { staggerContainer } from '@/utils/motion'
import cn from 'classnames'

interface SectionProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: ReactNode
	hash?: string
	full?: boolean
}

export const IASection = ({ children, hash, full = false, className }: SectionProps) => {
	return (
		<motion.section
			variants={staggerContainer()}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, amount: 0.1 }}
			className={cn({ ['container']: !full }, className)}
		>
			{hash &&<div id={hash}/>}
			{children}
		</motion.section>
	)
}
