'use client'

import { DetailedHTMLProps, HTMLAttributes, useState } from 'react'
import cn from 'classnames'
import { TbSelect } from 'react-icons/tb'
import { motion } from 'framer-motion'
import styles from './IASelect.module.scss'

export interface Option {
	title: string
	value: string
}

interface InputProps extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
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
				className={cn(styles.input, className)}
				defaultValue={value.title}
				{...props}
			/>
			<div
				className={styles.wrapper}
				onClick={() => setOpened(state => !state)}
			>
				<div className={styles.icon}>
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
