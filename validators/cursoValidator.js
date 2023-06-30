const cursovalidator = {
nome: {
    required: 'Campo Obrigatório',
    minLength: {
        value: 3,
        message: 'O Minimo é 3'
    },
    maxLength: {
        value: 10,
        message: 'O Máximo é 3'
    },
},
duracao : {
    required: 'Campo Obrigatório',
        maxLength: {
            value: 10,
            message: 'O Máximo é 10'
        },
        min: {
            value: 2,
            message: 'o valor minimo é 2'
        },
        max: {
            value: 10,
            message: 'o valor máximo é 10'
        },
},
modalidade: {
    required: 'Campo Obrigatório',
    maxLength: {
        value: 5,
        message: 'O Máximo é 5'
    },
    min: {
        value: 2.5,
         message:'O valor minimo é 2.5'
    },
    max: {
        value: 10,
        message: 'o valor máximo é 10'
    },
}
}

export default cursovalidator