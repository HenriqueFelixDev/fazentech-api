const router = require('express').Router();
const authenticationService = require('../services/authentication_service');
const userRepository = require('../repositories/user_repository');
const bcrypt = require('bcrypt');
const ResourceNotFoundException = require('../exceptions/resource_not_found_exception');
const InvalidArgumentException = require('../exceptions/invalid_argument_exception');

router.post('/login', async (req, res) => {
    let {email, password} = req.body;

    if(!email || !password) {
        throw new InvalidArgumentException('Os dados enviados são inválidos');
    }

    const users = await userRepository.getByEmail(email);
    
    if(users != null) {
        for(let user of users) {
            const isPasswordValid = await bcrypt.compare(password, user.password);

            if(isPasswordValid) {
                const token = authenticationService.generateJWT({uid: user.id}, '1d');
                const refreshToken = await authenticationService.generateRefreshToken(user.id);
                res.json({token, refreshToken});
                return;
            }
        }
        
    }

    throw new ResourceNotFoundException('Usuário não encontrado');
});

module.exports = router;