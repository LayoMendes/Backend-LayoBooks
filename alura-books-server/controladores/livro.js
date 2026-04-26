const fs = require('fs')

function getLivro(req, res) {
  try {
    const livros = JSON.parse( fs.readFileSync('livros.json'))
  } catch (error) {
    res.status(500).send('Erro ao buscar livros');
  }
}

module.exports = {
  getLivro
};

