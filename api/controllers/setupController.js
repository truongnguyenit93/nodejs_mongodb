let Todos = require("../models/todoModel");

module.exports = (app) => {
    app.get("/api/setupTodos", (req, res) => {
        // setup seed data
        let seedTodos = [
            {
                text: "learn Node.js",
                isDone: false
            },
            {
                text: "learn Angular.js",
                isDone: false
            },
            {
                text: "write a app complete.",
                isDone: false
            }
        ];
        Todos.create(seedTodos, (err, results) => {
            res.send(results);
        });
    });
};