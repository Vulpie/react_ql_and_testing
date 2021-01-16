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

const addBook = {
	type: BookType,
	args: {
		name: { type: GraphQLString },
		genre: { type: GraphQLString },
		authorId: { type: GraphQLID },
	},
	resolve(parent, args) {
		let book = new Book({
			name: args.name,
			genre: args.genre,
			authorId: args.authorId,
		})
		return book.save()
	},
}

module.exports = { addBook }
