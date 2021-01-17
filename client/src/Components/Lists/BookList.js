import React from 'react'
import { gql, useQuery } from '@apollo/client'
import HomeButton from '../Partials/HomeButton'

const GET_BOOKS = gql`
	{
		books {
			name
			genre
			author {
				name
			}
		}
	}
`

export default function BookList() {
	const { loading, error, data } = useQuery(GET_BOOKS)
	if (loading) return <p>Loading list of books ...</p>
	if (error) return <p>Error -.-</p>

	return (
		<div>
			<HomeButton />
			{data.books.map(({ name, genre, author }, index) => (
				<div key={'book_' + index}>
					<p>Title: {name}</p>
					<p>Genre: {genre}</p>
					<p>Author: {author.name}</p>
				</div>
			))}
		</div>
	)
}
