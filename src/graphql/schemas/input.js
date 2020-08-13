export const typeDefs = `

input UserInput {
    id: ID
    firstName: String!
    lastName: String!
    email: String!
    createdAt: Date
    profilePicture: String
    bio: String
}

input LoginInput {
    email: String!
    password: String!
  }
`