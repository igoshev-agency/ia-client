'use client'

import { DetailedHTMLProps, InputHTMLAttributes, useState } from 'react'
import cn from 'classnames'
import { TbSelect } from 'react-icons/tb'
import { motion } from 'framer-motion'

export interface Option {
	title: string
	value: string
}

interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	value: { title: string, value: string }
	setValue: any
	options: Option[]
}

const variants = {
	visible: { opacity: 1 },
	hidden: { opacity: 0 }
}

export const IASelect = ({ value, setValue, options, className, ...props }: InputProps) => {
	const [opened, setOpened] = useState(false)

	return (
		<div className="w-full h-full relative">
			<input
				className={cn('bg-transparent text-l font-light w-full border-b border-white pb-[.5rem] outline-none', className)}
				defaultValue={value.title}
				{...props}
			/>
			<div
				className="absolute w-full h-[4rem] flex justify-end top-[.5rem] right-0 text-base cursor-pointer"
				onClick={() => setOpened(state => !state)}
			>
				<div className="pl-[1rem] bg-gray h-[4rem] flex items-center">
					<TbSelect />
				</div>
			</div>
			{opened &&
				<motion.div
					initial="hidden"
					animate="visible"
					variants={variants}
					className="absolute w-full z-10 bg-black text-white mt-[1rem] text-l font-light rounded-[.5rem] overflow-hidden"
				>
					<div className="flex flex-col py-[.4rem]">
						{options && options.map(option => (
							<span
								key={option.value}
								className="px-[2rem] py-[.4rem] pt-[.5rem] transition-all duration-500 hover:bg-primary cursor-pointer text-sm"
								onClick={() => {
									setValue(option)
									setOpened(false)
								}}
							>
			          {option.title}
							</span>
						))}
					</div>
				</motion.div>
			}
		</div>
	)
}
