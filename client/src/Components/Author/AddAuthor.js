import React from 'react'
import { gql, useMutation } from '@apollo/client'

const ADD_AUTHOR = gql`
	mutation AddAuthor($name: String!, $age: Int!) {
		addAuthor(name: $name, age: $age) {
			name
			age
			id
		}
	}
`

const AddAuthor = () => {
	const [addAuthor, { data }] = useMutation(ADD_AUTHOR)

	const handleSubmit = (e) => {
		e.preventDefault()
		const author_name = e.target['author_name'].value
		let author_age = e.target['author_age'].value
		author_age = parseInt(author_age, 10)
		console.table({ author_name, author_age })

		addAuthor({
			variables: { name: author_name, age: author_age },
		})
	}

	if (data) {
		console.log(data)
		return <p>Author created</p>
	}

	return (
		<form onSubmit={(e) => handleSubmit(e)} className='form'>
			<label htmlFor='author_name'>Author name</label>
			<input type='text' name='author_name' />

			<label htmlFor='author_age'>Author age</label>
			<input type='text' name='author_age' />

			<button type='submit'>Add author</button>
		</form>
	)
}

export default AddAuthor
