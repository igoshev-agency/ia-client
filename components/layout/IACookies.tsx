'use client'

import { IAButton } from '@/components/ui'
import { acceptCookies, getAcceptCookies } from '@/app/actions'
import { useEffect, useState } from 'react'
import cn from 'classnames'
import { motion } from 'framer-motion'
import { slideIn } from '@/utils/motion'

export const IACookies = () => {
	const [visible, setVisible] = useState(false)

	useEffect(() => {
		const setVisibility = async () => {
			const hasCookies = await getAcceptCookies()
			if (!hasCookies) setVisible(true)
		}

		setVisibility()
	}, [])


	const accept = () => {
		acceptCookies().then()
		setVisible(false)
	}

	return (
		<>
			{visible &&
				<motion.div
					variants={slideIn('down', 'tween', 0, 1, '200%')}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, amount: 0.1 }}
					className={cn('w-full fixed bottom-0 left-0 z-50 flex justify-center items-center p-[3rem]')}>
					<div
						className="bg-white p-[3rem] rounded-[2.5rem] flex flex-col md:flex-row w-full text-s font-light justify-between items-center">
						<span className="text-gray">Этот сайт использует сторонние технологии отслеживания веб-сайтов, чтобы предлагать свои услуги, постоянно улучшать их и отображать рекламу в соответствии с интересами пользователей.</span>
						<IAButton className="mt-[2rem] md:mt-0 md:ml-[3rem]" onClick={accept}>Принять</IAButton>
					</div>
				</motion.div>
			}
		</>

	)
}