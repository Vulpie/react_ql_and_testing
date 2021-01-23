import React from 'react'
import { Redirect } from 'react-router-dom'
import { gql, useMutation } from '@apollo/client'

const ADD_BOOK = gql`
	mutation AddBook($name: String!, $genre: String!, $authorId: ID!) {
		addBook(name: $name, genre: $genre, authorId: $authorId) {
			name
			genre
			id
			author {
				id
			}
		}
	}
`

const AddBook = ({ authorId }) => {
	const [addBook, { data }] = useMutation(ADD_BOOK)

	const handleSubmit = (e) => {
		e.preventDefault()
		const book_name = e.target['book_name'].value
		let book_genre = e.target['book_genre'].value
		console.table({ book_name, book_genre })

		if (!book_name || !book_genre) {
			console.warn(`Missing name ${book_name} or genre ${book_genre}`)
			return
		}

		addBook({
			variables: {
				name: book_name,
				genre: book_genre,
				authorId: authorId,
			},
		})
	}
	if (data) {
		console.log(data)
		return (
			<Redirect
				to={{
					pathname: '/book/details',
					search: `?id=${data.addBook.id}&name=${data.addBook.name}&genre=${data.addBook.genre}&authorId=${data.addBook.author.id}`,
				}}
			/>
		)
	}

	return (
		<form onSubmit={(e) => handleSubmit(e)} className='book-form'>
			<label htmlFor='book_name'>Book title</label>
			<input type='text' name='book_name' required />

			<label htmlFor='book_genre'>Book genre</label>
			<input type='text' name='book_genre' required />

			<button type='submit'>Add book</button>
		</form>
	)
}

export default AddBook
