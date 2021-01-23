import React from 'react'
import { Link } from 'react-router-dom'

import backArrowIcon from '../../assets/undo.png'

const HomeButton = () => {
	return (
		<Link to='/'>
			<img
				className='home-button'
				alt='Return button'
				src={backArrowIcon}
			/>
		</Link>
	)
}

export default HomeButton
