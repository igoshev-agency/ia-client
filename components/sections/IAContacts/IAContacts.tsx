'use client'

import { IAHeader } from '@/components/layout'
import { IASection } from '@/components/sections'
import { useTranslations } from 'use-intl'
import { SlLocationPin } from 'react-icons/sl'
import {
	BsArrowRight,
	BsBehance, BsDribbble,
	BsFacebook,
	BsGithub,
	BsInstagram,
	BsTelegram,
	BsTelephone,
	BsWhatsapp
} from 'react-icons/bs'
import { FaViber } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { slideIn } from '@/utils/motion'
import Link from 'next/link'
import styles from './IAContacts.module.scss'

const links = {
	whatsApp: 'https://wa.me/4915232151080',
	telegram: 'https://t.me/d_igoshev',
	viber: 'viber://chat?number=4915232151080'
}

export const IAContacts = () => {
	const t = useTranslations('Contacts')

	return (
		<IASection hash='contacts' className="mt-[5rem]">
			<IAHeader text={t('header')} />

			<div className="mt-[5rem] lg:mt-[10rem] flex flex-col mb-[3rem]">
				<div className={styles.wrapper}>
					<div className="flex flex-col gap-[3rem]">
						<div className="flex flex-row items-center">
							<SlLocationPin className="text-m md:text-l" />
							<span className={styles.contact}>Berlin, Cecilienstr. 183</span>
						</div>
						<div className="flex flex-row items-center">
							<BsTelephone className="text-m md:text-l" />
							<span className={styles.contact}>+49 152 32 15 10 80</span>
						</div>
					</div>

					<motion.div
						variants={slideIn('down', 'tween', 0.3, 1)}
						className={styles.messengers}
					>
						<div className="text-[3rem] font-bold text-primary flex items-center">
							<span>{t('contactUs')}</span>
							<BsArrowRight className="ml-[1rem] group-hover:translate-x-5 transition-all duration-500"/>
						</div>
						<div className={styles.messengers_wrapper}>
							<Link href={links.whatsApp} target="_blank">
								<div className="flex items-center font-bold cursor-pointer hover:text-primary transition-all duration-500">
									<BsWhatsapp className={styles.messengers_icon} />
									<span className={styles.messengers_name}>WhatsApp</span>
								</div>
							</Link>
							<Link href={links.telegram} target="_blank">
								<div className="flex items-center font-bold cursor-pointer hover:text-primary transition-all duration-500">
									<BsTelegram className={styles.messengers_icon} />
									<span className={styles.messengers_name}>Telegram</span>
								</div>
							</Link>
							<Link href={links.viber} target="_blank">
								<div className="flex items-center font-bold cursor-pointer hover:text-primary transition-all duration-500">
									<FaViber className={styles.messengers_icon} />
									<span className={styles.messengers_name}>Viber</span>
								</div>
							</Link>
						</div>
					</motion.div>
				</div>

				<div className={styles.footer}>
					<div className={styles.social}>
						<BsInstagram className="cursor-pointer hover:text-primary transition-all duration-500" />
						<BsFacebook className="cursor-pointer hover:text-primary transition-all duration-500" />
						<BsGithub className="cursor-pointer hover:text-primary transition-all duration-500" />
						<BsBehance className="cursor-pointer hover:text-primary transition-all duration-500" />
						<BsDribbble className="cursor-pointer hover:text-primary transition-all duration-500" />
					</div>

					<div className={styles.copyright}>{new Date().getFullYear()} © Igoshev Agency</div>
				</div>
			</div>
		</IASection>
	)
}