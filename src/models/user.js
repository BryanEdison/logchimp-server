import Mongoose from 'mongoose'

var UserSchema = new Mongoose.Schema({
  id: String,
  firstName: String,
  lastName: String,
  email: String,
  dateJoined: { type: Date, default: Date.now },
  profilePicture: String,
  itemsForSale: String,
  workoutEquipment: Array
})

module.exports = Mongoose.model('User', UserSchema)