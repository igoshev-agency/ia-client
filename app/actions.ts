'use server'

import { cookies } from 'next/headers'

export async function acceptCookies() {
	const cookieStore = cookies()

	cookieStore.set('cookies', 'true')
}

export async function getAcceptCookies() {
	const cookieStore = cookies()

	return cookieStore.get('cookies')
}

export async function setLang(lang: string) {
	const cookieStore = cookies()

	cookieStore.set('NEXT_LOCALE', lang)
}

export async function getLang() {
	const cookieStore = cookies()

	return cookieStore.get('NEXT_LOCALE')
}