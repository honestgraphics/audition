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
        }
    });

    // UserSchema.methods.generateHash = function(password){
    //     return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
    // };

    // UserSchema.methods.validPassword = function(passwprd){
    //     return bcrypt.compareSync(password, this.password)
    // };


    connection.modal('User', UserSchema)
}