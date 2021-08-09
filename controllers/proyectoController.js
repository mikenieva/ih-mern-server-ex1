const Proyecto = require('./../models/Proyecto')


exports.obtenerProyectos = async (req, res) => {

    try {
        const proyectos = await Proyecto.find({})

        res.json(proyectos)

    } catch (error) {

    }
}

exports.crearProyecto = async (req, res) => {

    const { nombre } = req.body

    try {
        const response = await Proyecto.create({ nombre })
        res.json(response)

    } catch (e) {

    }

}

exports.actualizarProyecto = async (req, res) => {

    const { proyectoId, nombre } = req.body

    try {
        const response = await Proyecto.findByIdAndUpdate(proyectoId, { nombre }, { new: true })

        // HASTA QUE NO EXISTA UN RES.JSON, SE VA A QUEDAR CARGANDO LA PANTALLA
        res.json(response)

    } catch (error) {

    }

}

exports.eliminarProyecto = async (req, res) => {

    const { proyectoId } = req.body

    try {
        const response = await Proyecto.findOneAndRemove({_id: proyectoId})
        console.log(response)
        res.json(response)


    } catch (error) {
        
    }
}



