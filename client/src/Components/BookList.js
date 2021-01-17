import React from 'react'
import { gql, useQuery } from '@apollo/client'

const getBooksQuery = gql`
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
	const { loading, error, data } = useQuery(getBooksQuery)
	if (loading) return <p>LOading...</p>
	if (error) return <p>Error -.-</p>

	return data.books.map(({ name, genre, author }, index) => (
		<div key={'book_' + index}>
			<p>Title: {name}</p>
			<p>Genre: {genre}</p>
			<p>Author: {author.name}</p>
		</div>
	))
}
