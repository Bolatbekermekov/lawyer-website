import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import {
	faEnvelope,
	faLocationDot,
	// faAngleUp,
	faPhone,
} from '@fortawesome/free-solid-svg-icons'

import WhatsAppWidget from 'react-whatsapp-chat-widget'
import 'react-whatsapp-chat-widget/index.css'

const Footer = () => {
	return (
		<>
			<footer>
				<div className='container'>
					<div className='row justify-content-center py-4'>
						{/* Раздел с логотипом */}
						<div className='col-md-4 ps-4 mx-auto text-center'>
							<span className=''>
								<img
									src='/assets/LOGO2.png'
									className='img-fluid logo-image me-1'
									alt='логотип весов правосудия'
									width='50'
									height='50'
								/>
								<img
									src='/assets/component.png'
									className='img-fluid px-0 logo-text'
									alt='Рушанов Жайдар адвокатская контора и несостоятельность'
									width='150'
									height='100'
								/>
							</span>
							<p className='content pt-3 px-3'>
								Наша адвокатская контора по правовым и финансовым вопросам может
								помочь вам справиться с юридическими и экономическими вызовами.
								Мы стремимся защитить ваши интересы и предложить
								персонализированные решения.
							</p>
						</div>

						{/* Раздел контактов */}
						<div className='col-md-4 text-center'>
							<h6 className='pb-2'>Контакты</h6>
							<div className='d-flex align-items-center justify-content-center flex-column'>
								<span className='d-flex align-items-center'>
									<FontAwesomeIcon
										icon={faEnvelope}
										className='contact-icon'
										title='rze1973@mail.ru'
									/>
									<span className='fw-light px-2'>rze1973@mail.ru</span>
								</span>
							</div>
							<div className='mt-3 d-flex align-items-center justify-content-center flex-column'>
								<span className='d-flex align-items-center'>
									<FontAwesomeIcon
										icon={faPhone}
										className='contact-icon'
										title='+7 705 393 5207'
									/>
									<span className='px-2 fw-light'>+7 705 393 5207</span>
								</span>
							</div>
							<div className='mt-3 d-flex align-items-center justify-content-center flex-column'>
								<span className='d-flex align-items-center'>
									<FontAwesomeIcon
										icon={faLocationDot}
										className='contact-icon'
										title='Бухарест'
									/>
									<span className='px-2 fw-light'>Казахстан</span>
								</span>
							</div>
						</div>

						{/* Раздел с графиком работы */}
						<div className='col-md-4 text-center mt-4 mt-md-0'>
							<div>
								<h6 className='pb-2'>График работы</h6>
								<p className='fw-light'>
									Понедельник – Пятница: 9:00 – 19:00 <br /> Суббота –
									Воскресенье: Закрыто
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* WhatsApp-виджет */}
				<div>
					<WhatsAppWidget
						phoneNo='+77053935207'
						position='right'
						iconSize='50'
						iconColor='white'
						iconBgColor='#25D366'
						headerIcon='assets/LOGO2.png'
						headerTxtColor='white'
						headerBgColor='#02182b'
						headerTitle='Адвокатская контора и несостоятельность'
						headerCaption='Онлайн'
						bodyBgColor='#bbb'
						chatPersonName='Поддержка'
						chatMessage={
							<>
								Здравствуйте,
								<br />
								<br /> Как мы можем вам помочь?
							</>
						}
						footerBgColor='#999'
						btnBgColor='#c2b697'
						btnTxtColor='black'
					/>
				</div>

				{/* Авторские права */}
				<div>
					<div className='bg-dark d-flex align-items-center justify-content-center'>
						<hr></hr>
						<p className='copyright mb-0'>©2024 Адвокат Рушанов Жайдар</p>
					</div>
				</div>
			</footer>
		</>
	)
}

export default Footer
