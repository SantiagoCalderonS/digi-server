const express = require("express");
const app = express();

const cors = require("cors");
const morgan = require("morgan");

//middleware
app.use(cors())
app.use(express.json())
app.use(morgan("dev"))
app.use("/", (req, res, next )=>{ 
    3>2 ? next(): res.status(404).send("pudrete")
 })

// Rutas
app.get("/", (req, res)=>{
    const {saludo} = req.query
    res.send(`${saludo}`)
})
app.get("/server", (req, res)=>{
    res.send("iniciado")
})

module.exports = app;