export const typeDefs = `

input UserInput {
    id: ID
    firstName: String
    lastName: String
    email: String
    createdAt: Date
    profilePicture: String
    bio: String
    workoutEquipment: [String]
}

input LoginInput {
    email: String!
    password: String!
  }

  input WorkoutInput {
    id: ID
    name: String
    sets: Int
    reps: Int
    profilePicture: String
    workoutEquipment: String
  }
`
