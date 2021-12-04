/**
 * Connect to the Database with Mongoose here
 */



import mongoose from 'mongoose';


const CONNECTION_URL = 'mongodb+srv://taskManagement:taskManagement123@cluster0.zsxkl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'


const connection = mongoose.connect(CONNECTION_URL, {useNewUrlParser :true, useUnifiedTopology: true});





export default connection;