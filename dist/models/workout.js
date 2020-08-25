'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WorkoutSchema = new _mongoose2.default.Schema({
  name: String,
  sets: Number,
  reps: Number,
  profilePicture: String,
  workoutEquipment: String
});

module.exports = _mongoose2.default.model('Workout', WorkoutSchema);