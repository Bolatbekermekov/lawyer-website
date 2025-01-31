import {
	faEnvelope,
	faLocationDot,
	faPhone,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const TopBanner = () => {
	return (
		<div className='banner w-100 py-2'>
			<div className='container'>
				<div className='row d-sm-flex flex-column flex-md-row justify-content-between align-items-center'>
					<div className='col col-md-4 col-sm-12 text-center mb-md-0'>
						<FontAwesomeIcon
							icon={faLocationDot}
							className='banner-icon pe-2'
							size='1x'
						/>
						Казахстан
					</div>
					<div className='col col-md-4 col-sm-12 text-center mb-md-0'>
						<FontAwesomeIcon
							icon={faEnvelope}
							className='banner-icon pe-2'
							size='1x'
						/>
						rze1973@mail.ru
					</div>
					<div className='col col-md-4 col-sm-12 text-center'>
						<FontAwesomeIcon
							icon={faPhone}
							className='banner-icon phone-icon pe-2'
							size='1x'
						/>{' '}
						+7 705 393 5207
					</div>
				</div>
			</div>
		</div>
	)
}

export default TopBanner
