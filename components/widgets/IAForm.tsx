'use client'

import { Tilt } from 'react-tilt'
import { IAButton, IAInput, Option, IASelect } from '@/components/ui'
import { AiOutlineClose, AiOutlineCloseCircle, AiOutlinePaperClip } from 'react-icons/ai'
import { SubmitHandler, useForm } from 'react-hook-form'
import { DetailedHTMLProps, HTMLAttributes, useRef, useState } from 'react'
import axios from 'axios'
import { useTranslations } from 'use-intl'
import cn from 'classnames'

interface FormProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	hasTitle?: boolean
	isModal?: boolean
	visible?: boolean
	close?: () => void
}

export interface IFormInput {
	name?: String
	email?: String
	phone?: String
	type?: any
	service?: any
	desc?: String
	file?: any
}

export const IAForm = ({ hasTitle = false, isModal = false, visible = false, close }: FormProps) => {
	const t = useTranslations('Form')

	const typeOptions = [
		{ title: t('development'), value: 'development' },
		{ title: t('design'), value: 'design' },
		{ title: t('branding'), value: 'branding' },
		{ title: t('promotion'), value: 'promotion' },
		{ title: t('service'), value: 'service' },
		{ title: t('complex'), value: 'complex' }
	]

	const developmentOptions = [
		{ title: t('corporate'), value: 'corporate' },
		{ title: t('promo'), value: 'promo' },
		{ title: t('landing'), value: 'landing' },
		{ title: t('serviceDev'), value: 'service' },
		{ title: t('ecommerce'), value: 'ecommerce' }
	]

	const deignOptions = [
		{ title: t('designDes'), value: 'design' },
		{ title: t('ui'), value: 'ui' },
		{ title: t('illustrate'), value: 'illustrate' },
		{ title: t('animate'), value: 'animate' },
		{ title: t('video'), value: 'video' }
	]

	const brandingOptions = [
		{ title: t('complexBra'), value: 'complex' },
		{ title: t('logo'), value: 'logo' },
		{ title: t('social'), value: 'social' },
		{ title: t('offline'), value: 'offline' }
	]

	const promotionOptions = [
		{ title: t('socialPro'), value: 'social' },
		{ title: t('contextPro'), value: 'context' },
		{ title: t('seo'), value: 'seo' },
		{ title: t('semantic'), value: 'semantic' }
	]

	const serviceOptions = [
		{ title: t('fast'), value: 'fast' },
		{ title: t('func'), value: 'func' },
		{ title: t('layout'), value: 'layout' },
		{ title: t('content'), value: 'content' },
		{ title: t('test'), value: 'test' },
		{ title: t('socialSer'), value: 'social' },
		{ title: t('text'), value: 'text' }
	]

	const complexOptions = [
		{ title: t('dev'), value: 'dev' },
		{ title: t('brandingCom'), value: 'branding' },
		{ title: t('promotionCom'), value: 'promotion' },
		{ title: t('complexCom'), value: 'complex' },
		{ title: t('all'), value: 'all' }
	]

	const { register, handleSubmit, reset, formState: { isValid, touchedFields } } = useForm<IFormInput>()
	const [loading, setLoading] = useState<boolean>(false)
	const [success, setSuccess] = useState<boolean>(false)
	const [sent, setSent] = useState<boolean>(false)

	const [type, setType] = useState<Option>({ ...typeOptions[0] })
	const [service, setService] = useState<Option>({ ...developmentOptions[0] })
	const [file, setFile] = useState(null)

	const ref = useRef(null)

	const fileChange = (e) => {
		setFile(e.target.files[0])
	}

	const onSubmit: SubmitHandler<IFormInput> = async (form) => {
		setLoading(true)
		setSent(true)

		const formData = new FormData()

		formData.append('name', form.name)
		formData.append('email', form.email)
		formData.append('phone', form.phone)
		formData.append('desc', form.desc)
		formData.append('type', type.title)
		formData.append('service', service.title)
		if (file) formData.append('file', file, file?.originalname)

		try {
			const { data } = await axios.post(`http://localhost:4000/api/order`, formData)
			if (data) setSuccess(true)
		} catch (error) {
			setSuccess(false)
		} finally {
			reset()
			setLoading(false)
		}
	}

	const getServiceOptions = () => {
		switch (type.value) {
			case 'development':
				return developmentOptions
			case 'design':
				return deignOptions
			case 'branding':
				return brandingOptions
			case 'promotion':
				return promotionOptions
			case 'service':
				return serviceOptions
			case 'complex':
				return complexOptions
			default:
				return [{ value: 'choose', title: 'Choose category' }]
		}
	}

	const setSelect = async (value: Option) => {
		await setType(value)

		if (value.value === 'development') setService({ ...developmentOptions[0] })
		if (value.value === 'design') setService({ ...deignOptions[0] })
		if (value.value === 'branding') setService({ ...brandingOptions[0] })
		if (value.value === 'promotion') setService({ ...promotionOptions[0] })
		if (value.value === 'service') setService({ ...serviceOptions[0] })
		if (value.value === 'complex') setService({ ...complexOptions[0] })
	}

	return (
		<div className={cn({
			['w-screen h-screen fixed top-0 left-0 z-50 flex justify-center items-center backdrop-blur-sm overflow-y-auto transition-all duration-500']: isModal,
			['opacity-100 visible']: visible && isModal,
			['opacity-0 invisible']: !visible && isModal
		})}>
			<div className={cn('flex flex-col justify-start', {
				['w-1/2']: isModal,
				['w-full']: !isModal
			})}>
				<Tilt
					options={{
						max: 15,
						speed: 1000
					}}
					className="transition-all duration-500 ease-in"
				>
					{hasTitle && <h3 className="text-2xl font-bold">{t('question')}</h3>}
					<form
						className="flex flex-col mt-[10rem] px-[5rem] py-[8rem] mb-[10rem] bg-gray rounded-[2.5rem] w-full gap-[7rem] min-h-[67rem]"
						onSubmit={handleSubmit(onSubmit)}
					>
						{!hasTitle &&
							<div className="w-full flex justify-end -mt-[3rem]">
								<AiOutlineClose className="cursor-pointer text-xl hover:text-primary transition-all duration-500" onClick={close} />
							</div>
						}
						{!sent && !loading &&
							<>
								<IAInput
									register={{ ...register('name') }}
									placeholder={t('name')}
								/>
								<div className="flex justify-between gap-[3.5rem]">
									<div className="relative w-full">
										<IAInput
											type="email"
											placeholder={t('email')}
											register={{
												...register('email', {
													required: true,
													pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
												})
											}}
										/>
										<div className="absolute top-[5rem] left-0 text-primary text-s font-light">
											{!isValid && touchedFields.email &&
												<span>{t('emailError')}</span>
											}
										</div>
									</div>
									<IAInput
										type="phone"
										placeholder={t('phone')}
										register={{
											...register('phone')
										}}
									/>
								</div>
								<div className="flex justify-between gap-[3.5rem]">
									<IASelect
										options={typeOptions}
										value={type}
										setValue={setSelect}
									/>
									<IASelect
										options={getServiceOptions()}
										value={service}
										setValue={setService}
									/>
								</div>
								<IAInput placeholder={t('details')}
								       register={{ ...register('desc') }}/>
								<div className="flex justify-between gap-[3.5rem] flex-wrap">
									<div
										className="flex items-center cursor-pointer hover:text-primary transition-all duration-500 relative"
										onClick={() => ref.current.click()}>
										{!file &&
											<>
												<input type="file" onChange={fileChange} ref={ref} multiple className="invisible absolute"/>
												<AiOutlinePaperClip className="text-l"/>
												<div className="ml-[1.5rem] text-l font-light">{t('attachment')}</div>
											</>
										}
										{file &&
											<div className="flex items-center">
												<span className="text-l font-light">{file.name}</span>
												<AiOutlineCloseCircle className="ml-[1rem] text-l" onClick={() => setFile(null)}/>
											</div>
										}
									</div>
									<IAButton size="l" type="submit">{t('button')}</IAButton>
								</div>
							</>
						}
						{loading &&
							<div className="flex justify-center items-center w-full h-[67rem] text-l">
								<div className="flex items-center">
									<div className="loader"/>
									<div className="ml-[1rem] font-light">{t('sending')}</div>
								</div>
							</div>
						}
						{!loading && success && sent &&
							<div className="flex flex-col gap-[7rem] justify-center items-start w-full h-[67rem] text-l">
								<h3 className="text-xl">{t('weStart')}</h3>
								<span className="font-light">{t('startText')}</span>
							</div>
						}
						{!loading && !success && sent &&
							<div className="flex flex-col gap-[7rem] justify-center items-start w-full h-[67rem] text-l">
								<h3 className="text-xl">{t('submitError')}</h3>
								<IAButton size="l" onClick={() => setSent(false)}>{t('resend')}</IAButton>
							</div>
						}
					</form>
				</Tilt>
			</div>
		</div>
	)
}