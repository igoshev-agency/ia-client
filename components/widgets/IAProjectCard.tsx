'use client'

import { DetailedHTMLProps, HTMLAttributes } from 'react'
import Image from 'next/image'
import { slideIn, staggerContainer } from '@/utils/motion'
import { motion } from 'framer-motion'
import { Tilt } from 'react-tilt'
import Link from 'next/link'
import styles from './IAProjectCard.module.scss'

export interface Project {
	id: number
	title: string
	desc: string,
	tags: string[]
	video?: string
	img?: string,
	link: string,
	path: string
}

interface ProjectCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	project: Project
}

export const IAProjectCard = ({ project }: ProjectCardProps) => {
	return (
		<motion.div
			// @ts-ignore
			variants={staggerContainer()}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, amount: 0.25 }}
			className="xl:w-[45.9%] 2xl:w-[46.6%]"
		>
			<motion.div key={project.id} variants={slideIn('down', 'tween', 0.2, 0.75)}>
				<div className={styles.card}>
					<div className={styles.wrapper}>
						{project.video ? (
							<Tilt
								options={{
									max: 15,
									scale: 1.1,
									speed: 1000
								}}
								className={styles.tilt}
							>
								<Link href={project.link} target="_blank">
									<div className="rounded-[2.5rem]">
										<video
											src={`/videos/${project.video}`}
											// @ts-ignore
											onMouseOver={event => event.target.play()}
											// @ts-ignore
											onMouseOut={event => event.target.pause()}
											loop
											muted
											playsInline
											className="rounded-[2.5rem]"
										>
										</video>
									</div>
								</Link>
							</Tilt>
						) : (
							<Tilt
								options={{
									max: 15,
									scale: 1.1,
									speed: 1000
								}}
								className={styles.tilt}
							>
								<Link href={project.link} target="_blank">
									<div className="overflow-hidden rounded-[2.5rem]">
										<Image
											src={`/images/projects/${project.img}`}
											alt={project.title}
											width={1220}
											height={924}
											className="group-hover/img:scale-150 group-hover/img:rotate-12 transition-all duration-1000 ease-out"
										/>
									</div>
								</Link>
							</Tilt>
						)}
					</div>
					<div className="mt-[3rem] 2xl:mt-[5rem]">
				<span className={styles.title}>
				{project.title}
			</span>
					</div>
					<span className={styles.desc}>{project.desc}</span>
					<div className={styles.tags}>
						{project.tags.map(tag => (
							<span key={tag} className={styles.tag}>#{tag}</span>
						))}
					</div>
				</div>
			</motion.div>
		</motion.div>
	)
}