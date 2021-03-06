const express = require("express");
const app = express();
const path = require("path");
const port = 3001;

app.use(express.static(path.join(__dirname, 'public')))

app.get("/", (req, res) => res.sendFile(path.resolve(__dirname, 'views', 'home.html')))

app.listen(port, () => console.log(`servidor abierto en el puerto ${port}`))