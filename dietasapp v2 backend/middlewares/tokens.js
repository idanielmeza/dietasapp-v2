const {verificarToken} = require('../firebase/app');
const jwt = require('jsonwebtoken');

const validarTokenFirebase = async(req, res, next) => {
    const token = req.header('token');
    const provider = req.header('provider');

    if(!token || !provider) {
        return res.status(401).json({
            ok: false,
            msg: 'No se ha recibido el token'
        });
    }

    try {
        const results = await verificarToken(token);
        req.user = results;
        req.provider = provider;
    } catch (error) {
        console.log(error);

        if(error.code === 'auth/id-token-expired'){
            return res.status(401).json({
                ok: false,
                msg: 'El token expirado',
                error: 'token-expired'
            });
        }

        return res.status(401).json({
            ok: false,
            msg: 'Hubo un error'
        });
    }

    next();

}

const validarToken = async(req, res, next) => {
    const token = req.header('token');

    if(!token) {
        return res.status(401).json({
            ok: false,
            msg: 'No se ha recibido el token'
        });
    }

    try {
        const {uid} = await jwt.verify(token, process.env.SECRETKEY);
        req.user = uid;
    } catch (error) {
        // console.log(error);

        if(error.name === 'TokenExpiredError'){
            return res.status(401).json({
                ok: false,
                msg: 'El token expirado',
                error: 'token-expired'
            });
        }

        return res.status(401).json({
            ok: false,
            msg: 'Hubo un error'
        });
    }

    next();

}

const generarToken = (uid = '')=>{
    return new Promise( (res,rej) =>{

        const payload = {uid};

        jwt.sign(
            payload,
            process.env.SECRETKEY,
            {expiresIn: '48h'},
            (e,token) =>{
                if(e){
                    console.log(e);
                    rej('No se pudo generar el token');
                }else{
                    res(token);
                }
            }
        )

    })
}

module.exports = {
    validarTokenFirebase,
    validarToken,
    generarToken
}