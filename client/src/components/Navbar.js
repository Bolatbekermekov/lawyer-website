import React from 'react'
import { NavLink } from 'react-router-dom'
import TopBanner from '../components/TopBanner'

const Navbar = () => {
	return (
		<>
			<div className='nav'>
				<TopBanner />
				<nav className='navbar navbar-dark w-100 navbar-expand-md slide-in'>
					<div className='container-xxl'>
						{/* Логотип */}
						<div className='navbar-brand'>
							<span>
								<img
									src='/assets/LOGO2.png'
									className='img-fluid logo-image'
									alt='логотип весов правосудия'
									width='70'
									height='70'
								/>
								<img
									src='/assets/component.png'
									className='img-fluid px-0 logo-text mt-3'
									alt='Рушанов Жайдар кабинет адвокатуры и несостоятельности'
									width='200'
									height='100'
								/>
							</span>
						</div>
						{/* Кнопка переключения мобильного меню */}
						<button
							className='navbar-toggler'
							type='button'
							data-bs-toggle='collapse'
							data-bs-target='#main-nav'
							aria-controls='main-nav'
							aria-expanded='false'
							aria-label='Переключить навигацию'
						>
							<span className='navbar-toggler-icon'></span>
						</button>
						{/* Ссылки навигации */}
						<div
							className='collapse navbar-collapse justify-content-end align-center'
							id='main-nav'
						>
							<ul className='navbar-nav'>
								<li className='nav-item mx-3 mb-2'>
									<NavLink
										to='/'
										style={({ isActive }) => ({
											textDecoration: 'none',
											color: isActive ? '#c2b697' : '#fff',
											borderBottom: isActive ? '1px solid #c2b697' : 'none',
											paddingBottom: isActive ? '5px' : '0',
										})}
									>
										Главная
									</NavLink>
								</li>
								<li className='nav-item mx-3 mb-2'>
									<NavLink
										to='/avocatura'
										style={({ isActive }) => ({
											textDecoration: 'none',
											color: isActive ? '#c2b697' : '#fff',
											borderBottom: isActive ? '1px solid #c2b697' : 'none',
											paddingBottom: isActive ? '5px' : '0',
										})}
									>
										Адвокатура
									</NavLink>
								</li>
								<li className='nav-item mx-3 mb-2'>
									<NavLink
										to='/insolventa'
										style={({ isActive }) => ({
											textDecoration: 'none',
											color: isActive ? '#c2b697' : '#fff',
											borderBottom: isActive ? '1px solid #c2b697' : 'none',
											paddingBottom: isActive ? '5px' : '0',
										})}
									>
										Несостоятельность
									</NavLink>
								</li>
								<li className='nav-item mx-3 mb-2'>
									<NavLink
										to='/informatii-utile'
										style={({ isActive }) => ({
											textDecoration: 'none',
											color: isActive ? '#c2b697' : '#fff',
											borderBottom: isActive ? '1px solid #c2b697' : 'none',
											paddingBottom: isActive ? '5px' : '0',
										})}
									>
										Полезная информация
									</NavLink>
								</li>
								<li className='nav-item mx-3 mb-2'>
									<NavLink
										to='/contact'
										style={({ isActive }) => ({
											textDecoration: 'none',
											color: isActive ? '#c2b697' : '#fff',
											borderBottom: isActive ? '1px solid #c2b697' : 'none',
											paddingBottom: isActive ? '5px' : '0',
										})}
									>
										Контакты
									</NavLink>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
		</>
	)
}

export default Navbar
