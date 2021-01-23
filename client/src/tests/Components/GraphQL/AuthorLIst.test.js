import React from 'react'
import { MockedProvider } from '@apollo/client/testing'
import { act, render } from '@testing-library/react'
import AuthorList, { GET_AUTHORS } from '../../../Components/Lists/AuthorList'
import { BrowserRouter as Router } from 'react-router-dom'

describe('Render AuthorList component without error when:', () => {
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
			result: { data: { authors: [{ name: 'author1', age: 55 }] } },
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
		expect(getByText('Name: author1')).toBeInTheDocument()
		expect(getByText('Age: 55')).toBeInTheDocument()
	})
})
