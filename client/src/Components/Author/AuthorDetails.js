import React from 'react'
import { gql, useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom'
import HomeButton from '../Partials/HomeButton'

export const GET_AUTHOR = gql`
	query Author($id: ID!) {
		author(id: $id) {
			name
			age
			books {
				name
			}
		}
	}
`

const AuthorDetails = () => {
	let { id } = useParams()
	const { loading, error, data } = useQuery(GET_AUTHOR, { variables: { id } })

	if (loading) return <p>Loading list of authors ...</p>
	if (error) return <p>Error -.-</p>
	return (
		<div className='component'>
			<HomeButton />
			<h2 className='component__title'>
				"{data && data.author && data.author.name}"
			</h2>
			<div className='details'>
				<div className='details__item'>
					<p className='details__item_header'>Name</p>
					<p className='details__item_value'>
						"{data && data.author && data.author.name}"
					</p>
				</div>
				<div className='details__item'>
					<p className='details__item_header'>Age</p>
					<p className='details__item_value'>
						{data && data.author && data.author.age}
					</p>
				</div>
				<ul className='details__list'>
					<li className='details__list_header'>Books</li>
					{data &&
						data.author.books &&
						data.author.books.map(({ name }, index) => (
							<li
								className='details__list_item'
								key={`book_${index}`}
							>
								{name}
							</li>
						))}
				</ul>
			</div>
		</div>
	)
}

export default AuthorDetails
