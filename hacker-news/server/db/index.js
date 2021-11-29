const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/HackedNews',
{
    useNewUrlParser: true
},
err => {
    if(!err){
        console.log('Connected successfully !')
    }else{
        console.log('Error in connection' + err)
    }
})

require("../models/Story.model");
require("../models/user.model");