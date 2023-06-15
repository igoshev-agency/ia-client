import { NextResponse } from 'next/server'

const projects = [
	{
		id: 1,
		title: {
			en: 'High Life',
			de: 'High Life',
			ru: 'High Life',
		},
		desc: {
			en: 'Creating a turnkey website for a developer company',
			de: 'Erstellung einer schlüsselfertigen Website des Bauherren',
			ru: 'Создание сайта компании застройщика под ключ',
		},
		tags: {
			en: ['turnkey', 'attracting customers', 'design', 'real estate'],
			de: ['schlüsselfertig', 'akquisition', 'design', 'immobilien'],
			ru: ['под ключ', 'привлечение клиентов', 'дизайн', 'недвижимость'],
		},
		video: 'highlife.mp4',
		img: '',
		link: 'https://highlife.ru',
		path: '/'
	},
	{
		id: 2,
		title: {
			en: 'Revoltage',
			de: 'Revoltage',
			ru: 'Revoltage',
		},
		desc: {
			en: 'Development of a website for an electronic cigarette manufacturer',
			de: 'Entwicklung der Website des Unternehmens an einen Hersteller von elektronischen Zigaretten',
			ru: 'Разработка веб сайта компании производителю электронных сигарет',
		},
		tags: {
			en: ['online store', 'attracting customers', 'design'],
			de: ['online-shop', 'akquisition', 'design'],
			ru: ['интернет магазин', 'привлечение клиентов', 'дизайн'],
		},
		video: '',
		img: 'revoltage.png',
		link: 'https://revoltage.rocks',
		path: '/'
	},
	// {
	// 	id: 3,
	// 	title: {
	// 		en: 'McFit',
	// 		de: 'McFit',
	// 		ru: 'McFit',
	// 	},
	// 	desc: {
	// 		en: 'Разработка рекламной компании по сезонному привлечению клиентов для сети фитнес студий.',
	// 		de: 'Разработка рекламной компании по сезонному привлечению клиентов для сети фитнес студий.',
	// 		ru: 'Разработка рекламной компании по сезонному привлечению клиентов для сети фитнес студий.',
	// 	},
	// 	tags: ['рекламная компания', 'привлечение клиентов', 'дизайн'],
	// 	video: '',
	// 	img: 'mcfit2.png',
	// 	link: 'https://mcfit.com',
	// 	path: '/'
	// },
	{
		id: 6,
		title: {
			en: 'Hepha',
			de: 'Hepha',
			ru: 'Hepha',
		},
		desc: {
			en: 'Development of an online store for the sale of bicycles',
			de: 'Entwicklung eines Online-Shops für den Verkauf von Fahrrädern',
			ru: 'Разработка интернет магазина по продаже велосипедов',
		},
		tags: {
			en: ['online store', 'пturnkey', 'design', 'bike shop'],
			de: ['online-shop', 'schlüsselfertig', 'design', 'fahrrad-shop'],
			ru: ['интернет магазин', 'под ключ', 'дизайн', 'вело магазин'],
		},
		video: '',
		img: 'hepha.png',
		link: 'https://hepha.com',
		path: '/'
	},
	{
		id: 4,
		title: {
			en: 'Nataniel',
			de: 'Nataniel',
			ru: 'Nataniel',
		},
		desc: {
			en: 'Creation of the website of the Center for Aesthetic Medicine',
			de: 'Erstellung der Website des Zentrums für ästhetische Medizin',
			ru: 'Создание сайта центра эстетической медицины',
		},
		tags: {
			en: ['turnkey', 'engaging in social networks', 'beauty and health'],
			de: ['schlüsselfertig', 'einbindung in soziale netzwerke', 'schönheit und gesundheit'],
			ru: ['под ключ', 'привлечение в соцсетях', 'красота и здоровье'],
		},
		video: 'nataniel.mp4',
		img: '',
		link: 'https://highlife.ru',
		path: '/'

	},
	{
		id: 5,
		title: {
			en: 'Waitrose',
			de: 'Waitrose',
			ru: 'Waitrose',
		},
		desc: {
			en: 'Redesign of the website of the food manufacturer',
			de: 'Redesign der Website des Lebensmittelherstellers',
			ru: 'Редизайн сайта компании производителя продуктов питания',
		},
		tags: {
			en: ['corporate website', 'redesign', 'food products'],
			de: ['unternehmenswebsite', 'redesign', 'lebensmittel'],
			ru: ['корпоративный сайт', 'редизайн', 'продукты питания'],
		},
		video: 'waitrose.mp4',
		img: '',
		link: 'https://www.waitrose.com',
		path: '/'
	},
	{
		id: 7,
		title: {
			en: 'Getsafe',
			de: 'Getsafe',
			ru: 'Getsafe',
		},
		desc: {
			en: 'Corporate website and mobile application for an insurance company',
			de: 'Unternehmenswebsite und mobile App für die Versicherungsgesellschaft',
			ru: 'Корпоративный сайт и мобильное приложение для страховой компании',
		},
		tags: {
			en: ['corporate website', 'mobile application', 'design'],
			de: ['unternehmenswebsite', 'mobile anwendung', 'design'],
			ru: ['корпоративный сайт', 'мобильное приложение', 'дизайн'],
		},
		video: '',
		img: 'getsafe.png',
		link: 'https://www.hellogetsafe.com',
		path: '/'
	},
	// {
	// 	id: 8,
	// 	title: {
	// 		en: 'Pharma',
	// 		de: 'Pharma',
	// 		ru: 'Pharma',
	// 	},
	// 	desc: {
	// 		en: 'Создание сайта компании застройщика',
	// 		de: 'Создание сайта компании застройщика',
	// 		ru: 'Создание сайта компании застройщика',
	// 	},
	// 	tags: ['промо сайт', 'привлечение клиентов', 'дизайн'],
	// 	video: 'pharma.mp4',
	// 	img: '',
	// 	link: 'https://highlife.ru',
	// 	path: '/'
	// }
]

export async function GET(request: Request) {
	return NextResponse.json(projects)
}
