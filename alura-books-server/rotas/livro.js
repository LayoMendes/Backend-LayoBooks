const { Router } = require('express');
const {getLivro, getLivros, postLivro} = require('../controladores/livro');

const router = Router()

router.get('/', getLivros);

router.get('/:id', getLivro);

router.post('/', postLivro);

router.patch('/', (req, res) => {
  res.send('Atualizar um livro');
});

router.delete('/', (req, res) => {
  res.send('Remover um livro');
});








module.exports = router; 