const Proyecto = require('./../models/Proyecto')


exports.obtenerProyectos = async (req, res) => {
    
    try {
        const proyectos = await Proyecto.find({})

        console.log(proyectos)

        res.json(proyectos)

    } catch (error) {
        
    }


    
}
