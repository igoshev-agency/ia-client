import axios from 'axios'
import { IAHero } from '@/components/sections/IAHero/IAHero'
import { IAProjects, IAServices } from '@/components/sections'
import { Project, Service } from '@/components/widgets'
import { tc } from '@/utils/translateContent'

export default async function Home({ params }: any) {
	let services: Service[] = []
	let projects: Project[] = []
	// let info: Info[]

	try {
		const res1 = await axios.get(`${process.env.API_FRONT_URL}/services`)
		services = res1?.data ? tc(res1.data, params?.language || 'en') : []

		const res2 = await axios.get(`${process.env.API_FRONT_URL}/projects`)
		projects = res2?.data ? tc(res2.data, params?.language || 'en') : []
		//
		// const res3 = await axios.get(`${process.env.API_FRONT_URL}/info`)
		// info = res3?.data ? tc(res3.data, params?.language || 'en') : []
	} catch (error) {
		console.log(error)
	}

	return (
		<main>
			<IAHero />
			<IAServices services={services} />
			<IAProjects projects={projects} />
		</main>
	)
}
