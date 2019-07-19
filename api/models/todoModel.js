let mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/todos", { useNewUrlParser: true });

let Schema = mongoose.Schema;

let todoSchema = new Schema({
    text: String,
    isDone: Boolean
});

let todos = mongoose.model("todos", todoSchema);

module.exports = todos;