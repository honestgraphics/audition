const mongoose = require('mongoose')
const connectionString = process.env.MONGODB_URI || 'mongodb://localhost/audition_users' 
const connection = mongoose.createConnection(connectionString)
const models = require('../models')(connection)

models.model('User').create([
    {
        email: 'admin@test.com',
        firstName: 'Waleed',
        lastName: 'Hamza',
        password: 'password'
    },
    {
        email: 'admin@test.com',
        firstName: 'Toney',
        lastName: 'Hill',
        password: 'password'
    },
    {
        email: 'admin@test.com',
        firstName: 'Jeannie',
        lastName: 'Rose',
        password: 'password'
    },
    {
        email: 'admin@test.com',
        firstName: 'John',
        lastName: 'Wolts',
        password: 'password'
    },
]).then(data=>{
    console.log('Users created!')
})
.catch(err=>{
    console.log(err)
})