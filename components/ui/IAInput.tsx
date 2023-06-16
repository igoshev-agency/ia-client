'use client'

import { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import cn from 'classnames'
import styles from './IAInput.module.scss'

interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	register: any
}


export const IAInput = ({ className, register, ...props }: InputProps) => {
	return (
		<div className="w-full h-full relative">
			<input
				className={cn(styles.input, className)}
				{...register}
				{...props}
			/>
		</div>
	)
}
