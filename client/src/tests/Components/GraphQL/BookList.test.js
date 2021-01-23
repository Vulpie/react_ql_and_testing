import React from 'react'
import { MockedProvider } from '@apollo/client/testing'
import { act, render } from '@testing-library/react'
import BookList, { GET_BOOKS } from '../../../Components/Lists/BookList'
import { BrowserRouter as Router } from 'react-router-dom'

const { GraphQLError } = require('graphql')

describe('Render BookList component', () => {
	test('Loading state', () => {
		const mocks = []
		const { getByText, container } = render(
			<MockedProvider mocks={mocks} addTypename={false}>
				<Router>
					<BookList />
				</Router>
			</MockedProvider>
		)

		expect(getByText('Loading list of books ...')).toBeInTheDocument()
		expect(container).toMatchSnapshot()
	})
	test('Sucess state', async () => {
		const mocks = [
			{
				request: { query: GET_BOOKS },
				result: {
					data: {
						books: [
							{
								name: 'Book1',
								genre: 'Fantasy',
								author: {
									name: 'Author1',
								},
							},
						],
					},
				},
			},
		]
		const { getByText, container } = render(
			<MockedProvider mocks={mocks} addTypename={false}>
				<Router>
					<BookList />
				</Router>
			</MockedProvider>
		)
		await act(async () => {
			await new Promise((resolve) => setTimeout(resolve, 0))
		})
		expect(getByText('Title: Book1')).toBeInTheDocument()
		expect(getByText('Genre: Fantasy')).toBeInTheDocument()
		expect(getByText('Author: Author1')).toBeInTheDocument()
		expect(container).toMatchSnapshot()
	})
	test('Network error', async () => {
		const mocks = [
			{
				request: { query: GET_BOOKS },
				error: new Error('An error occurred'),
			},
		]
		const { getByText, container } = render(
			<MockedProvider mocks={mocks} addTypename={false}>
				<Router>
					<BookList />
				</Router>
			</MockedProvider>
		)

		await act(async () => {
			await new Promise((resolve) => setTimeout(resolve, 0))
		})

		expect(getByText('Error -.-')).toBeInTheDocument()
		expect(container).toMatchSnapshot()
	})
	test('GraphQL error', async () => {
		const mocks = [
			{
				request: { query: GET_BOOKS },
				result: {
					errors: [new GraphQLError('Error!')],
				},
			},
		]
		const { getByText, container } = render(
			<MockedProvider mocks={mocks} addTypename={false}>
				<Router>
					<BookList />
				</Router>
			</MockedProvider>
		)

		await act(async () => {
			await new Promise((resolve) => setTimeout(resolve, 0))
		})

		expect(getByText('Error -.-')).toBeInTheDocument()
		expect(container).toMatchSnapshot()
	})
})
