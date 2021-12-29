const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const taskSchema = new Schema({

    id : {
        type: Number,
        required : true
    },
    title : {
        type: String,
        required : true
    },
    deadline : {
        type :Date,
        required :true
    },
    isCompleted : {
        type: Boolean,
        required:true
    }

});


module.exports = mongoose.model("Task",taskSchema);