'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.viewUsers = exports.currentUser = exports.generateWorkout = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var generateWorkout = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(root, args, context) {
    var equipment, workoutList, workoutListLength, getRandomWorkout, workout;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            getRandomWorkout = function getRandomWorkout(max) {
              return Math.floor(Math.random() * Math.floor(max));
            };

            equipment = args.input;
            _context.next = 4;
            return Workout.find({ workoutEquipment: equipment });

          case 4:
            workoutList = _context.sent;
            workoutListLength = workoutList.length - 1;
            workout = workoutList[getRandomWorkout(workoutListLength)];
            return _context.abrupt('return', workout);

          case 8:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function generateWorkout(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var currentUser = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(root, args, context) {
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt('return', context.user);

          case 1:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function currentUser(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

var viewUsers = function () {
  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(roots, args, context) {
    var users;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return User.find({});

          case 2:
            users = _context3.sent;
            return _context3.abrupt('return', users);

          case 4:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function viewUsers(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.Promise = global.Promise;

var User = _mongoose2.default.model('User');
var Workout = _mongoose2.default.model('Workout');

exports.generateWorkout = generateWorkout;
exports.currentUser = currentUser;
exports.viewUsers = viewUsers;