// 1 - Importar o express
const express = require('express')

// 2 = Criar uma aplicacao express (const app)
const app = express()

// 3 - Importar e usar o roteador...
const router = require('./src/roteador')
app.use('/pessoas', router)

// 4 - Rodar a aplicacao (app.listen)
app.listen(3000, ()=>{console.log('Servidor rodando na porta 3000')})