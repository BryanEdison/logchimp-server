import { makeExecutableSchema } from 'graphql-tools'
import { typeDefs as User } from './user'

import resolvers from '../resolvers'

const typeDefs = `
scalar Date
type AuthPayload {
  token: String!
  user: User!
}
type Query {
  currentUser: User
}
type Mutation {
  createUser(input: UserInput!): User
}
`

const schema = makeExecutableSchema({
  typeDefs: [typeDefs, User],
  resolvers })

export default schema