// Importar o express
const express = require('express');

// Criar o roteador
const router = express.Router();

//Importar o controller
const PessoasController = require('./controllers/PessoasController')

// Definir/criar as rotas no roteador
router.get('/', PessoasController.listarPessoas);
router.get('/:id', PessoasController.mostrarPessoa)

// Exportar esse roteador
module.exports = router;