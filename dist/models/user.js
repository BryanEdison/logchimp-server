'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserSchema = new _mongoose2.default.Schema({
  id: String,
  firstName: String,
  lastName: String,
  email: String,
  dateJoined: { type: Date, default: Date.now },
  profilePicture: String,
  itemsForSale: String,
  workoutEquipment: Array
});

module.exports = _mongoose2.default.model('User', UserSchema);