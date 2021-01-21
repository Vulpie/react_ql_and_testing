import React, { useState, useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'

import authorIcon from '../../assets/author.svg'
import bookIcon from '../../assets/book.svg'
import booksIcon from '../../assets/books.svg'

const LinkButton = ({ type }) => {
	const [icon, setIcon] = useState('+')

	useLayoutEffect(() => {
		if (type === 'author' || type === 'authorList') {
			setIcon(authorIcon)
		} else if (type === 'book') {
			setIcon(bookIcon)
		} else if (type === 'bookList') {
			setIcon(booksIcon)
		}
	}, [type])
	return (
		<Link to={'/' + type}>
			<div className='link-button'>
				<img
					className='link-button__icon'
					src={icon}
					alt={`${type} icon for men ubutton`}
				/>
				<div className='link-button__text'>{type}</div>
			</div>
		</Link>
	)
}

export default LinkButton
