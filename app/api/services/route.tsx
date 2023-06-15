import { NextResponse } from 'next/server'

const services = [
	{
		id: 1,
		title: {
			en: 'Landing page',
			de: 'Landing page',
			ru: 'Продающий промо сайт',
		},
		desc: {
			en: 'Website with a high conversion rate, for the promotion of a single product or service',
			de: 'Website mit hoher Conversion, für die Förderung eines einzelnen Produkts oder einer Dienstleistung',
			ru: 'Сайт с высокой конверсией, для продвижение одного продукта или услуги',
		},
		price: {
			en: "$ 499",
			de: "€ 499",
			ru: "39'000 ₽"
		},
		img: 'promo.svg',
		size: 150,
		path: '#'
	},
	{
		id: 2,
		title: {
			en: 'Corporate website',
			de: 'Unternehmens website',
			ru: 'Корпоративный сайт',
		},
		desc: {
			en: 'Website representing your company on the Internet, forming your image',
			de: 'Website, die Ihr Unternehmen im Internet repräsentiert und Ihr Image prägt',
			ru: 'Сайт представляющий вашу компанию в интернете, формирующий ваш имидж',
		},
		price: {
			en: "$ 999",
			de: "€ 999",
			ru: "79'000 ₽"
		},
		img: 'corporate.svg',
		size: 128,
		path: '#'
	},
	{
		id: 3,
		title: {
			en: 'E-commerce',
			de: 'E-commerce',
			ru: 'Интернет магазин',
		},
		desc: {
			en: 'Online store or marketplace for selling your products',
			de: 'Online-Shop oder Marktplatz für den Verkauf Ihrer Produkte',
			ru: 'Интернет магазин или маркетплейс для продажи ваших товаров',
		},
		price: {
			en: "$ 1'499",
			de: "€ 1'499",
			ru: "119'000 ₽"
		},
		img: 'ecommerce.svg',
		size: 125,
		path: '#'
	},
	{
		id: 4,
		title: {
			en: 'Internet portal',
			de: 'Internetportal',
			ru: 'Интернет портал',
		},
		desc: {
			en: 'Internet portal or an online service with all the necessary functionality',
			de: 'Internetportal oder ein Online-Service mit allen notwendigen Funktionen',
			ru: 'Интернет портал или онлайн сервис со всем необходимым функционалом',
		},
		price: {
			en: "$ 1'999",
			de: "€ 1'999",
			ru: "159'000 ₽"
		},
		img: 'portals.svg',
		size: 139,
		path: '#'
	},
	{
		id: 5,
		title: {
			en: 'Mobile application',
			de: 'Mobile Anwendung',
			ru: 'Мобильное приложение',
		},
		desc: {
			en: 'Mobile application for iOS and Android, for the needs of any business',
			de: 'Mobile App für iOS und Android, für die Bedürfnisse jedes Unternehmens',
			ru: 'Мобильное приложение на iOS и Android, для нужд любого бизнеса',
		},
		price: {
			en: "$ 1'999",
			de: "€ 1'999",
			ru: "159'000 ₽"
		},
		img: 'mobile.svg',
		size: 136,
		path: '#'
	},
	{
		id: 6,
		title: {
			en: 'Promotion on the Internet',
			de: 'Förderung im Internet',
			ru: 'Продвижение в интернете',
		},
		desc: {
			en: 'Range of services for online promotion, SEO, contextual advertising, social networks',
			de: 'Dienstleistungen für die Förderung im Netzwerk, SEO, kontextbezogene Werbung, soziale Netzwerke',
			ru: 'Комплекс услуг по продвижению в сети, SEO, контекстная реклама, соцсети',
		},
		price: {
			en: "$ 99",
			de: "€ 99",
			ru: "7'900 ₽"
		},
		img: 'promotion.svg',
		size: 150,
		path: '#'
	},
	{
		id: 7,
		title: {
			en: 'Comprehensive marketing',
			de: 'Umfassendes Marketing',
			ru: 'Комплексный маркетинг',
		},
		desc: {
			en: 'Niche and competitor research, strategy development, market leadership',
			de: 'Nischen- und Wettbewerbsforschung, Strategieentwicklung, Marktführerschaft',
			ru: 'Исследование ниши и конкурентов, составление стратегии, вывод в лидеры рынка',
		},
		price: {
			en: "$ 2'999",
			de: "€ 2'999",
			ru: "239'000 ₽"
		},
		img: 'marketing.svg',
		size: 140,
		path: '#'
	},
	{
		id: 8,
		title: {
			en: 'Service, domain, hosting',
			de: 'Service, Domain, Hosting',
			ru: 'Обслуживание, домен, хостинг',
		},
		desc: {
			en: '24/7 maintenance of your website/application, domain, hosting, security',
			de: 'Wartung Ihrer Website/Anwendung 24/7, Domain, Hosting, Sicherheit',
			ru: 'Обслуживание вашего сайта/приложения 24/7, домен, хостинг, безопасность',
		},
		price: {
			en: "$ 19",
			de: "€ 19",
			ru: "1'590 ₽"
		},
		img: 'hosting.svg',
		size: 135,
		path: '#'
	},
]

export async function GET(request: Request) {
	return NextResponse.json(services)
}
