const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const taskSchema = new Schema({

    id : {
        type: Number,
    },
    title : {
        type: String,
        required : true
    },
    description : {
        type:String,
    },
    deadline : {
        type :String,
        required :true
    },
    isCompleted : {
        type: Boolean,
        required:true
    },
    priority : {
        type : String,
    },
    isCollapsed : {
        type : Boolean,
        require:true
    }
});


module.exports = mongoose.model("Task",taskSchema);