const {checkSchema} = require('express-validator');

const validationChain = checkSchema({
    paymentMethod: {
        optional: {options: {checkFalsy: true}},
        isIn: {
            errorMessage: 'O método de pagamento escolhido não é válido',
            options: [['credit_card', 'bank_slip']]
        }
    },
    installmentCount: {
        optional: {options: {checkFalsy: true}},
        isInt: {
            errorMessage: 'A quantidade de parcelas selecionada não é válida',
            options: {min: 1}
        }
    },
    shipping: {
        optional: {options: {checkFalsy: true}},
        isLength: {
            errorMessage: 'A opção de frete escolhida não é válida',
            options: {min: 3}
        }
    }
});

module.exports = validationChain;