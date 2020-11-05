const router = require('express').Router();
const {validationResult} = require('express-validator');

const encryptationService = require('../domain/services/encryptation_service');
const authenticationService = require('../domain/services/authentication_service');
const userRepository = require('../repositories/user_repository');
const loginValidator = require('../domain/validators/login_validator');
const ResourceNotFoundException = require('../exceptions/resource_not_found_exception');
const InvalidArgumentException = require('../exceptions/invalid_argument_exception');

router.post('/login', loginValidator, async (req, res, next) => {
    try {
        const errors = validationResult(req);

        if(!errors.isEmpty()) {
            throw new InvalidArgumentException(errors.array());
        }

        let {email, password} = req.body;
    
        const users = await userRepository.getByEmail(email);
        
        if(users != null) {
            for(let user of users) {
                const isPasswordValid = await encryptationService.verifyPassword(password, user.password);
    
                if(isPasswordValid) {
                    const token = authenticationService.generateJWT({uid: user.id}, '1d');
                    const refreshToken = await authenticationService.generateRefreshToken(user.id);
                    res.json({token, refreshToken});
                    return;
                }
            }
            
        }
    
        throw new ResourceNotFoundException('Usuário não encontrado');
    } catch(e) {
        next(e);
    }
});

module.exports = router;