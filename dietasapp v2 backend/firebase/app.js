const {initializeApp} = require('firebase-admin/app');
const { credential } = require('firebase-admin')
const {getAuth} = require('firebase-admin/auth');
const serviceAccount = require('../credentials.json');


initializeApp({
    credential: credential.cert(serviceAccount),
    databaseURL: "https://dietaspp-d4dbd.firebaseio.com"
});

const verificarToken = async (token) => {
    const decodedToken = await getAuth().verifyIdToken(token);
    return decodedToken;
}

module.exports = {
    verificarToken
}