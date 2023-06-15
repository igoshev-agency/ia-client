'use client'

import { DetailedHTMLProps, HTMLAttributes } from 'react'
import cn from 'classnames'
import { motion } from 'framer-motion'
import { textVariant } from '@/utils/motion'
import styles from './IAHeader.module.scss'

interface HeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
	text: string
}

export const IAHeader = ({ text, className, ...props }: HeaderProps) => {
	const textArr = text.split(' ')
	const firstWord = textArr.shift()

	return (
		<motion.div variants={textVariant()}>
			<h2
				className={cn(styles.header, className)}
				{...props}
			>
				{firstWord}
				<span> {textArr.join(' ')}</span>
			</h2>
		</motion.div>
	)
}