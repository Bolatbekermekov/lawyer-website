import {
	faBriefcase,
	faGavel,
	faPeopleLine,
	faScaleBalanced,
	faScroll,
	faTruck,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Helmet } from 'react-helmet'

const Avocatura = () => {
	return (
		<>
			<div className='avocatura'>
				<Helmet>
					<title>
						Юридические услуги | Адвокат Казахстан | Адвокатская контора и
						несостоятельность Рушанов Жайдар
					</title>

					<meta
						name='description'
						content='Мы предлагаем юридические консультации и специализированную помощь в различных сферах, включая гражданское право, уголовное право, исполнительное производство, семейное право, трудовое право, коммерческое и корпоративное право.'
					/>
				</Helmet>
				<div>
					<h6 className='guide-text ms-3 mt-4'>ЮРИДИЧЕСКИЕ УСЛУГИ</h6>
					<div className='pt-4 text-center'>
						<h5 className='fw-bold text-center pb-1'>
							Полный спектр юридических услуг
						</h5>
						<h6 className='fw-bold subtitle lh-lg text-center px-5 pb-4'>
							Мы предоставляем юридические консультации и специализированную
							помощь в различных областях права.
						</h6>
					</div>
					<div className='row g-5 px-5 pt-4 '>
						<div className='col-lg-4 col-md-6 col-sm-12'>
							<div className='card h-100'>
								<div class='civil card-img-top'>
									<div class='overlay'></div>
								</div>
								<div className='card-body text-center text-white py-4'>
									<FontAwesomeIcon
										icon={faScaleBalanced}
										size='2x'
										className='law-icon pb-3'
									/>
									<h6 className='card-title pb-2'>ГРАЖДАНСКОЕ ПРАВО</h6>
									<p className='card-text mx-1'>
										Юридические консультации, сопровождение и представительство
										в суде, составление исковых заявлений. Поможем быстро решить
										вашу юридическую проблему.
									</p>
								</div>
							</div>
						</div>
						<div className='col-lg-4 col-md-6 col-sm-12'>
							<div className='card h-100'>
								<div class='criminal card-img-top'>
									<div class='overlay'></div>
								</div>
								<div className='card-body text-center text-white py-4'>
									<FontAwesomeIcon
										icon={faGavel}
										size='2x'
										className='law-icon pb-3'
									/>
									<h6 className='card-title pb-2'>УГОЛОВНОЕ ПРАВО</h6>
									<p className='card-text mx-1'>
										Юридическая поддержка и представительство в
										правоохранительных органах и судах, составление жалоб на
										действия следствия, подготовка ходатайств о реабилитации.
									</p>
								</div>
							</div>
						</div>
						<div className='col-lg-4 col-md-6 col-sm-12'>
							<div className='card h-100'>
								<div class='executare card-img-top'>
									<div class='overlay'></div>
								</div>
								<div className='card-body text-center text-white py-4'>
									<FontAwesomeIcon
										icon={faTruck}
										size='2x'
										className='law-icon pb-3'
									/>
									<h6 className='card-title pb-2'>
										ИСПОЛНИТЕЛЬНОЕ ПРОИЗВОДСТВО
									</h6>
									<p className='card-text mx-1'>
										Помощь в исполнительном производстве, независимо от вашего
										статуса (должник или кредитор). Бездействие в этом вопросе
										может привести к серьезным последствиям.
									</p>
								</div>
							</div>
						</div>

						<div className='col-lg-4 col-md-6 col-sm-12'>
							<div className='card h-100'>
								<div class='family card-img-top'>
									<div class='overlay'></div>
								</div>
								<div className='card-body text-center text-white py-4'>
									<FontAwesomeIcon
										icon={faPeopleLine}
										size='2x'
										className='pb-3 law-icon'
									/>
									<h6 className='card-title pb-2'>
										СЕМЕЙНОЕ ПРАВО - РАЗВОД И РАЗДЕЛ ИМУЩЕСТВА
									</h6>
									<p className='card-text mx-1'>
										Юридическая помощь и представительство в делах о разводе,
										разделе имущества, родительских правах, алиментах,
										определении порядка общения с ребенком.
									</p>
								</div>
							</div>
						</div>
						<div className='col-lg-4 col-md-6 col-sm-12'>
							<div className='card h-100'>
								<div class='labor card-img-top'>
									<div class='overlay'></div>
								</div>
								<div className='card-body text-center text-white py-4'>
									<FontAwesomeIcon
										icon={faBriefcase}
										size='2x'
										className='law-icon pb-3'
									/>
									<h6 className='card-title pb-2'>ТРУДОВОЕ ПРАВО</h6>
									<p className='card-text mx-1'>
										Юридическая помощь в трудовых спорах, обжалование решений об
										увольнении и дисциплинарных взысканий, взыскание
										задолженности по зарплате, правовой анализ трудовых
										отношений.
									</p>
								</div>
							</div>
						</div>
						<div className='col-lg-4 col-md-6 col-sm-12'>
							<div className='card h-100'>
								<div class='business card-img-top'>
									<div class='overlay'></div>
								</div>
								<div className='card-body text-center text-white py-4'>
									<FontAwesomeIcon
										icon={faScroll}
										size='2x'
										className='law-icon pb-3'
									/>
									<h6 className='card-title pb-2'>
										КОММЕРЧЕСКОЕ И КОРПОРАТИВНОЕ ПРАВО
									</h6>
									<p className='card-text mx-1'>
										Регистрация и ликвидация компаний, смена юридического
										адреса, открытие и закрытие филиалов, составление уставных
										документов, протоколов собраний учредителей.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className='container py-4'>
						<p className='more-services py-4'>
							Другие области, в которых мы предоставляем консультации,
							сопровождение и представительство в суде или других
							государственных учреждениях: ВЗЫСКАНИЕ ЗАДОЛЖЕННОСТЕЙ, ПЕНСИИ И
							ДРУГИЕ СОЦИАЛЬНЫЕ ВЫПЛАТЫ, ОБЩЕСТВА СОБСТВЕННИКОВ ЖИЛЬЯ,
							ОБЖАЛОВАНИЕ АДМИНИСТРАТИВНЫХ ШТРАФОВ, ВОЗМЕЩЕНИЕ УЩЕРБА ПОСЛЕ ДТП,
							составление заявлений и других юридических документов.
						</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default Avocatura
