const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
}, {
    collection: 'users' // Ensure collection is lowercase
});

const User = mongoose.model('UserData', UserSchema);

module.exports = User;
