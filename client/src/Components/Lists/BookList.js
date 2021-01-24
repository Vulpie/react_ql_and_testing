import React from 'react'
import { gql, useQuery } from '@apollo/client'
import HomeButton from '../Partials/HomeButton'
import { Link } from 'react-router-dom'

export const GET_BOOKS = gql`
	{
		books {
			id
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
		<div className='component'>
			<HomeButton />
			<div className='books-containter'>
				{data.books.map(({ id, name, genre, author }, index) => (
					<Link to={`/book/details/${id}`} key={'book_' + index}>
						<div className='book-containter'>
							<div className='book-containter__item'>
								<p className='book-containter__item_header'>
									Title:
								</p>
								<p className='book-containter__item_value'>
									{name}
								</p>
							</div>
							<div className='book-containter__item'>
								<p className='book-containter__item_header'>
									Genre:
								</p>
								<p className='book-containter__item_value'>
									{genre}
								</p>
							</div>
							<div className='book-containter__item'>
								<p className='book-containter__item_header'>
									Author:
								</p>
								<p className='book-containter__item_value'>
									{author.name}
								</p>
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	)
}
