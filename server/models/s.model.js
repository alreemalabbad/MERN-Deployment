const mongoose = require('mongoose');
const Examschema = new mongoose.Schema({
    name: { 
        type: String,
        required: [true,'Must have name'],
        minlength: [2, "{PATH} must be at least {MINLENGTH} characters"] 
    },
    img: {
        type: String,
        required: [true,'Must have img'],
        // minlength: [3, "{PATH} must be at least {MINLENGTH} characters"] 
    },
    number: {
        type: Number,
        required: [true,'Must have number'],
        // default: 1,
    },
    phrase: {
        type: String,
        required: [true,'Must have phrase'],
        // default: 1,
    },
    position: {
        type: String,
        required: [true,'Must have position'],
    },
    leg:{
        type: String,
        default: "Yes",
        required: [true,'leg'],
    },
    eye:{
        type: String,
        default: "Yes",
        required: [true,'eye'],
    },
    hand:{
        type: String,
        default: "Yes",
        required: [true,'hand'],
    },
    
},
{ timestamps: true });
module.exports.Exam = mongoose.model('Exam', Examschema);