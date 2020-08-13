import { makeExecutableSchema } from 'graphql-tools'
import { typeDefs as User } from './user'
import { typeDefs as Inputs } from './input'


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
  login(input: LoginInput!): AuthPayload
}
`

const schema = makeExecutableSchema({
  typeDefs: [typeDefs, Inputs, User],
  resolvers })

export default schema