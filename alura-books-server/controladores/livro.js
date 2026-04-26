const { getTodosLivros } = require('../../servicos/livro');

function getLivro(req, res) {
  try {
    const livros = getTodosLivros()
  } catch (error) {
    res.status(500).send('Erro ao buscar livros');
  }
}

module.exports = {
  getLivro
};

