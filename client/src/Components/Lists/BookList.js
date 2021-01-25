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
			<div className='grid-container'>
				{data.books.map(({ id, name, genre, author }, index) => (
					<Link to={`/book/details/${id}`} key={'book_' + index}>
						<div className='grid-container__block'>
							<div className='grid-container__block_property'>
								<p className='grid-container__block_property_header'>
									Title:
								</p>
								<p className='grid-container__block_property_value'>
									{name}
								</p>
							</div>
							<div className='grid-container__block_property'>
								<p className='grid-container__block_property_header'>
									Genre:
								</p>
								<p className='grid-container__block_property_value'>
									{genre}
								</p>
							</div>
							<div className='grid-container__block_property'>
								<p className='grid-container__block_property_header'>
									Author:
								</p>
								<p className='grid-container__block_property_value'>
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
