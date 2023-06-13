import { NextResponse } from 'next/server'

const menu = [
	{
		id: 1,
		title: {
			en: 'Projects',
			de: 'Proekte',
			ru: 'Проекты',
		},
		path: '#projects'
	},
	{
		id: 2,
		title: {
			en: 'Services',
			de: 'Leistungen',
			ru: 'Услуги',
		},
		path: '#services'
	},
	{
		id: 3,
		title: {
			en: 'About us',
			de: 'Über uns',
			ru: 'О нас',
		},
		path: '#about'
	},
	{
		id: 4,
		title: {
			en: 'Contacts',
			de: 'Kontakte',
			ru: 'Контакты',
		},
		path: '#contacts'
	}
]

export async function GET(request: Request) {
	return NextResponse.json(menu)
}
