const mongoose = require('mongoose')

const User = function(connection){
    const UserSchema = new mongoose.Schema({
        
        firstname:  {
            type: String,
            default: ''
        },
        lastname:  {
            type: String,
            default: ''
        },
        username: {
            type: String,
            default: ''
        },
        password:  {
            type: String,
            default: ''
        },
        isSignedIn:{
            type: Boolean,
            default: false
        },
        isAdmin:{
            type: Boolean,
            default: false
        }

    });
    
    connection.model('User', UserSchema)
}

module.exports = User;