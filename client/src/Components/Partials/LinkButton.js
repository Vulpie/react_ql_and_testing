import React from 'react'
import { Link } from 'react-router-dom'

const LinkButton = ({ direction }) => {
	return (
		<Link to={'/' + direction}>
			<div classNAme='link-button'>
				<div className='link-button__icon'>+</div>
				<div className='link-button__text'>{direction}</div>
			</div>
		</Link>
	)
}

export default LinkButton
