import React from 'react'
import { gql, useQuery } from '@apollo/client'
import HomeButton from '../Partials/HomeButton'
import { Link } from 'react-router-dom'

export const GET_AUTHORS = gql`
	{
		authors {
			id
			name
			age
		}
	}
`

const AuthorList = () => {
	const { loading, error, data } = useQuery(GET_AUTHORS)
	if (loading) return <p>Loading list of authors ...</p>
	if (error) return <p>Error -.-</p>

	return (
		<div className='component'>
			<HomeButton />
			<div className='grid-container'>
				{data &&
					data.authors.map(({ id, name, age }, index) => (
						<Link
							to={`/author/details/${id}`}
							key={'author_' + index}
						>
							<div className='grid-container__block'>
								<div className='grid-container__block_property'>
									<p className='grid-container__block_property_header'>
										Name:
									</p>
									<p className='grid-container__block_property_value'>
										{name}
									</p>
								</div>
								<div className='grid-container__block_property'>
									<p className='grid-container__block_property_header'>
										Age:
									</p>
									<p className='grid-container__block_property_value'>
										{age}
									</p>
								</div>
							</div>
						</Link>
					))}
			</div>
		</div>
	)
}

export default AuthorList
