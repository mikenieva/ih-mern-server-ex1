// 1. IMPORTACIONES
const express = require('express')
const router =  express.Router()

const proyectoController = require('./../controllers/proyectoController')


// 2. RUTEO
router.get('/', proyectoController.obtenerProyectos)

 
module.exports = router