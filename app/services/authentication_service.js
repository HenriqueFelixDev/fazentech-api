const jwt = require('jsonwebtoken');
const authenticationRepository = require('../repositories/authentication_repository');

const secret = '7a34bf417c170b14770cab0bbfe884d2';

const generateJWT = (data, expiresIn) => {
    return jwt.sign(data, secret, {expiresIn: expiresIn});
}

const generateRefreshToken = async userId => {
    const refreshToken = generateJWT({uid: userId}, '30d');
    await authenticationRepository.saveRefreshToken(userId, refreshToken);
    return refreshToken;
}

const regenerateRefreshToken = async userId => {
    await authenticationRepository.deleteRefreshToken(userId);
    return await generateRefreshToken(userId);
}

const validateJWT = jwtToken => {
    try {
        jwt.verify(jwtToken, secret);
        return true;
    } catch(e) {
        return false;
    }
}

const validateRefreshToken = async (userId, refreshToken) => {
    const userRefreshToken = await authenticationRepository.getRefreshToken(userId);
    if(userRefreshToken == null || userRefreshToken !== refreshToken) {
        return false;
    }
    return validateJWT(userRefreshToken);
}

const decodeJWT = jwtToken => jwt.decode(jwtToken);

module.exports = {
    generateJWT,
    generateRefreshToken,
    regenerateRefreshToken,
    validateJWT,
    validateRefreshToken,
    decodeJWT
}