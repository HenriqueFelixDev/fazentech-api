const router = require('express').Router();
const UserUnauthorizedException = require('../exceptions/user/user_unauthorized_exception');
const authService = require('../services/authentication_service');

router.all('*', (req, res, next) => {
    const authorization = req.header('Authorization');

    if(authorization != null) {
        const jwt = authorization.replace('Bearer ', '');
        if(authService.validateJWT(jwt)) {
            const userData = authService.decodeJWT(jwt);
            req.userId = userData.uid;
            next();
            return;
        }
    }
    throw new UserUnauthorizedException('Usuário não autenticado');
});

module.exports = router;