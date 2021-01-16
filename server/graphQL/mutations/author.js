const Author = require('../../db/models/author')
const { AuthorType } = require('../types')
const graphql = require('graphql')

const {
	GraphQLObjectType,
	GraphQLString,
	GraphQLSchema,
	GraphQLID,
	GraphQLInt,
	GraphQLList,
} = graphql

const addAuthor = {
	type: AuthorType,
	args: {
		name: { type: GraphQLString },
		age: { type: GraphQLInt },
	},
	resolve(parent, args) {
		let author = new Author({ name: args.name, age: args.age })

		return author.save()
	},
}

module.exports = { addAuthor }
