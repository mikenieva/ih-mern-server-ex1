// 1. IMPORTACIONES
const mongoose = require('mongoose')

// 2. SCHEMA
const proyectoSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    }
)

// 3. MODELO
const Proyecto = mongoose.model('Proyecto', proyectoSchema)

// 4. EXPORTACIÓN
module.exports = Proyecto