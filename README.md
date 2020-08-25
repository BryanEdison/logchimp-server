# logchimp-server


query viewUsers {
  viewUsers 
  {
    firstName
    lastName
    email
    workoutEquipment
  }
}


mutation update { updateUser (input: { id: "5f35999cae831b54ed5a79b1", workoutEquipment: ["dumbell", "kettlebell"]}) { workoutEquipment } }

mutation addWorkout { addWorkout (input: {name: "Pushup", sets: 2, reps: 3, workoutEquipment: "floor"}) { workoutEquipment, name, sets } }
