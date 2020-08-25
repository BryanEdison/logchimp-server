import Mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../../config'

const User = Mongoose.model('User')
const Workout = Mongoose.model('Workout')



async function login (root, args, context) {
  const { input } = args
  let { email, password } = input
  email = email.toLowerCase()
  // Try to find user with given email
  const user = await User.findOne({email})
  if (!user) {
    throw new Error('No such user found')
  }

  // Verify that password is correct
  const valid = await bcrypt.compare(password, user.password)
  if (!valid) {
    throw new Error('Invalid password')
  }

  // Send JWT along with the user back to client
  const token = jwt.sign({_id: user._id, email: user.email}, JWT_SECRET)
  context.user = user
  return {
    token,
    user
  }
}



async function createUser (root, args, context) {
  const { input } = args
  const user = await User.create({
    ...input,
    id: Mongoose.Types.ObjectId()
  })
  return user
}

async function updateUser (roots, args, context) {
  const { input } = args
  const user = await User.findByIdAndUpdate(input.id, { ...input },{ new: true })
  console.log(user, input)
  return user
}

async function addWorkout (roots, args, context) {
  const { input } = args
  const workout = await Workout.create({
    ...input,
    id: Mongoose.Types.ObjectId()
  })
  return workout
}



export {
  login,
  addWorkout,
  createUser,
  updateUser
}