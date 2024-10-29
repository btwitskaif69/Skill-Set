const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    confirmpassword: { type: String, required: true },
    quote: { type: String },
}, {
    collection: 'users' // Use lowercase 'collection'
});

// Create the model
const User = mongoose.model('UserData', UserSchema);

// Export the model
module.exports = User;
