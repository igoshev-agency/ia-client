'use client'

import { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import cn from 'classnames'

interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	register: any
}


export const IAInput = ({ className, register, ...props }: InputProps) => {
	return (
		<div className="w-full h-full relative">
			<input
				className={cn('bg-transparent text-l font-light w-full border-b border-white pb-[.5rem] outline-none', className)}
				{...register}
				{...props}
			/>
		</div>
	)
}
