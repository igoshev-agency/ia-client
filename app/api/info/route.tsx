import { NextResponse } from 'next/server'

const info = [
	{
		id: 1,
		title: {
			en: 'on the market since:',
			de: 'auf dem markt seit:',
			ru: 'на рынке с:',
		},
		value: 2015,
		text: {
			en: '',
			de: '',
			ru: 'года',
		},
	},
	{
		id: 2,
		title: {
			en: 'offices in:',
			de: 'niederlassungen in:',
			ru: 'офисы в:',
		},
		value: 3,
		text: {
			en: 'countries',
			de: 'ländern',
			ru: 'странах',
		},
	},
	{
		id: 3,
		title: {
			en: 'realised:',
			de: 'realisiert:',
			ru: 'реализовано:',
		},
		value: 246,
		text: {
			en: 'projects',
			de: 'projekte',
			ru: 'проектов',
		},
	},
	{
		id: 4,
		title: {
			en: 'team of:',
			de: 'team von:',
			ru: 'команда:',
		},
		value: 27,
		text: {
			en: 'employees',
			de: 'mitarbeitern',
			ru: 'сотрудников',
		},
	},
]

export async function GET(request: Request) {
	return NextResponse.json(info)
}
