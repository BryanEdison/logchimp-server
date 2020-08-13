'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _apolloServerExpress = require('apollo-server-express');

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _expressJwt = require('express-jwt');

var _expressJwt2 = _interopRequireDefault(_expressJwt);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

require('./models/db');

var _schemas = require('./graphql/schemas');

var _schemas2 = _interopRequireDefault(_schemas);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var User = _mongoose2.default.model('User');

var GRAPHQL_PORT = process.env.PORT || 3000;

var graphQLServer = (0, _express2.default)();

graphQLServer.use((0, _cors2.default)());
graphQLServer.use('/graphql', _bodyParser2.default.json(), (0, _expressJwt2.default)({ secret: _config2.default, credentialsRequired: false }), (0, _apolloServerExpress.graphqlExpress)(function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req) {
    var user;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!req.user) {
              _context.next = 6;
              break;
            }

            _context.next = 3;
            return User.findById(req.user._id);

          case 3:
            _context.t0 = _context.sent;
            _context.next = 7;
            break;

          case 6:
            _context.t0 = null;

          case 7:
            user = _context.t0;
            return _context.abrupt('return', {
              schema: _schemas2.default,
              context: {
                user: user
              }
            });

          case 9:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}()));

graphQLServer.use('/graphiql', (0, _apolloServerExpress.graphiqlExpress)({ endpointURL: '/graphql' }));

graphQLServer.listen(GRAPHQL_PORT, function () {
  return console.log('GraphiQL is now running on http://localhost:' + GRAPHQL_PORT + '/graphiql');
});