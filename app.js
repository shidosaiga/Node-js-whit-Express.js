const express = require('express');
const debug = require('debug')('app');
const morgan = require('morgan');
const part = require('path')

const app = express();
const PORT = process.env.PORT; // || 4000

app.use(morgan('combined'));
app.use(express.static(part.join(__dirname,"/public/")))

app.get("/",(req,res)=>{
    res.send("undefind file");
})

app.listen(PORT, ()=>{
    debug("Listening on PORT ",PORT)
})

