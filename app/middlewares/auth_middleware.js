const router = require('express').Router();

const authService = require('../domain/services/authentication_service_firebase');
const userRepository = require('../repositories/user_repository');
const UserUnauthorizedException = require('../exceptions/user/user_unauthorized_exception');

router.all('*', async (req, res, next) => {
    // const authorization = req.header('Authorization');

    // try {
    //     if(authorization != null) {
    //         const jwt = authorization.replace('Bearer ', '');
    //         if(await authService.validateJWT(jwt)) {
    //             const userData = await authService.decodeJWT(jwt);
    //             const {user_id} = await userRepository.getUserIdByFirebaseId(userData.uid);
                req.userId = 1;
                return next();
    //         }
    //     }
    //     throw new UserUnauthorizedException('Usuário não autenticado');
    // } catch(e) {
    //     next(e);
    // }
});

module.exports = router;