const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const GraphQLRootSchema = require('./graphQL/schema')
require('./db/db')

const app = express()

const port = process.env.PORT || 5000

app.use('/graphql', graphqlHTTP({ schema: GraphQLRootSchema, graphiql: true }))

app.listen(port, () => {
	console.log(`Server started on port ${port}`)
})
