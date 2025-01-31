import React from 'react'
import { Helmet } from 'react-helmet'

const Info = () => {
	return (
		<div className='info'>
			<Helmet>
				<title>
					Полезная информация | Адвокат Казахстан | Адвокатская контора и
					несостоятельность Рушанова Жайдара
				</title>

				<meta
					name='description'
					content='Полезная информация о юридической конторе и услугах по банкротству Рушанова Жайдара.'
				/>
			</Helmet>
			<div>
				<h6 className='guide-text ms-3 mt-4'>ПОЛЕЗНАЯ ИНФОРМАЦИЯ</h6>
				<div className='container py-5'>
					<div id='accordion' className='accordion'>
						{/* О нас ========== */}
						<div className='accordion-item'>
							<h2 className='accordion-header' id='headingZero'>
								<button
									id='accordion-btn'
									className='accordion-button collapsed'
									type='button'
									data-bs-toggle='collapse'
									data-bs-target='#collapseZero'
									aria-expanded='false'
									aria-controls='collapseZero'
								>
									О нас
								</button>
							</h2>
							<div
								id='collapseZero'
								className='accordion-collapse collapse'
								aria-labelledby='headingZero'
								data-bs-parent='#accordion'
							>
								<div className='accordion-body'>
									<p>
										Адвокатская практика <b>Рушанова Жайдара</b> основана на
										многолетнем опыте работы в органах правосудия.
									</p>
									<p>
										<b>Опыт работы:</b>
									</p>
									<ul>
										<li>Прокурор по надзору за уголовными делами.</li>
										<li>Председатель двух районных судов.</li>
										<li>
											Адвокатская деятельность с <b>02.02.2011</b> года.
										</li>
									</ul>
									<p>
										Мы оказываем квалифицированную юридическую помощь в
										<b>уголовных, административных и гражданских делах</b>,
										защищая интересы клиентов в судах, правоохранительных
										органах и государственных учреждениях.
									</p>
								</div>
							</div>
						</div>

						{/* Участие в уголовных, гражданских и административных делах ========== */}
						<div className='accordion-item'>
							<h2 className='accordion-header' id='headingCases'>
								<button
									id='accordion-btn'
									className='accordion-button collapsed'
									type='button'
									data-bs-toggle='collapse'
									data-bs-target='#collapseCases'
									aria-expanded='false'
									aria-controls='collapseCases'
								>
									Участие в уголовных, гражданских и административных делах
								</button>
							</h2>
							<div
								id='collapseCases'
								className='accordion-collapse collapse'
								aria-labelledby='headingCases'
								data-bs-parent='#accordion'
							>
								<div className='accordion-body'>
									<p>
										Мы предоставляем квалифицированную помощь в защите прав
										граждан и организаций в судах, правоохранительных органах и
										административных структурах.
									</p>
									<h5>Наши услуги включают:</h5>
									<ul>
										<li>
											<b>Уголовные дела</b> – защита подозреваемых, обвиняемых,
											потерпевших на всех стадиях судебного разбирательства.
										</li>
										<li>
											<b>Гражданские дела</b> – представительство в делах о
											защите прав собственности, семейных спорах, трудовых
											конфликтах, взыскании долгов и др.
										</li>
										<li>
											<b>Административные дела</b> – оспаривание штрафов,
											санкций, действий (или бездействия) должностных лиц,
											защита прав предпринимателей.
										</li>
									</ul>
									<p>
										Мы работаем с частными клиентами, бизнесом и
										государственными учреждениями, обеспечивая профессиональную
										защиту и сопровождение в судах.
									</p>
								</div>
							</div>
						</div>

						{/* Гонорар ========== */}
						<div className='accordion-item'>
							<h2 className='accordion-header' id='headingOne'>
								<button
									id='accordion-btn'
									className='accordion-button collapsed'
									type='button'
									data-bs-toggle='collapse'
									data-bs-target='#collapseOne'
									aria-expanded='false'
									aria-controls='collapseOne'
								>
									Гонорар
								</button>
							</h2>
							<div
								id='collapseOne'
								className='accordion-collapse collapse'
								aria-labelledby='headingOne'
								data-bs-parent='#accordion'
							>
								<div className='accordion-body'>
									<h5>Основные принципы:</h5>
									<p>
										Гонорар адвоката устанавливается в соответствии с
										законодательством и принципами адвокатской этики.
									</p>
									<h5>Гонорары для юридических лиц:</h5>
									<p>Мы предлагаем гибкие схемы оплаты:</p>
									<ul>
										<li>Фиксированный гонорар</li>
										<li>Почасовая оплата</li>
										<li>Гонорар за результат</li>
										<li>Ежемесячное абонентское обслуживание</li>
									</ul>
									<h5>Гонорары для физических лиц:</h5>
									<p>Стоимость юридических услуг определяется на основе:</p>
									<ul>
										<li>Сложности дела</li>
										<li>Срочности оказания услуги</li>
										<li>Финансовых возможностей клиента</li>
										<li>Долгосрочного сотрудничества</li>
									</ul>
								</div>
							</div>
						</div>

						{/* Несостоятельность ========== */}
						<div className='accordion-item'>
							<h2 className='accordion-header' id='headingTwo'>
								<button
									id='accordion-btn'
									className='accordion-button collapsed'
									type='button'
									data-bs-toggle='collapse'
									data-bs-target='#collapseTwo'
									aria-expanded='false'
									aria-controls='collapseTwo'
								>
									Несостоятельность
								</button>
							</h2>
							<div
								id='collapseTwo'
								className='accordion-collapse collapse'
								aria-labelledby='headingTwo'
								data-bs-parent='#accordion'
							>
								<div className='accordion-body'>
									<p>
										Несостоятельность — это ситуация, при которой компания не в
										состоянии выплатить свои долги кредиторам, налоговым органам
										или банкам.
									</p>
									<p>
										Закон определяет её как «состояние имущественного положения
										должника, характеризующееся нехваткой денежных средств для
										погашения обязательных платежей».
									</p>
									<p>
										Однако несостоятельность — это не всегда банкротство. Она
										может быть начата с целью реорганизации бизнеса и
										восстановления финансового состояния. Только если
										реорганизация не удаётся, компания может перейти к процедуре
										банкротства.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Info
