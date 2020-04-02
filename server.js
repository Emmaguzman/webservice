const express = require("express");
const hbs = require("hbs");

const app = express();

app.use(express.static(__dirname + "/public"));
//XPRESS HBS ENGINE
hbs.registerPartials(__dirname + "/views/parciales/");
require('./hbs/helpers');
app.set("view engine", "hbs");

app.get("/", (req, res) => {
    res.render("home", {
        nombre: 'emmanuel'
    });
});
const port = process.env.PORT || 3000;
app.get("/about", (req, res) => {
    res.render("about");
});
// app.get('/', (req, res) => {
//     let salida = {
//         nombre: 'Emmanuel',
//         edad: 32,
//         url: req.url
//     }
//     res.send(salida)
// });
app.listen(port, () => {
    console.log("escuchando el puertazo 3000");
});