import { ReactNode } from 'react'
import { Nunito_Sans } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'

import '@/app/globals.scss'
import { Providers } from '@/redux/Providers'
import { IANavbar } from '@/components/layout'

const font = Nunito_Sans({ subsets: ['latin', 'cyrillic'] })

export const metadata = {
	title: 'IGOSHEV AGENCY',
	description: 'Full-Service Digital Agency'
}

export default async function RootLayout({ children, params }: { children: ReactNode, params: any }) {
	let messages

	try {
		messages = (await import(`@/i18n/${params?.language || 'en'}.json`)).default
	} catch (error) {
		console.log(error)
	}

	return (
		<html lang={params?.language || 'en'}>
		<body className={font.className}>
		<NextIntlClientProvider locale={params?.language || 'en'} messages={messages}>
			<Providers>
				<div className="relative">
					<IANavbar language={params?.language || 'en'} />
					{children}
				</div>
			</Providers>
		</NextIntlClientProvider>
		</body>
		</html>
	)
}