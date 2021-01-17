const Author = require('../../db/models/author')
const { AuthorType } = require('../types')
const graphql = require('graphql')

const { GraphQLID, GraphQLList } = graphql

const author = {
	type: AuthorType,
	args: {
		id: { type: GraphQLID },
	},
	resolve(parent, args) {
		return Author.findById(args.id)
	},
}

const authors = {
	type: new GraphQLList(AuthorType),
	resolve(parent, args) {
		return Author.find()
	},
}

module.exports = { author, authors }
