// 1. IMPORTACIONES
const express = require('express')
const router =  express.Router()

const proyectoController = require('./../controllers/proyectoController')


// 2. RUTEO

// OBTENCIÓN DE TODOS LOS PROYECTOS
router.get('/', proyectoController.obtenerProyectos)

// CREAR UN PROYECTO NUEVO
router.post('/crear', proyectoController.crearProyecto)

// ACTUALIZAR UN PROYECTO
router.post('/actualizar', proyectoController.actualizarProyecto)

// BORRAR UN PROYECTO
router.post('/eliminar', proyectoController.eliminarProyecto)

 
module.exports = router