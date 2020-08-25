"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var typeDefs = exports.typeDefs = "\ntype User {\n  _id: ID!\n  firstName: String!\n  lastName: String!\n  email: String!\n  createdAt: Date!\n  profilePicture: String\n  bio: String\n  workoutEquipment: [String]\n}\ninput UserProfileInfo {\n  _id: ID!\n  bio: String\n  profilePicture: String\n  password: String\n}\n";