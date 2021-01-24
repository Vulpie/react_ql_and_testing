import React from 'react'
import { useParams } from 'react-router-dom'
import HomeButton from '../Partials/HomeButton'
import BookDetails from './BookDetails'

const BookDetailsContainer = () => {
	let { id } = useParams()
	console.log(id)
	return (
		<div className='component'>
			<HomeButton />
			<BookDetails id={id} />
		</div>
	)
}

export default BookDetailsContainer
