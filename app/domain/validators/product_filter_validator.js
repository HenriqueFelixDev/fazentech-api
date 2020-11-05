const {checkSchema} = require('express-validator');

const validationChain = checkSchema({
    minPrice: {
        optional: {options: {checkFalsy: true}},
        isCurrency: {
            errorMessage: 'Preço mínimo não é um valor monetário válido',
            options: {allow_negatives: false}
        }
    }, 
    maxPrice: {
        optional: {options: {checkFalsy: true}},
        isCurrency: {
            errorMessage: 'Preço máximo não é um valor monetário',
            options: {allow_negatives: false}
        }
    }, 
    categories: {
        optional: {options: {checkFalsy: true}},
        isArray: {
            errorMessage: 'As categorias informadas devem ser uma lista de códigos das categorias'
        }
    }, 
    limit: {
        optional: {options: {checkFalsy: true}},
        isInt: {
            errorMessage: 'O limite de itens em uma página deve ser um número inteiro positivo',
            options: {min: 0}
        },
    }, 
    offset: {
        optional: {options: {checkFalsy: true}},
        isInt: {
            errorMessage: 'O índice da paginação deve ser um número inteiro positivo',
            options: {min: 0}
        }
    }
});

module.exports = validationChain;