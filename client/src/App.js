import './App.css'
import BookList from './Components/BookList'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import AddAuthor from './Components/AddAuthor'

const client = new ApolloClient({
	uri: '/graphql',
	cache: new InMemoryCache(),
})

function App() {
	return (
		<div className='App'>
			<h1>Reading List</h1>
			<ApolloProvider client={client}>
				<AddAuthor />
				<BookList />
			</ApolloProvider>
		</div>
	)
}

export default App
