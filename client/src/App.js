import './style/App.scss'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import BookList from './Components/Lists/BookList'
import Book from './Components/Book/Book'
import Home from './Components/Home'
import Author from './Components/Author/Author'
import AuthorList from './Components/Lists/AuthorList'
import BookDetails from './Components/Book/BookDetails'
import AuthorDetails from './Components/Author/AuthorDetails'

const client = new ApolloClient({
	uri: '/graphql',
	cache: new InMemoryCache(),
})

function App() {
	return (
		<div className='App'>
			<ApolloProvider client={client}>
				<Router>
					<Switch>
						<Route path='/' exact>
							<Home />
						</Route>
						<Route path='/author' exact>
							<Author />
						</Route>
						<Route path='/authorList' exact>
							<AuthorList />
						</Route>
						<Route path='/author/details/:id' exact>
							<AuthorDetails />
						</Route>
						<Route path='/book' exact>
							<Book />
						</Route>
						<Route path='/book/details/:id' exact>
							<BookDetails />
						</Route>
						<Route path='/bookList' exact>
							<BookList />
						</Route>
					</Switch>
				</Router>
			</ApolloProvider>
		</div>
	)
}

export default App
