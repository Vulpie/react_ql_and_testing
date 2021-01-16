const graphql = require('graphql')
const Book = require('../../db/models/book')
const { BookType } = require('../types')

const {
	GraphQLObjectType,
	GraphQLString,
	GraphQLSchema,
	GraphQLID,
	GraphQLInt,
	GraphQLList,
} = graphql

const book = {
	type: BookType,
	args: { id: { type: GraphQLID } },
	resolve(parent, args) {},
}

const books = {
	type: new GraphQLList(BookType),
	resolve(parent, args) {},
}

module.exports = { book, books }
