const mongoose = require('mongoose');

const { Schema } = mongoose;


const PhSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    img: {
        data: Buffer,
        contentType: String
    }
  });

const Ph = mongoose.model('ph', PhSchema);
Ph.createIndexes();
module.exports = Ph;