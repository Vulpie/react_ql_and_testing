import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { gql, useQuery } from '@apollo/client'
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
	const { id } = useParams()
	const { loading, error, data } = useQuery(GET_BOOK, {
		variables: { id },
	})

	if (loading) return <p>Loading list of authors ...</p>
	if (error) return <p>Error -.-</p>

	return (
		<div className='component'>
			<HomeButton />
			<h2 className='component__title'>"{data.book.name}"</h2>

			<div className='book-details'>
				<div className='book-details__item'>
					<p className='book-details__item_header'>Title</p>
					<p className='book-details__item_value'>{data.book.name}</p>
				</div>
				<div className='book-details__item'>
					<p className='book-details__item_header'>Genre</p>
					<p className='book-details__item_value'>
						{data.book.genre}
					</p>
				</div>
				<div className='book-details__item'>
					<p className='book-details__item_header'>Author</p>
					<p className='book-details__item_value'>
						{data.book.author.name}
					</p>
				</div>
			</div>
		</div>
	)
}

export default BookDetails
