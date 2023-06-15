import styles from './IAButton.module.scss'
import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react'
import cn from 'classnames'

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	children: ReactNode
	size?: 's' | 'm' | 'l'
	theme?: 'filled' | 'outline'
	color?: 'primary'
}

export const IAButton = ({ children, size = 'm', theme = 'outline', color = 'primary', className, ...props }: ButtonProps) => {
	return (
		<button className={cn(
			styles.button,
			{
				[styles.filled]: theme === 'filled',
				[styles.s]: size === 's',
				[styles.m]: size === 'm',
				[styles.l]: size === 'l',
			},
			className
		)} { ...props } >
			{children}
		</button>
	)
}