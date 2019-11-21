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

const Conversation = sequelize.define('conversations', {
    openeddate: {
        type: Sequelize.DATE
    }
})
//após a criação da tabela é necessário comentar isso para não recriar a tabela
Conversation.sync({force: true})

const Message = sequelize.define('messages', {
    idconversation: {
        type: Sequelize.BIGINT
    },
    content: {
        type: Sequelize.TEXT
    },
    sender: {
        type: Sequelize.STRING
    },
    recipient: {
        type: Sequelize.STRING
    },
    sentdate: {
        type: Sequelize.DATE
    }
})
//após a criação da tabela é necessário comentar isso para não recriar a tabela
Message.sync({force: true})

const Donation = sequelize.define('donations', {
    userid: {
        type: Sequelize.BIGINT
    },
    entityid: {
        type: Sequelize.TEXT
    },
    iscompleted: {
        type: Sequelize.BOOLEAN
    },
    recipient: {
        type: Sequelize.STRING
    },
    sentdate: {
        type: Sequelize.DATE
    },
    quantity: {
        type: Sequelize.INTEGER 
    },
    userfeedback: {
        type: Sequelize.TEXT
    },
    userrating: {
        type: Sequelize.INTEGER
    },
    entityfeedback: {
        type: Sequelize.TEXT
    },
    entityrating: {
        type: Sequelize.INTEGER
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
    }
})
//após a criação da tabela é necessário comentar isso para não recriar a tabela
Donation.sync({force: true})

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

//exemplo de busca por id com print no console
/*
Postagem.findByPk(2).then(postagem => {
    console.log(postagem);
})
*/

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