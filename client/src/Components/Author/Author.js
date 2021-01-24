import React from 'react'
import HomeButton from '../Partials/HomeButton'
import AddAuthor from './AddAuthor'

const Author = () => {
	return (
		<div className='component'>
			<HomeButton />
			<h2 className='component__title'>Author</h2>

			<AddAuthor />
		</div>
	)
}

export default Author
