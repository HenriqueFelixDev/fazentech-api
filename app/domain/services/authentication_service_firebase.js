const admin = require('firebase-admin');

const validateJWT = async jwtToken => {
    try {
        await admin.auth().verifyIdToken(jwtToken);
        return true;
    } catch(e) {
        return false;
    }
}

const decodeJWT = async jwtToken => await admin.auth().verifyIdToken(jwtToken);

module.exports = {
    validateJWT,
    decodeJWT
}