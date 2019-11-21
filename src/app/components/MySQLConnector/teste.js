const Sequelize = require('sequelize');
const sequelize = new Sequelize('nomeDoBanco', 'nomeUser', 'senha', {
    host: "localhost",
    dialect: 'mysql',
})

const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

Postagem.sync({force: true})

sequelize.authenticate().then(function(){
    console.log("Conectado")
}).catch(function(erro){
    console.log("falha ao se conectar: " + erro)
})