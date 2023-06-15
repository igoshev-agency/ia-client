'use client'

import { useTranslations } from 'use-intl'
import { IASection } from '@/components/sections'
import { IAHeader } from '@/components/layout'
import { Project, IAProjectCard } from '@/components/widgets'
import styles from './IAProjects.module.scss'

export const IAProjects = ({ projects }: { projects: Project[] }) => {
	const t = useTranslations('Projects')

	return (
		<IASection hash='projects' className="mt-[10rem] md:mt-[15rem]">
			<IAHeader text={t('header')} />

			<div className={styles.projects}>
				{projects && projects.map((project: Project) => (
					<IAProjectCard key={project.id} project={project} />
				))}
			</div>
		</IASection>
	)
}