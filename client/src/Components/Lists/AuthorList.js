import React from 'react'
import { gql, useQuery } from '@apollo/client'
import HomeButton from '../Partials/HomeButton'

export const GET_AUTHORS = gql`
	{
		authors {
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
					data.authors.map(({ name, age }, index) => (
						<div
							key={'author_' + index}
							className='grid-container__block'
						>
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
					))}
			</div>
		</div>
	)
}

export default AuthorList
