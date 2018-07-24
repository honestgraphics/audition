const mongoose = require('mongoose')
module.exports = function(connection){
    const UserSchema = new mongoose.Schema({
        
        firstname:  {
            type: String,
            default: ''
        },
        lastname:  {
            type: String,
            default: ''
        },
        email: {
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