const express = require("express");
// recibo las configutraciones de express handlebars
const { create } = require("express-handlebars");
const app = express();
// cambio la extension de los archivos handlebars y especifico parciales
const hbs = create({
  extname: ".hbs",
  partialsDir: ["views/components"],
});
// configuro el motor de planillas
app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");
app.set("views", "./views");
//rutas
app.get("/", (req, res) => {
  const urls = [
    { origin: "https://www.google.com", shortURL: "adsadasdsa" },
    { origin: "https://developer.mozilla.org/en-US/", shortURL: "gfdgfdggd" },
  ];
  res.render("home", { titulo: "Página de inicio", urls });
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.use(express.static(__dirname + "/public"));

app.listen(5000, () => console.log("servidor andando"));
