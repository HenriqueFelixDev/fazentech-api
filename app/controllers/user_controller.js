const router = require('express').Router();
const userRepository = require('../repositories/user_repository');
const userSanitizer = require('../domain/sanitizers/user_sanitizer');
const bcrypt = require('bcrypt');
const authMiddleware = require('../middlewares/auth_middleware');
const DuplicatedUserException = require('../exceptions/user/duplicated_user_exception');

router.get('/', authMiddleware, async (req, res) => {
    const user = await userRepository.getUserById(1);
    user.rg = userSanitizer.maskRG(user.rg);
    user.cpf = userSanitizer.maskCPF(user.cpf);
    delete user.password;
    delete user.refresh_token;
    res.json(user);
});

router.post('/', async (req, res, next) => {
    const {name, email, cpf, rg, password, birthday, address, phone, cellphone} = req.body;


    try {
        const encryptedPassword = await bcrypt.hash(password, 10);

        const user = {
            name,
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

router.put('/', authMiddleware, async (req, res) => {
    const {name, email, cpf, rg, password, birthday} = req.body;

    const user = {
        id: req.userId,
        name,
        email,
        cpf,
        rg,
        password,
        birthday
    };

    const result = await userRepository.updateUser(user);
    res.status(204).send();
});

module.exports = router;