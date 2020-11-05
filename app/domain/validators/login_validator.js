const {checkSchema} = require('express-validator');

const validationChain = checkSchema({
    email: {
        isEmail: {
            errorMessage: 'E-mail inválido'
        }
    },
    password: {
        isLength: {
            errorMessage: 'Senha muito curta',
            options: {min: 3}
        }
    },
});

module.exports = validationChain;