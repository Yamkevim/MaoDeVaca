// Importando o express
const express = require('express')

// Instanciando o Router (necessário para criarmos as rotas)
const router = express.Router()

// Definindo a rota para a URL principal com o método GET
router.get('/', function(req, res) {

    // Definindo o retorno dessa rota com o método send (no arquivo vamos usar arrow function)
    res.send('<h1>TESTE</h1>')
})

// Exportando o router para podermos importá-lo em outros arquivos
module.exports = router