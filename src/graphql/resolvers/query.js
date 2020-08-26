import Mongoose from 'mongoose'

Mongoose.Promise = global.Promise

const User = Mongoose.model('User')
const Workout = Mongoose.model('Workout')

async function generateWorkout (root, args, context) {
  let equipment = args.input
  let workoutList = await Workout.find({workoutEquipment: equipment})
  let workoutListLength = workoutList.length - 1
  function getRandomWorkout(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  let workout = workoutList[getRandomWorkout(workoutListLength)]
  return workout
}

async function currentUser (root, args, context) {
  // if (!context.user) {
  //   throw new Error('Please sign in!')
  // }
  return context.user
}

async function viewUsers (roots, args, context) {
  let users = await User.find({})
  return users
}

export {
  generateWorkout,
  currentUser,
  viewUsers
}