'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createUser = exports.login = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var login = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(root, args, context) {
    var input, email, password, user, valid, token;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            input = args.input;
            email = input.email, password = input.password;

            email = email.toLowerCase();
            // Try to find user with given email
            _context.next = 5;
            return User.findOne({ email: email });

          case 5:
            user = _context.sent;

            if (user) {
              _context.next = 8;
              break;
            }

            throw new Error('No such user found');

          case 8:
            _context.next = 10;
            return _bcryptjs2.default.compare(password, user.password);

          case 10:
            valid = _context.sent;

            if (valid) {
              _context.next = 13;
              break;
            }

            throw new Error('Invalid password');

          case 13:

            // Send JWT along with the user back to client
            token = _jsonwebtoken2.default.sign({ _id: user._id, email: user.email }, _config.JWT_SECRET);

            context.user = user;
            return _context.abrupt('return', {
              token: token,
              user: user
            });

          case 16:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function login(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var createUser = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(root, args, context) {
    var input, user;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            input = args.input;
            _context2.next = 3;
            return User.create((0, _extends3.default)({}, input, {
              id: _mongoose2.default.Types.ObjectId()
            }));

          case 3:
            user = _context2.sent;
            return _context2.abrupt('return', user);

          case 5:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function createUser(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bcryptjs = require('bcryptjs');

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _config = require('../../config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var User = _mongoose2.default.model('User');

exports.login = login;
exports.createUser = createUser;