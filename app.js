const express = require("express")
const app = express()
const agendamentos = require("./banco")

//Require and response
app.get("/", function(req, res){
    res.send("Seja bem-vindo ao Node JS")
})

app.get("/cadastrar/:nome/:endereco/:bairro/:cep/:cidade/:estado/:observacao", function(req, res){
    /*res.end(
        "Nome: " + req.params.nome + 
        "\nEndereco: " + req.params.endereco +
        "\nBairro: " + req.params.bairro +
        "\nCEP: " + req.params.cep +
        "\nCidade: " + req.params.cidade +
        "\nEstado: " + req.params.estado +
        "\nObservação: " + req.params.observacao  
        )*/
        agendamentos.create({
            nome: req.params.nome,
            endereco: req.params.endereco,
            bairro: req.params.bairro,
            cep: req.params.cep,
            cidade: req.params.cidade,
            estado: req.params.estado,
            observacao: req.params.observacao,
        })

        res.send("Cadastro efetuado com sucesso!")
})

app.listen(8081, function(){
    console.log("Servidor Ativo na porta 8081!")
})