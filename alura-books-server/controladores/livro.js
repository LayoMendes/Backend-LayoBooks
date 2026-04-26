const { getTodosLivros, getLivroPorId } = require('../../servicos/livro');

function getLivros(req, res) {
  try {
    const livros = getTodosLivros()
    res.send(livros);
  } catch (error) {
    res.status(500).send('Erro ao buscar livros');
  }
}



function getLivro(req, res) {
  try {
    const id = req.params.id;
    const livro = getLivroPorId(id);
    res.send(livro);
  } catch (error) {
    res.status(500).send('Erro ao buscar livros');
  }
}

module.exports = {
  getLivros,
  getLivro
};

