import Mongoose from 'mongoose'
import './user'

const env = process.env.ENVIRONMENT || 'DEV'

// SET URI
const dbURI = process.env.mongoURI || 'mongodb://localhost/'

Mongoose.Promise = global.Promise

// Create the database connection
Mongoose.connect(dbURI, {
  dbName: `logchimp_${env}`
})

// CONNECTION EVENTS
// When successfully connected
Mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection open to ' + dbURI)
})

// If the connection throws an error
Mongoose.connection.on('error', function (err) {
  console.log('Mongoose default connection error: ' + err)
})

// When the connection is disconnected
Mongoose.connection.on('disconnected', function () {
  console.log('Mongoose default connection disconnected')
})

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', function () {
  Mongoose.connection.close(function () {
    console.log('Mongoose default connection disconnected through app termination')
    process.exit(0)
  })
})