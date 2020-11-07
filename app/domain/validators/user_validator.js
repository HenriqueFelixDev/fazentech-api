const {checkSchema} = require('express-validator');

const validationChain = checkSchema({
    name: {
        isLength: {
            errorMessage: 'Nome muito curto',
            options: {min: 3}
        }
    },
    photo: {
        optional: {options: {checkFalsy: true}},
        isUrl: {
            errorMessage: 'A URL da foto é inválida'
        }
    },
    email: {
        isEmail: {
            errorMessage: 'E-mail inválido'
        }
    },
    cpf: {
        matches: {
            errorMessage: 'CPF inválido',
            options: /(\d{3}\.?){3}-?\d{2}/
        }
    },
    rg: {
        matches: {
            errorMessage: 'RG inválido',
            options: /\d{2}\.?(\d{3}\.?){2}(-?\d{1,2})?/
        }
    },
    password: {
        isLength: {
            errorMessage: 'Senha muito curta',
            options: {min: 3}
        }
    },
    birthday: {
        customSanitizer: {
            options: value => {
                const dateRegex = /(\d{4})-(\d{2})-(\d{2})(.+)/
                if(value && dateRegex.test(value)) {
                    return value.replace(dateRegex, '$1-$2-$3');
                }
                return null;
            }
        },
        isDate: {
            errorMessage: 'Formato de data inválido'
        },
        isBefore: {
            errorMessage: 'A data precisa ser anterior a atual',
            options: new Date().toDateString()
        }
    },
    'address.street': {
        isLength: {
            errorMessage: 'Nome da rua muito curto',
            options: {min: 3}
        }
    },
    'address.number': {
        optional: {options: {checkFalsy: true}},
        isInt: {
            errorMessage: 'O número deve ser um valor númerico positivo',
            options: {min: 0}
        }
    },
    'address.state': {
        customSanitizer: {
            options: value => value ? value.toUpperCase() : null
        },
        isIn: {
            errorMessage: 'Estado inválido',
            options: [
                [
                    'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 
                    'MA', 'MS', 'MT', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 
                    'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO',
                ]
            ]
        }
    },
    'address.postal_code': {
        matches: {
            errorMessage: 'CEP inválido',
            options: /\d{2}\.?\d{3}-?\d{3}/
        }
    },
    'address.neighborhood': {
        isLength: {
            errorMessage: 'Nome do bairro muito curto',
            options: {min: 3}
        }
    },
    'address.city': {
        isLength: {
            errorMessage: 'Nome da cidade muito curto',
            options: {min: 3}
        }
    },
    'address.complement': {
        optional: {options: {checkFalsy: true}},
        isLength: {
            errorMessage: 'Complemento muito curto',
            options: {min: 3}
        }
    },
    'phone.area_code': {
        matches: {
            errorMessage: 'DDD inválido',
            options: /\(?\d{2}\)?/
        }
    },
    'phone.number': {
        matches: {
            errorMessage: 'Telefone inválido',
            options: /\d{4}-?\d{4}?/
        }
    },
    'cellphone.area_code': {
        matches: {
            errorMessage: 'DDD do celular inválido',
            options: /\(?\d{2}\)?/
        }
    },
    'cellphone.number': {
        matches: {
            errorMessage: 'Número de celular inválido',
            options: /9\d{4}-?\d{4}?/
        }
    }
});

module.exports = validationChain;