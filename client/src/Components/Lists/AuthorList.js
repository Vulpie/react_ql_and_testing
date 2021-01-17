import React from 'react'
import { gql, useQuery } from '@apollo/client'

const GET_AUTHORS = gql`
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

	return data.authors.map(({ name, age }, index) => (
		<div key={'author_' + index}>
			<p>Name: {name}</p>
			<p>Age: {age}</p>
		</div>
	))
}

export default AuthorList
