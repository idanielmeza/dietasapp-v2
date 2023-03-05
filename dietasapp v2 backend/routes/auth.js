const {Router} = require('express');
const {loginSocial, login} = require('../controllers/auth');
const {validarTokenFirebase, validarToken} = require('../middlewares/tokens');

const router = Router();

router.get('/', validarToken, login)
router.get('/social',validarTokenFirebase , loginSocial);

module.exports = router;