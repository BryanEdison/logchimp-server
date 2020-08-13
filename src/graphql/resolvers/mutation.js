import Mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../../config'

const User = Mongoose.model('User')




async function signup (root, args, context) {
  let { input } = args
  let { email } = input

  email = email.toLowerCase()

  // Verify that we do not have existing user with same email
  const existingUser = await User.findOne({email})

  if (existingUser) {
    throw new Error('User with email already exists!')
  }

  // Hash password and create a new user
  const password = await bcrypt.hash(input.password, 10)
  const user = await User.create({
    ...input,
    email,
    password
  })

  // Send JWT along with the user back to client
  const token = jwt.sign({_id: user._id, email: user.email}, JWT_SECRET)
  context.user = user
  return {
    token,
    user
  }
}

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


async function updateUserProfile (root, args, context) {
  const { input } = args
  if (!context.user) {
    throw new Error('No such user found')
  }

  let { _id, bio, profilePicture, password } = input

  let update = { bio, profilePicture }
  if (password) {
    update['password'] = await bcrypt.hash(password, 10)
  }
  const updatedUser = await User.findByIdAndUpdate({ _id }, update, {new: true})
  context.user = updatedUser
  return context.user
}


async function createUser (root, args, context) {
  const { input } = args

  const user = await User.create({
    ...input,
    id: Mongoose.Types.ObjectId()
  })
  return user
}

export {
  signup,
  createItem,
  updateItem,
  login,
  deleteItem,
  loginWithFacebook,
  updateUserProfile,
  sendMessage,
  createUser
}