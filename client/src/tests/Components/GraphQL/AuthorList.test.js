import React from 'react'
import { MockedProvider } from '@apollo/client/testing'
import { act, render } from '@testing-library/react'
import AuthorList, { GET_AUTHORS } from '../../../Components/Lists/AuthorList'
import { BrowserRouter as Router } from 'react-router-dom'

const { GraphQLError } = require('graphql')

describe('Render AuthorList component', () => {
	test('Loading state', () => {
		const mocks = []
		const { getByText, container } = render(
			<MockedProvider mocks={mocks} addTypename={false}>
				<Router>
					<AuthorList />
				</Router>
			</MockedProvider>
		)
		expect(getByText('Loading list of authors ...')).toBeInTheDocument()
		expect(container).toMatchSnapshot()
	})

	test('Success state', async () => {
		const mocks = {
			request: { query: GET_AUTHORS },
			result: {
				data: { authors: [{ name: 'author1', age: 55, id: 1 }] },
			},
		}

		const { getByText, container } = render(
			<MockedProvider mocks={[mocks]} addTypename={false}>
				<Router>
					<AuthorList />
				</Router>
			</MockedProvider>
		)
		await act(async () => {
			await new Promise((resolve) => setTimeout(resolve, 0))
		})
		expect(container).toMatchSnapshot()
		expect(getByText('author1')).toBeInTheDocument()
		expect(getByText('55')).toBeInTheDocument()
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
					<AuthorList />
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
					<AuthorList />
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
