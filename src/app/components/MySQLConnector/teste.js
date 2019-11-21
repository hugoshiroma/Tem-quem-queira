const Sequelize = require('sequelize');
const sequelize = new Sequelize('TQQ', 'root', '', {
    host: "localhost",
    dialect: 'mysql',
})

const Usuario = sequelize.define('usuarios', {
    name: {
        type: Sequelize.STRING
    },
    points: {
        type: Sequelize.INTEGER
    },
    cep: {
        type: Sequelize.STRING
    },
    number: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    username: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    passwordConfirmation: {
        type: Sequelize.STRING
    },
    islogged: {
        type: Sequelize.BOOLEAN
    },
    lat: {
        type: Sequelize.BIGINT
    },
    long: {
        type: Sequelize.BIGINT
    }
})

//após a criação da tabela é necessário comentar isso para não recriar a tabela
Usuario.sync({force: true})



const Entidade = sequelize.define('entidades', {
    name: {
        type: Sequelize.STRING
    },
    points: {
        type: Sequelize.INTEGER
    },
    cep: {
        type: Sequelize.STRING
    },
    number: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    username: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    passwordConfirmation: {
        type: Sequelize.STRING
    },
    clothes: {
        type: Sequelize.BOOLEAN
    },
    toys: {
        type: Sequelize.BOOLEAN
    },
    furniture: {
        type: Sequelize.BOOLEAN
    },
    food: {
        type: Sequelize.BOOLEAN
    },
    musicalinstrument: {
        type: Sequelize.BOOLEAN
    },
    books: {
        type: Sequelize.BOOLEAN
    },
    cleaningproducts: {
        type: Sequelize.BOOLEAN
    },
    medical: {
        type: Sequelize.BOOLEAN
    },
    scholarmaterial: {
        type: Sequelize.BOOLEAN
    },
    personalhygiene: {
        type: Sequelize.BOOLEAN
    },
    islogged: {
        type: Sequelize.BOOLEAN
    },
    lat: {
        type: Sequelize.BIGINT
    },
    long: {
        type: Sequelize.BIGINT
    }
})

//após a criação da tabela é necessário comentar isso para não recriar a tabela
Entidade.sync({force: true})

//exemplo de busca por id
/*
Postagem.findByPk(2).then(postagem => {
    console.log(postagem);
})
*/

//Postagem.sync({force: true})

//exemplo de inserção
/*
Postagem.create({
    titulo: "edu testando",
    conteudo: "esse é um teste que eu estou fazendo pra testar se eu consigo colocar texto dentro dessa postagem \n linha nova"
})
*/


sequelize.authenticate().then(function(){
    console.log("Conectado")
}).catch(function(erro){
    console.log("falha ao se conectar: " + erro)
})