//
const Sequelize = require("sequelize")
const sequelize = new Sequelize("exemplo", "root", "",{
    host: "localhost",
    dialect: "mysql"
})

sequelize.authenticate().then(function(){
    console.log("Servidor ativo!")
}).catch(function(erro){
    console.log("Falha de conexão" + erro)
})

const agendamentos = sequelize.define("agendamentos",{
    nome:{
        type: Sequelize.STRING
    },
    endereco:{
        type: Sequelize.STRING    
    },
    bairro:{
        type: Sequelize.STRING
    },
    cep:{
        type: Sequelize.STRING
    },
    cidade:{
        type: Sequelize.STRING
    },
    estado:{
        type: Sequelize.STRING
    },
    observacao:{
        type: Sequelize.STRING
    }
})

//agendamentos.sync()

/*agendamentos.create({
    nome: "Mariane Batista de Souza",
    endereco: "Av. das Flores",
    bairro: "Jd. São Martins",
    cep: "08180-080",
    cidade: "São Paulo",
    estado: "SP",
    observacao: "Socorro!"
})*/

module.exports = agendamentos