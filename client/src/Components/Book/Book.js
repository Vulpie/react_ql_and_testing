import React, { useState } from 'react'
import HomeButton from '../Partials/HomeButton'
import { gql, useQuery } from '@apollo/client'
import AddBook from './AddBook'

export const GET_AUTHORS = gql`
	{
		authors {
			name
			id
		}
	}
`

const Book = () => {
	const { loading, error, data } = useQuery(GET_AUTHORS)
	const [selectedAuthor, setSelectedAuthor] = useState()

	return (
		<div className='component'>
			<h2 className='component__title'>Book</h2>
			<HomeButton />
			{loading && <p>Loading list of authors ..</p>}
			{error && <p>Error -.-</p>}
			{data && (
				<form className='book-form'>
					<label htmlFor='select_author'>Select the author</label>
					<select
						name='select_author'
						value={selectedAuthor}
						onChange={(e) => setSelectedAuthor(e.target.value)}
					>
						<option value=''></option>
						{data.authors.map(({ name, id }) => (
							<option key={'author_' + name} value={id}>
								{name}
							</option>
						))}
					</select>
				</form>
			)}
			{selectedAuthor ? (
				<AddBook authorId={selectedAuthor} />
			) : (
				<p>Select the author</p>
			)}
		</div>
	)
}

export default Book
