// 1 IMPORTACIONES

const express = require('express')
const connectDB = require('./config/db')

const app = express()

// 2 MIDDLEWARES

// VARIABLES DE ENTORNO
require('dotenv').config()

// CONEXIÓN A DB
connectDB()


// 3 RUTEO



// 4 SERVIDOR
app.listen(process.env.PORT, () => {
    console.log(`Conectados al servidor en el puerto ${process.env.PORT}`)
})


