var express = require('express');
var router = express.Router();
var Filmes = require('../controllers/filmes')

router.get('/', function(req, res) {
  Filmes.listar()
    .then(dados => res.render('index', {lista: dados}))
    .catch(erro => res.status(500).jsonp(erro))
});

router.get('/:idFilme', function(req, res) {
  Filmes.consultar(req.params.idFilme)
    .then(dados => res.render('editar', {filme: dados}))
    .catch(erro => res.status(500).jsonp(erro))
});

router.post('/', function(req, res) {
  Filmes.adicionar(req.body)
    .then(dados => res.render('index', {lista: dados}))
    .catch(erro => res.status(500).jsonp(erro))
})


router.delete('/:idFilme', function(req, res) {
  Filmes.apagar(req.params.idFilme)
    .then(dados => res.render('index', {lista: dados}))
    .catch(erro => res.status(500).jsonp(erro))
})

router.post('/editar', function(req, res) {
  Filmes.editar(req.body)
    .then(dados => res.redirect('/filmes'))
    .catch(erro => res.status(500).jsonp(erro))
})


module.exports = router;
