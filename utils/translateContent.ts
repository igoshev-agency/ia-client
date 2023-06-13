export const tc = (collection: any, lang: string) => {
	const newCollection = [...collection]

	newCollection.forEach(item => {
		if (item.title) item.title = item.title[lang] ? item.title[lang] : item.title['en']
		if (item.text) item.text = item.text[lang] ? item.text[lang] : item.text['en']
		if (item.desc) item.desc = item.desc[lang] ? item.desc[lang] : item.desc['en']
		if (item.price) item.price = item.price[lang] ? item.price[lang] : item.price['en']
		if (item.descArr) item.descArr = item.descArr[lang] ? item.descArr[lang] : item.descArr['en']
		if (item.tags) item.tags = item.tags[lang] ? item.tags[lang] : item.tags['en']
	})

	return newCollection
}
