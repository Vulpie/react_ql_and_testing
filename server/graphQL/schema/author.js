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

const author = {
	type: AuthorType,
	args: {
		id: { type: GraphQLID },
	},
	resolve(parent, args) {},
}

const authors = {
	type: new GraphQLList(AuthorType),
	resolve(parent, args) {},
}

module.exports = { author, authors }
