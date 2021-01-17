const graphql = require('graphql')
const Book = require('../../db/models/book')
const { BookType } = require('../types')

const { GraphQLString, GraphQLID, GraphQLNonNull } = graphql

const addBook = {
	type: BookType,
	args: {
		name: { type: new GraphQLNonNull(GraphQLString) },
		genre: { type: new GraphQLNonNull(GraphQLString) },
		authorId: { type: new GraphQLNonNull(GraphQLID) },
	},
	resolve(parent, args) {
		console.table(args)
		let book = new Book({
			name: args.name,
			genre: args.genre,
			authorId: args.authorId,
		})
		return book.save()
	},
}

module.exports = { addBook }
