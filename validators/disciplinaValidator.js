const disciplinaValidator = {
    nome: {
        required: 'Campo obrigatório!',
        minLength: {
          value: 3,
          message: 'O mínimo de caracteres é 3'
        },
        maxLength: {
          value: 20,
          message: 'O máximo de caracteres é 20'
        },
        validate: (value) => {
          const pattern = /^[\w\s.,-]+$/;
          if (!pattern.test(value)) {
            return 'Nome inválido';
          }
          return true; 
        },

        curso:{
            required: 'Campo obrigatório!',
            minLength: {
                value: 2,
                message: 'O minimo de caracteres é 2'
            },
            maxLength: {
                value: 20,
                message: 'O máximo caracteres é 20'
            },
           
        },

        
    },
}
export default disciplinaValidator