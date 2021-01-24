import React from 'react'
import { gql, useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom'
import HomeButton from '../Partials/HomeButton'

export const GET_BOOK = gql`
	query Book($id: ID!) {
		book(id: $id) {
			name
			genre
			author {
				name
				id
			}
		}
	}
`

const BookDetails = () => {
	// console.warn('ID:', id)
	let { id } = useParams()
	const { loading, error, data } = useQuery(GET_BOOK, {
		variables: { id },
	})

	if (loading) return <p>Loading list of authors ...</p>
	if (error) return <p>Error -.-</p>
	console.log(data)
	return (
		<div className='component'>
			<HomeButton />
			<h2 className='component__title'>
				"{data && data.book && data.book.name}"
			</h2>
			<div className='details'>
				<div className='details__item'>
					<p className='details__item_header'>Title</p>
					<p className='details__item_value'>
						"{data && data.book && data.book.name}"
					</p>
				</div>
				<div className='details__item'>
					<p className='details__item_header'>Genre</p>
					<p className='details__item_value'>
						{data && data.book && data.book.genre}
					</p>
				</div>
				<div className='details__item'>
					<p className='details__item_header'>Author</p>
					<p className='details__item_value'>
						{data && data.book && data.book.author.name}
					</p>
				</div>
			</div>
		</div>
	)
}

export default BookDetails
