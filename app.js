const express = require('express');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT; // || 4000
const productsRouter = require("./src/router/productsRouter")
const teamRouter = require("./src/router/teamRouter")
const products = require("./src/data/products.json");

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, "/public/")));

app.set("views", "src/views");
app.set("view engine", "ejs");


app.get("/", (req, res) => {
    res.render('index',{products} );
})


// use to Route
app.use("/products", productsRouter)
app.use("/team", teamRouter)



app.listen(PORT, () => {
    debug("Listening on PORT ", PORT);
    console.log("http://localhost:3000/")
})

