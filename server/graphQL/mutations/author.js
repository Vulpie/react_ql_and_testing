const Author = require('../../db/models/author')
const { AuthorType } = require('../types')
const graphql = require('graphql')

const { GraphQLString, GraphQLInt, GraphQLNonNull } = graphql

const addAuthor = {
	type: AuthorType,
	args: {
		name: { type: new GraphQLNonNull(GraphQLString) },
		age: { type: new GraphQLNonNull(GraphQLInt) },
	},
	resolve(parent, args) {
		console.table(args)
		let author = new Author({ name: args.name, age: args.age })

		return author.save()
	},
}

module.exports = { addAuthor }
