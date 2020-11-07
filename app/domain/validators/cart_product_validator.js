const {checkSchema} = require('express-validator');

const validationChain = checkSchema({
    productId: {
        isInt: {
            errorMessage: 'O código do produto deve ser um número inteiro positivo',
            options: {min: 0}
        }
    },
    quantity: {
        isInt: {
            errorMessage: 'A quantidade de produtos deve ser um número inteiro positivo',
            options: {min: 0}
        }
    }
});

module.exports = validationChain;