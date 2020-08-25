"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var typeDefs = exports.typeDefs = "\n\ninput UserInput {\n    id: ID\n    firstName: String\n    lastName: String\n    email: String\n    createdAt: Date\n    profilePicture: String\n    bio: String\n    workoutEquipment: [String]\n}\n\ninput LoginInput {\n    email: String!\n    password: String!\n  }\n\n  input WorkoutInput {\n    id: ID\n    name: String\n    sets: Int\n    reps: Int\n    profilePicture: String\n    workoutEquipment: String\n  }\n";