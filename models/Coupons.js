const mongoose = require('mongoose');
const { Schema } = mongoose;

const couponsSchema = new Schema({
    course: String,
    link: String
});

mongoose.model('coupon', couponsSchema);
