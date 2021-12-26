// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

// open a connection to the test database on our locally running instance of MongoDB.
async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');
}


const TaskSchema = new mongoose.Schema({
    id: Number,
    title: String,
    deadline: Date,
    isComplete: Boolean
});

const Task = mongoose.model('Task', TaskSchema);
