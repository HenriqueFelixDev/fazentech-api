const router = require('express').Router();
const {validationResult} = require('express-validator');

const encryptationService = require('../domain/services/encryptation_service');
const userValidator = require('../domain/validators/user_validator');
const userSanitizer = require('../domain/sanitizers/user_sanitizer');
const userRepository = require('../repositories/user_repository');
const authRepository = require('../repositories/authentication_repository');
const authMiddleware = require('../middlewares/auth_middleware');
const DuplicatedUserException = require('../exceptions/user/duplicated_user_exception');
const UserNotFoundException = require('../exceptions/user/user_not_found_exception');
const InvalidArgumentException = require('../exceptions/invalid_argument_exception');

router.get('/', authMiddleware, async (req, res, next) => {
    try {
        const user = await userRepository.getUserById(req.userId);

        if(user) {
            const address = await userRepository.getAddressByUserId(user.id);
            const phones = await userRepository.getPhonesByUserId(user.id);
            user.address = address[0];
            user.phone = phones[0];
            user.cellphone = phones[1];
            user.rg = userSanitizer.maskRG(user.rg);
            user.cpf = userSanitizer.maskCPF(user.cpf);
            delete user.password;
            delete user.refresh_token;
            return res.json(user);
        }

        throw new UserNotFoundException(`Usuário com o id ${req.userId} não encontrado`);
    } catch(e) {
        next(e);
    }
});

router.post('/', userValidator, async (req, res, next) => {
    
    try {
        const errors = validationResult(req);

        if(!errors.isEmpty()) {
            throw new InvalidArgumentException(errors.array());
        }
        
        const {name, photo, email, cpf, rg, password, birthday, address, phone, cellphone} = req.body;
        const encryptedPassword = await encryptationService.encryptPassword(password);

        const firebaseNumber = `+55${cellphone.area_code}${cellphone.number}`;
        const firebaseId = await authRepository.createFirebaseUser(
            email, 
            firebaseNumber, 
            password, 
            name
        );

        const user = {
            firebaseId,
            name,
            photo,
            email,
            cpf,
            rg,
            password: encryptedPassword,
            birthday,
            address,
            phone,
            cellphone
        };

        
        await userRepository.createUser(user);
        res.status(201).send();
    } catch(e) {
        if(e.code == 'ER_DUP_ENTRY') {
            
            const message = e.sqlMessage.match('users_email_unique')
                ? 'O e-mail informado já existe'
                : 'O CPF informado já existe';

            next(new DuplicatedUserException(message));
        }
        next(e);
    }
});

router.put('/', userValidator, authMiddleware, async (req, res, next) => {
    try {
        const errors = validationResult(req);

        if(!errors.isEmpty()) {
            throw new InvalidArgumentException(errors.array());
        }

        const {name, photo, email, cpf, rg, password, birthday, address, phone, cellphone} = req.body;

        const user = {
            id: req.userId,
            name,
            photo,
            email,
            cpf,
            rg,
            password,
            birthday, 
            address, 
            phone, 
            cellphone
        };
    
        await userRepository.updateUser(user);
        res.status(204).send();
    } catch(e) {
        next(e);
    }
});

module.exports = router;