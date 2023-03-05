const User = require('../models/user');

const actualizarPersonal = async(req, res) => {

    const uid = req.user.uid;

    try{

        const existe = await User.findOne({uid});

        if(!existe){
            return res.status(404).json({
                ok: false,
                msg: 'No existe el usuario'
            });
        }

        const {edad,estatura,peso,genero,objetivo,actividad} = req.body;

        const personal = {edad,peso,genero,objetivo,actividad,estatura};

        existe.personal = personal;

        await existe.save();

        return res.status(201).json({
            ok: true,
            msg: 'Informacion personal actualizada'
        })


    }catch(e){
        console.log(e);
        return res.status(500).json({
            ok: false,
            msg: 'Error inesperado, vuelve a intentarlo'
        });
    }

}

const actualizarComida = async(req, res) => {

    const uid = req.user.uid;

    try{

        const existe = await User.findOne({uid});

        if(!existe){
            return res.status(404).json({
                ok: false,
                msg: 'No existe el usuario'
            });
        }

        const {comida} = req.body;

        existe.comida = comida;

        await existe.save();

        return res.status(201).json({
            ok: true,
            msg: 'Informacion de comida actualizada'
        })


    }catch(e){
        console.log(e);
        return res.status(500).json({
            ok: false,
            msg: 'Error inesperado, vuelve a intentarlo'
        });
    }

}

module.exports ={
    actualizarPersonal,
    actualizarComida
}