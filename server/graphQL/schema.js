const graphql = require('graphql')

const { book, books } = require('./queries/book')
const { author, authors } = require('./queries/author')

const { addAuthor } = require('./mutations/author')
const { addBook } = require('./mutations/book')

const { GraphQLObjectType, GraphQLSchema } = graphql

// fields can be object only in Root Query, in other types it can cause problems with the type not defined
const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		book,
		books,
		author,
		authors,
	},
})

const RootMutation = new GraphQLObjectType({
	name: 'Mutation',
	fields: {
		addAuthor,
		addBook,
	},
})

module.exports = new GraphQLSchema({
	query: RootQuery,
	mutation: RootMutation,
})
