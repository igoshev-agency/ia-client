'use client'

import { useTranslations } from 'use-intl'
import { IASection } from '@/components/sections/IASection/IASection'
import { IAButton } from '@/components/ui'
// import { EarthCanvas } from '@/components/canvas'

export const IAHero = async () => {
	const t = useTranslations('Hero')

	return (
		<IASection hash='hero' full={true} className="relative h-screen w-screen full">
			<div className="container mx-auto h-full w-full flex justify-between relative ">
				<div className="absolute top-0 left-[3rem] h-screen lg:w-[60%] xl:w-[65%] 2xl:w-[60%] flex flex-col justify-center z-10">
					<h1 className="text-2xl sm:text-2xl lg:text-2xl xl:text-3xl 2xl:text-3xl font-bold">{t('usp')}</h1>
					<div className="flex flex-row justify-start">
						<IAButton size="l" className="mt-[4rem]">{t('button')}</IAButton>
					</div>
				</div>

				<div className="flex justify-center lg:justify-end items-center h-full w-full">
					<div className="cursor-pointer sm:w-[50rem] sm:h-[50rem] md:w-[70rem] md:h-[70rem] mr-[.1rem] sm:mr-[5rem] lg:mr-[.1rem] lg:w-[55rem] lg:h-[55rem] xl:w-[70rem] xl:h-[70rem] 2xl:h-[80rem] 2xl:w-[80rem] -mr-[7rem]">
						{/*<EarthCanvas />*/}
					</div>
				</div>
			</div>
			{/*<video*/}
			{/*	src={`/videos/stars.mov`}*/}
			{/*	loop*/}
			{/*	muted*/}
			{/*	autoPlay*/}
			{/*	className="w-screen h-screen absolute top-0 left-0 -z-10 object-cover"*/}
			{/*/>*/}
		</IASection>
	)
}