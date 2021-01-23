import React from 'react'
import { MockedProvider } from '@apollo/client/testing'
import { act, render } from '@testing-library/react'
import Book, { GET_AUTHORS } from '../../../Components/Book/Book'
import { BrowserRouter as Router } from 'react-router-dom'

const { GraphQLError } = require('graphql')

describe('Render book component', () => {
	test('Loading state', () => {
		const mocks = []
		const { getByText, container } = render(
			<MockedProvider mocks={mocks} addTypename={false}>
				<Router>
					<Book />
				</Router>
			</MockedProvider>
		)
		expect(getByText('Loading list of authors ..')).toBeInTheDocument()
		expect(container).toMatchSnapshot()
	})

	test('Success state', async () => {
		const mocks = [
			{
				request: { query: GET_AUTHORS },
				result: { data: { authors: [{ name: 'author1', id: 1 }] } },
			},
		]
		const { getByText, container } = render(
			<MockedProvider mocks={mocks} addTypename={false}>
				<Router>
					<Book />
				</Router>
			</MockedProvider>
		)
		await act(async () => {
			await new Promise((resolve) => setTimeout(resolve, 0))
		})

		expect(container).toMatchSnapshot()
		expect(getByText('Select the author')).toBeInTheDocument()
	})

	test('Network error', async () => {
		const mocks = [
			{
				request: { query: GET_AUTHORS },
				error: new Error('An error occurred'),
			},
		]
		const { getByText, container } = render(
			<MockedProvider mocks={mocks} addTypename={false}>
				<Router>
					<Book />
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
				request: { query: GET_AUTHORS },
				result: {
					errors: [new GraphQLError('Error!')],
				},
			},
		]
		const { getByText, container } = render(
			<MockedProvider mocks={mocks} addTypename={false}>
				<Router>
					<Book />
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
