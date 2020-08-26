'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphqlTools = require('graphql-tools');

var _user = require('./user');

var _input = require('./input');

var _workout = require('./workout');

var _resolvers = require('../resolvers');

var _resolvers2 = _interopRequireDefault(_resolvers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var typeDefs = '\nscalar Date\n\ntype AuthPayload {\n  token: String!\n  user: User!\n}\ntype Query {\n  generateWorkout(input: String): Workout\n  currentUser: User\n  viewUsers: [User]\n}\ntype Mutation {\n  createUser(input: UserInput!): User\n  login(input: LoginInput!): AuthPayload\n  updateUser(input: UserInput!): User\n  addWorkout(input: WorkoutInput): Workout\n\n}\n';

var schema = (0, _graphqlTools.makeExecutableSchema)({
  typeDefs: [typeDefs, _input.typeDefs, _user.typeDefs, _workout.typeDefs],
  resolvers: _resolvers2.default });

exports.default = schema;