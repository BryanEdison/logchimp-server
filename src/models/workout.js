import Mongoose from 'mongoose'

var WorkoutSchema = new Mongoose.Schema({
  name: String,
  sets: Number,
  reps: Number,
  profilePicture: String,
  workoutEquipment: String
})

module.exports = Mongoose.model('Workout', WorkoutSchema)