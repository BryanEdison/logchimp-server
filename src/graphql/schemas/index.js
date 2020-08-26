import { makeExecutableSchema } from 'graphql-tools'
import { typeDefs as User } from './user'
import { typeDefs as Inputs } from './input'
import { typeDefs as Workout } from './workout'



import resolvers from '../resolvers'

const typeDefs = `
scalar Date

type AuthPayload {
  token: String!
  user: User!
}
type Query {
  generateWorkout(input: String): Workout
  currentUser: User
  viewUsers: [User]
}
type Mutation {
  createUser(input: UserInput!): User
  login(input: LoginInput!): AuthPayload
  updateUser(input: UserInput!): User
  addWorkout(input: WorkoutInput): Workout

}
`

const schema = makeExecutableSchema({
  typeDefs: [typeDefs, Inputs, User, Workout],
  resolvers })

export default schema