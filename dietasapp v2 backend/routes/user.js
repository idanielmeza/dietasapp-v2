const {Router} = require('express');
const {validarToken} = require('../middlewares/tokens');
const {actualizarPersonal, actualizarComida} = require('../controllers/user');

const router = Router();

router.put('/personal',validarToken, actualizarPersonal);

router.put('/comida', validarToken, actualizarComida);

module.exports = router;
