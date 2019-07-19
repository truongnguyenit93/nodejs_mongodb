let express = require("express");
let bodyPerser = require("body-parser");
let morgan = require("morgan");

let setupController = require("./api/controllers/setupController");
let todoController = require("./api/controllers/todoController");

let app = express();
let port = process.env.PORT || 3000;

app.use("/assets", express.static(__dirname + "/public"));
app.use(bodyPerser.json());
app.use(bodyPerser.urlencoded({ extended: true }));

app.use(morgan("dev"));
app.set("view engine", "ejs");

todoController(app);
app.get("/", (req, res) => {
    res.render('index');
});

app.listen(port, () => {
    console.log(`App listening on port: ${port}`);
});