import {
	faCalendarCheck,
	faCommentsDollar,
	faFileCircleCheck,
	faGavel,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

const Acasa = () => {
	return (
		<>
			<div className='home-page'>
				<Helmet>
					<title>
						Адвокат в Казахстане | Адвокатская контора и несостоятельность
						Рушанова Жайдара
					</title>

					<meta
						name='description'
						content='Наша адвокатская контора по вопросам права и несостоятельности под руководством Рушанова Жайдара предлагает консультации, помощь и представительство в судебных инстанциях и государственных органах по юридическим и вопросам банкротства.'
					/>
				</Helmet>
				{/* ГЛАВНЫЙ ЭКРАН=========== */}
				<div className='container-fluid'>
					<div className='row'>
						<div className='hero-section'>
							<div className='hero-overlay'></div>
							<div className='text-container d-flex flex-column justify-content-start align-items-start pt-6 slide'>
								<div className='text-1 fs-2 pb-3'>Рушанов Жайдар</div>
								<div className='text-2 fs-4'>
									АДВОКАТСКАЯ КОНТОРА И НЕСОСТОЯТЕЛЬНОСТЬ
									<span className='fw-bold'>
										<br></br> Казахстан{' '}
									</span>
								</div>
								<div className='text-3 fst-italic fw-light'>
									"Нет истинного правосудия там, где нет справедливости, а
									справедливость невозможна без истины." -{' '}
									<span>Луций Анней Сенека.</span>
								</div>
							</div>
							{/* горизонтальные кнопки */}
							<div className='horizontal-btn d-none d-md-flex justify-content-center align-items-end w-100 h-100'>
								<div className='col flex-grow-1'>
									<Link to='/contact'>
										<button
											id='horizontal1'
											className='btn btn-outline-dark btn-lg type-button p-4 w-100 fw-bold'
											aria-label='Записаться на прием'
										>
											<span className='p-3'>
												<FontAwesomeIcon icon={faCalendarCheck} size='1x' />
											</span>
											Записаться на прием
										</button>
									</Link>
								</div>
								<div className='col flex-grow-1'>
									<Link to='/contact'>
										<button
											className='btn btn-lg btn-outline-dark type-button p-4 w-100 fw-bold'
											aria-label='Запросить оценку'
										>
											<span className='p-3'>
												<FontAwesomeIcon icon={faFileCircleCheck} size='1x' />
											</span>
											Запросить оценку
										</button>
									</Link>
								</div>
								<div className='col flex-grow-1'>
									<Link to='/informatii-utile'>
										<button
											className='btn btn-lg btn-outline-dark type-button p-4 w-100 fw-bold'
											aria-label='Гонорары'
										>
											<span className='p-3'>
												<FontAwesomeIcon icon={faCommentsDollar} size='1x' />
											</span>
											Гонорары
										</button>
									</Link>
								</div>
							</div>
						</div>
						{/* кнопки для мобильных устройств */}
						<div className='mobile-btn d-md-none d-flex justify-content-between pt-2'>
							<Link to='/contact'>
								<button
									id='small'
									className='btn btn-outline-dark type-button p-2 mb-1 btn-md me-1'
									aria-label='Записаться на прием'
								>
									<span className='p-3'>
										<FontAwesomeIcon icon={faCalendarCheck} size='1x' />
									</span>
									Записаться на прием
								</button>
							</Link>
							<Link to='/contact'>
								<button
									className='btn btn-outline-dark type-button p-2 mb-1 btn-md me-1'
									aria-label='Запросить оценку'
								>
									<span className='p-3'>
										<FontAwesomeIcon icon={faFileCircleCheck} size='1x' />
									</span>
									Запросить оценку
								</button>
							</Link>
							<Link to='/informatii-utile'>
								<button
									className='btn btn-outline-dark type-button p-2 btn-md'
									aria-label='Гонорары'
								>
									<span className='p-3'>
										<FontAwesomeIcon icon={faCommentsDollar} size='1x' />
									</span>
									Гонорары
								</button>
							</Link>
						</div>
					</div>
				</div>

				{/* ВСТРЕЧАЕТЕСЬ С ПРОБЛЕМОЙ========= */}
				<section className='card py-5 px-3 border-0'>
					<div className='row'>
						<div className='col-lg-7'>
							<div className='card-body'>
								<h6 className='guide-text mb-4'>Введение</h6>
								<h5 className='lh-base text-center pb-4'>
									Столкнулись с юридической или финансовой проблемой?
								</h5>

								<p className='text-separator fw-normal'>
									Наша адвокатская контора по вопросам права и несостоятельности
									под руководством Рушанова Жайдара предлагает консультации,
									помощь и представительство в судебных инстанциях и
									государственных органах по юридическим вопросам и вопросам
									банкротства.
									<br />
									<span className='ms-4'></span> Мы хотим помочь вам найти
									наилучшие решения для ваших проблем, сохраняя при этом вашу
									безупречную репутацию в бизнесе.
								</p>
							</div>
						</div>

						<div className='col-lg-5 d-flex align-items-center justify-content-center'>
							<div>
								<img
									src='/assets/law-justice.webp'
									className='intro-img img-fluid d-block rounded-2'
									alt='Молоток судьи, весы правосудия и юридические книги'
									style={{ maxHeight: '300px' }}
								/>
							</div>
						</div>
					</div>
				</section>

				{/* НАША ЭКСПЕРТИЗА========= */}
				<section className='recommendation p-3 bg-image m-3 px-0'>
					<h6 className='guide-text '>НАШ ОПЫТ</h6>
					<div className='container d-flex flex-column justify-content-center align-items-center'>
						<h5 className='h-50 lh-base text-center pb-4'>
							Что нас рекомендует?
						</h5>
					</div>
					<div className='row mt-4 flex-column flex-md-row mb-3'>
						<div className='col col-md-7 order-md-2'>
							<ul className='my-list'>
								<li>Широкий опыт в юридической сфере</li>
								<li>Высокий профессионализм и клиентоориентированный подход</li>
								<li>Активное участие в проектах и их поддержка</li>
								<li>Прямая и прозрачная коммуникация с клиентами</li>
								<li>Приверженность удовлетворению потребностей клиентов</li>
								<li>
									Комплексные решения благодаря сотрудничеству с другими
									профессионалами
								</li>
							</ul>
						</div>
						<div className=' col col-md-5 order-md-2 mt-5'>
							<div
								className='square container d-flex flex-column justify-content-center align-items-center py-5 w-50 border border-4 fw-bold'
								style={{ backgroundColor: 'orange', color: 'black' }}
							>
								<div>
									<FontAwesomeIcon icon={faGavel} size='2x' />
								</div>
								<div>20+</div>
								<div>лет опыта</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	)
}

export default Acasa
