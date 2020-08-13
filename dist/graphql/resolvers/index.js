'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var _language = require('graphql/language');

var _mutation = require('./mutation');

var Mutation = _interopRequireWildcard(_mutation);

var _query = require('./query');

var Query = _interopRequireWildcard(_query);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// Custom Date Scalar resolver

var DateScalarType = new _graphql.GraphQLScalarType({
  name: 'Date',
  description: 'Date custom scalar type',
  parseValue: function parseValue(value) {
    return new Date(value); // value from the client
  },
  serialize: function serialize(value) {
    return value.getTime(); // value sent to the client
  },
  parseLiteral: function parseLiteral(ast) {
    if (ast.kind === _language.Kind.INT) {
      return parseInt(ast.value, 10); // ast value is always in string format
    }
    return null;
  }
});

var rootResolvers = {
  Mutation: Mutation,
  Query: Query,
  Date: DateScalarType
};

var resolvers = [rootResolvers];

exports.default = resolvers;