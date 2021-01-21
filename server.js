const router = require('./routes')
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()

// Importando o dotenv
require('dotenv').config()

// Definindo a porta (caso não haja a variável configurada no .env, usará o segundo valor)
const port = process.env.PORT || 5000

// Permitindo o uso de JSON no body das requests com o bodyParser
app.use(bodyParser.json())

// Permitindo o parse das informações (com Content-Type correspondente ao type) vindas no body das requests com o bodyParser. O true permite informações encadeadas (usa a lib qs, com false usaria a lib querystring)
app.use(bodyParser.urlencoded({
    extended: true
}))

// Por fim, precisamos instruir o servidor a observar (listen) a porta definida - isso nos permite acessar localhost:PORTA_DEFINIDA para visualizarmos nosso projeto. Perceba que, além da porta, podemos passar um segundo parâmetro - uma função callback que, nesse caso, retorna um console.log para avisar que o servidor está 'rodando' na porta definida.
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))

// Importando o arquivo routes.js


// [...]

// Definindo o uso do arquivo para a rota principal
app.use('/', router)


