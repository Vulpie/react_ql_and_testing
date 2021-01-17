const graphql = require('graphql')
const Book = require('../../db/models/book')
const { BookType } = require('../types')

const { GraphQLID, GraphQLList } = graphql

const book = {
	type: BookType,
	args: { id: { type: GraphQLID } },
	resolve(parent, args) {
		return Book.findById(args.id)
	},
}

const books = {
	type: new GraphQLList(BookType),
	resolve(parent, args) {
		return Book.find()
	},
}

module.exports = { book, books }
