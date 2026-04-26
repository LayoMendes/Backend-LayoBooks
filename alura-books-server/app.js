const express = require('express');

const app = express();
app.use(express.json());
const rotasLivro = require('./rotas/livro');

const port = 8000;

app.use(express.json());

app.use('/livros', rotasLivro);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});