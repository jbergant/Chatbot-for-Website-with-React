const mongoose = require('mongoose');
const { Schema } = mongoose;

const registrationSchema = new Schema({
    name: String,
    address: String,
    phone: String,
    email: String,
    registerDate: Date
});

mongoose.model('registration', registrationSchema);
