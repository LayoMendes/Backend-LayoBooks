const { getTodosLivros, getLivroPorId, insereLivro } = require('../../servicos/livro');

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



function postLivro(req, res) {
  try {
    const livroNovo = req.body;
    insereLivro(livroNovo);
    res.status(201).send('Livro adicionado com sucesso');
  } catch (error) {
    res.status(500).send('Erro ao adicionar livro');
  }
}

module.exports = {
  getLivros,
  getLivro,
  postLivro
};

