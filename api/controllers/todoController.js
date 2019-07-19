let Todos = require("../models/todoModel");

function getTodo(res) {
    Todos.find( (err, todo) => {
        if (err) {
            return res.status(500).json(err);
        } else {
            return res.json(todo);
        }
    });
}

module.exports = (app) => {
    app.get("/api/todos", (req, res) => {
        getTodo(res);
    });

    app.get("/api/todo/:id", (req, res) => {
        Todos.findById({ _id: req.params.id }, (err, todo) => {
            if (err)  {
                throw err;
            } else {
                res.json(todo);
            }
        })
    });

    /**
     * Create a todo
     */

    app.post("/api/todo", (req, res) => {
       var todo = {
           text: req.body.text,
           isDone: req.body.isDone
       };
       Todos.create(todo, (err, todo) => {
           if (err) {
               throw err;
           } else {
               getTodo(res);
           }
       })
    });

    /**
     * update a todo
     */

    app.put("/api/todo", (req, res) => {
        if (!req.body.id) {
            return res.status(500).send("ID is required");
        } else {
            Todos.update({
                _id: req.body.id
            }, {
                text: req.body.text,
                isDone: req.body.isDone
            }, (err, todo) => {
                if (err) {
                    return res.status(500).json(err);
                } else {
                    getTodo(res);
                }
            })
        }
    });

    /**
     * Delete a todo
     */

    app.delete("/api/todo/:id", (req, res) => {
        Todos.remote({
            _id: req.body.id
        }, (err, todo) => {
            if (err) {
                return res.status(500).json(err);
            } else {
                getTodo(res);
            }
        })
    });
};