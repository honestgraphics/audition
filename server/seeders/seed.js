const mongoose = require('mongoose')
const connectionString = process.env.MONGODB_URI || 'mongodb://localhost/audition' 
const connection = mongoose.createConnection(connectionString)
const models = require('../models')(connection)

models.model('User').create([
    {
        firstname: 'Waleed',
        lastname: 'Hamza',
        email: 'admin@test.com',
        password: 'password',
        isSignedIn: false
    }, 
    {
        firstname: 'Tony',
        lastname: 'Hill',
        email: 'admin@test.com',
        password: 'password',
        isSignedIn: false
    },
    {
        firstname: 'Jeannie',
        lastname: 'Rose',
        email: 'admin@test.com',
        password: 'password',
        isSignedIn: false
    },
    {
        firstname: 'John',
        lastname: 'Woltz',
        email: 'admin@test.com',
        password: 'password',
        isSignedIn: false
    },
]).then(data=>{
    console.log('Users created!')
})
.catch(err=>{
    console.log(err)
})