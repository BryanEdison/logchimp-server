'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JWT_SECRET = undefined;

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config({ silent: true });

var JWT_SECRET = process.env.JWT_SECRET;
exports.JWT_SECRET = JWT_SECRET;


var defaults = {
  JWT_SECRET: 'DEFAULT_KEY'
};

(0, _keys2.default)(defaults).forEach(function (key) {
  if (!process.env[key] || process.env[key] === defaults[key]) {
    throw new Error('Please enter a custom ' + key + ' in .env on the root directory');
  }
});

exports.default = JWT_SECRET;