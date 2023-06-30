const salaValidator = {
    nome:{
        required: 'Campo obrigatório!',
        minLength: {
            value: 5,
            message: 'O minimo de caracteres é 5'
        },
        maxLength: {
            value: 40,
            message: 'O máximo caracteres é 40'
        },
        
        pattern: {
            value: /^[\w\s,.\-~^]+$/,
            message:"Sala inválida"
            
        },
    },

    capacidade:{
        required: 'Campo obrigatório!',
        minLength: {
            value: 1,
            message: 'O minimo de caracteres é 1'
        },
        maxLength: {
            value: 60,
            message: 'O máximo caracteres é 60'
        },
        
        pattern: {
            value: /^[\w\s,.\-~^]+$/,
            message:"Sala inválida"
            
        },
        validate: (value) => {
            const capacidade = parseInt(value, 10);
        
            if (capacidade > 60) {
              return 'A capacidade máxima permitida é de 60 alunos';
            }
        
            return true;
          },      
    },

    tipo: {
        required: 'Campo obrigatório!',
        minLength: {
          value: 3,
          message: 'O mínimo de caracteres é 3'
        },
        maxLength: {
          value: 30,
          message: 'O máximo de caracteres é 30'
        }
      }


}
export default salaValidator