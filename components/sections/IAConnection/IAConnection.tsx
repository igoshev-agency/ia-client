'use client'

import { useTranslations } from 'use-intl'
import { IASection } from '@/components/sections'
import Image from 'next/image'
import { IAForm } from '@/components/widgets'
import { motion } from 'framer-motion'
import { slideIn } from '@/utils/motion'

export const IAConnection = () => {
	const t = useTranslations('Connection')

	return (
		<IASection hash="connection" full={true} className="relative overflow-hidden">
			<div className="mt-[5rem] px-[3rem]">
				<div className="pt-[5rem] md:pt-[10rem] flex justify-between">
					<motion.div
						variants={slideIn('left', 'tween', 0.2, 0.75)}
						className="flex justify-center items-center w-1/2 group"
					>
						<Image
							src="/images/falcon9.png" alt="rocket" width={150} height={700}
							className="-mt-[8rem] -ml-[10rem] group-hover:scale-110 group-hover:rotate-12 transition-all duration-1000"
						/>
					</motion.div>

					<motion.div variants={slideIn('right', 'tween', 0.2, 0.75)} className="w-1/2">
						<IAForm hasTitle/>
					</motion.div>
				</div>
			</div>
			<video
				src={`/videos/stars.mov`}
				loop
				muted
				autoPlay
				className="w-screen h-full absolute top-0 left-0 -z-10"
			/>
			{/*<StarsCanvas/>*/}
		</IASection>
	)
}
