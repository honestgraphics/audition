const mongoose = require('mongoose');

module.exports = function (connection){
    const UserSchema = new mongoose.Schema({
        email: {
            type: String,
            default: ''
        },
        password:  {
            type: String,
            default: ''
        },
        firstname:  {
            type: String,
            default: ''
        },
        lastname:  {
            type: String,
            default: ''
        },
        isSignedIn:{
            type: Boolean,
            default: false
        }
    });


    connection.modal('User', UserSchema)
}