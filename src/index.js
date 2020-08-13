import express from 'express'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import bodyParser from 'body-parser'
import jwt from 'express-jwt'
import JWT_SECRET from './config'
import Mongoose from 'mongoose'
import cors from 'cors'

import './models/db'
import schema from './graphql/schemas'
let User = Mongoose.model('User')

const GRAPHQL_PORT = process.env.PORT || 3000

const graphQLServer = express()

graphQLServer.use(cors())
graphQLServer.use('/graphql', bodyParser.json(),
  jwt({secret: JWT_SECRET, credentialsRequired: false}),
  graphqlExpress(async req => {
    let user = req.user ? await User.findById(req.user._id) : null
    return ({
      schema,
      context: {
        user
      }
    })
  })
)

graphQLServer.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

graphQLServer.listen(GRAPHQL_PORT, () =>
  console.log(
    `GraphiQL is now running on http://localhost:${GRAPHQL_PORT}/graphiql`
  )
)