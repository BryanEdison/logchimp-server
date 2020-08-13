export const typeDefs = `
type User {
  _id: ID!
  firstName: String!
  lastName: String!
  email: String!
  createdAt: Date!
  profilePicture: String
  bio: String
}
input UserProfileInfo {
  _id: ID!
  bio: String
  profilePicture: String
  password: String
}
`