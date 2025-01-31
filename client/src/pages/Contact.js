import React from 'react'
import { Helmet } from 'react-helmet'

import {
	faClock,
	faEnvelope,
	faLocationDot,
	faPhone,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ContactForm from '../components/ContactForm'

export const Contact = () => {
	return (
		<div className='contact-page'>
			<Helmet>
				<title>
					Контакты | Адвокат Казахстан | Адвокатская контора и несостоятельность
					Рушанов Жайдар
				</title>

				<meta
					name='description'
					content='Свяжитесь с нами по любому юридическому вопросу, с которым вы столкнулись. Мы предоставляем консультации и представительство в различных областях права. Адрес: Бухарест, График работы: Понедельник - Пятница: 9 - 17, Электронная почта: av_alinamarin@yahoo.com, Телефон: +40769 935 716.'
				/>
			</Helmet>
			<section>
				<h6 className='guide-text ms-3 mt-4'>КОНТАКТЫ</h6>
				{/* Информация для связи============ */}
				<div className='container-lg bg-light my-5 shadow'>
					<div className='contact-info text-center py-5'>
						<div className='row no-gutters'>
							<div className='col-lg-3 col-md-6 col-12 border-end border-1'>
								<div className='contact-inner'>
									<div className='info-i'>
										<span>
											<FontAwesomeIcon
												icon={faLocationDot}
												size='2x'
												className='law-icon pb-3'
											/>
										</span>
									</div>
									<h5>Адрес:</h5>
									<p>Казахстан</p>
								</div>
							</div>
							<div className='col-lg-3 col-md-6 col-12 border-end border-1'>
								<div className='contact-inner'>
									<div className='info-i'>
										<span>
											<FontAwesomeIcon
												icon={faClock}
												size='2x'
												className='law-icon pb-3'
											/>
										</span>
									</div>
									<h5>График работы:</h5>
									<p>Понедельник – Пятница: 9 – 19</p>
								</div>
							</div>
							<div className='col-lg-3 col-md-6 col-12 border-end border-1'>
								<div className='contact-inner'>
									<div className='info-i'>
										<span>
											<FontAwesomeIcon
												icon={faEnvelope}
												size='2x'
												className='law-icon pb-3'
											/>
										</span>
									</div>
									<h5>Электронная почта:</h5>
									<p>rze1973@mail.ru</p>
								</div>
							</div>
							<div className='col-lg-3 col-md-6 col-12'>
								<div className='contact-inner'>
									<div className='info-i'>
										<span>
											<FontAwesomeIcon
												icon={faPhone}
												size='2x'
												className='law-icon pb-3'
											/>
										</span>
									</div>
									<h5>Телефон:</h5>
									<p>+7 705 393 5207</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* Форма обратной связи и текст============ */}
				<div className='container-lg'>
					<div className='row g-5'>
						<div className='col-sm-6 order-sm-first'>
							<div className='contact-text d-flex flex-column'>
								<h5 className='lh-base text-center pb-4'>
									Не стесняйтесь обращаться к нам!
								</h5>
								<p>
									Мы здесь, чтобы помочь вам во всех юридических вопросах, с
									которыми вы столкнулись.
								</p>
								<p>
									Пожалуйста, свяжитесь с нами, заполнив форму ниже, и мы будем
									рады вам помочь.
								</p>
								<p>
									Мы обработаем ваш запрос и вскоре свяжемся с вами для
									получения дополнительных деталей.
								</p>
							</div>
						</div>
						<div className='col-sm-6'>
							<ContactForm />
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Contact
