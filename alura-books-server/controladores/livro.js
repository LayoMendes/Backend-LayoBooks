const { getTodosLivros, getLivroPorId, insereLivro, modificarLivro } = require('../servicos/livro');

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

      if(id && Number(id)) {

          const livro = getLivroPorId(id);
              res.send(livro);


      } else {
          res.status(422).send('ID inválido');
      }


   
  } catch (error) {
    res.status(500).send('Erro ao buscar livros');
  }
}
function patchLivro(req, res) {
  try {
    const id = req.params.id;


          if(id && Number(id)) {

              const body = req.body;

    modificarLivro(id, body);
    res.send('Livro atualizado com sucesso');

          } else {

              res.status(422).send('ID inválido');
          }

  
  } catch (error) {
    res.status(500).send('Erro ao atualizar livro');
  }
}

function postLivro(req, res) {
  try {


    const livroNovo = req.body;

    if (req.body.nome) {

    insereLivro(livroNovo);
    res.status(201).send('Livro adicionado com sucesso');


    }else {
      res.status(422).send('O nome do livro é obrigatório');

    }

  } catch (error) {
    res.status(500).send('Erro ao adicionar livro');
  }
}

function deleteLivro(req, res) {
  try {


    const id = req.params.id;

        if(id && Number(id)) { deletaLivroPorId(id);
    res.send('Livro deletado com sucesso');}

    else {
        res.status(422).send('ID inválido');
    }



   
  } catch (error) {
    res.status(500).send('Erro ao deletar livro');
  }

}
module.exports = {
  getLivros,
  getLivro,
  postLivro,
  patchLivro,
  deleteLivro
};

