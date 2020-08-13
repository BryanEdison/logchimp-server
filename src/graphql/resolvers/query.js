import Mongoose from 'mongoose'

Mongoose.Promise = global.Promise

async function currentUser (root, args, context) {
  // if (!context.user) {
  //   throw new Error('Please sign in!')
  // }
  return context.user
}

export {
  currentUser,
}