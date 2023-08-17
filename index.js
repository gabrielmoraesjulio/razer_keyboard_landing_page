const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require("dotenv").config()

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.render("index");
})

const port = process.env.PORT || 4040
app.listen(port, () => {
    console.log(`App rodando em http://localhost:${port}`)
    require("./config/db");
});