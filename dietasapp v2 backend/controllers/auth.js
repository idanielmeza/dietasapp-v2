const User = require('../models/user');
const {generarToken} = require('../middlewares/tokens');

const loginSocial = async(req, res) => {
    const user = req.user;
    const provider = req.provider;
    const uid = user.uid;

    try{
        const {name,picture,email} = user;

        const existe = await User.findOne({uid});
        const token = await generarToken(uid);

        if(existe){

            if( existe.nombre !== name && existe.picture !== picture ){
                existe.nombre = name;
                existe.picture = picture;
                existe.email = email;
                await existe.save();
            }
            return res.json({
                ok: true,
                usuario: existe,
                token
            })
        }

        const newUser = new User({
            uid,
            provider,
            nombre: name,
            picture,
            email
        });

        await newUser.save();

        return res.json({
            ok: true,
            usuario: newUser,
            token
        })
    }catch(e){
        console.log(e);
        return res.status(500).json({
            ok: false,
            msg: 'Error inesperado, vuelve a intentarlo'
        });
    }

}

const login = async(req, res) => {

    const uid = req.user;
    try{
        const existe = await User.findOne({uid});
        if(!existe){
            return res.status(404).json({
                ok: false,
                msg: 'No existe el usuario'
            });
        }
        const token = await generarToken(uid);
        return res.json({
            ok: true,
            usuario: existe,
            token
        })
    }catch(e){
        console.log(e);
        return res.status(500).json({
            ok: false,
            msg: 'Error inesperado, vuelve a intentarlo'
        });
    }

}

module.exports = {
    loginSocial,
    login
}