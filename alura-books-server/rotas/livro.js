const { Router } = require('express');
const {getLivro} = require('../controladores/livro');
const router = Router()

router.get('/', getLivro); 

router.post('/', (req, res) => {
  res.send('Adicionar um novo livro');
});

router.patch('/', (req, res) => {
  res.send('Atualizar um livro');
});

router.delete('/', (req, res) => {
  res.send('Remover um livro');
});








module.exports = router; 