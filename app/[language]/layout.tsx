import { ReactNode } from 'react'
import { Nunito_Sans } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'

import '@/app/globals.scss'
import { Providers } from '@/redux/Providers'
import { IANavbar, MenuItem } from '@/components/layout'
import axios from 'axios'
import { tc } from '@/utils/translateContent'

const font = Nunito_Sans({ subsets: ['latin', 'cyrillic'] })

export const metadata = {
	title: 'IGOSHEV AGENCY',
	description: 'Full-Service Digital Agency'
}

export default async function RootLayout({ children, params }: { children: ReactNode, params: any }) {
	let messages
	let menu = []

	try {
		messages = (await import(`@/i18n/${params?.language || 'en'}.json`)).default

		const { data } = await axios.get(`${process.env.API_FRONT_URL}/menu`)
		menu = data ? tc(data, params?.language || 'en') : []
	} catch (error) {
		console.log(error)
	}

	return (
		<html lang={params?.language || 'en'}>
		<body className={font.className}>
		<NextIntlClientProvider locale={params?.language || 'en'} messages={messages}>
			<Providers>
				<div className="relative">
					<IANavbar language={params?.language || 'en'} menu={menu} />
					{children}
				</div>
			</Providers>
		</NextIntlClientProvider>
		</body>
		</html>
	)
}