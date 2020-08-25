'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

require('./user');

require('./workout');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var env = process.env.ENVIRONMENT || 'DEV';

// SET URI
var dbURI = process.env.mongoURI || 'mongodb://localhost/';

_mongoose2.default.Promise = global.Promise;

// Create the database connection
_mongoose2.default.connect(dbURI, {
  dbName: 'logchimp_' + env
});

// CONNECTION EVENTS
// When successfully connected
_mongoose2.default.connection.on('connected', function () {
  console.log('Mongoose default connection open to ' + dbURI);
});

// If the connection throws an error
_mongoose2.default.connection.on('error', function (err) {
  console.log('Mongoose default connection error: ' + err);
});

// When the connection is disconnected
_mongoose2.default.connection.on('disconnected', function () {
  console.log('Mongoose default connection disconnected');
});

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', function () {
  _mongoose2.default.connection.close(function () {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});