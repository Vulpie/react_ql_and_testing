const graphql = require('graphql')

const { book, books } = require('./schema/book')
const { author, authors } = require('./schema/author')

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

module.exports = new GraphQLSchema({
	query: RootQuery,
})
