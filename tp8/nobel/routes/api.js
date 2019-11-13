var express = require('express');
var router = express.Router();

var Nobel = require('../controllers/nobel')

/*router.get('/premios?categorias', function(req, res) {
  Nobel.consultarCategoria(req.params.categorias)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
});*/

router.get('/premios', function(req, res) {
  if(req.query.categorias == undefined){
    Nobel.listar()
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
  }
  if(req.query.categorias != undefined && req.query.year == undefined){
    Nobel.consultarCategoria(req.query.categorias)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
  }
  if(req.query.categoria != undefined && req.query.year != undefined){
    Nobel.consultarCategoriaPorAno(req.query.categorias, req.query.year)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
  }

});

router.get('/premios/:idNobel', function(req, res) {
  Nobel.consultar(req.params.idNobel)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
});

router.get('/categorias', function(req, res) {
  Nobel.listarCategoria()
   .then(dados => res.jsonp(dados))
   .catch(erro => res.status(500).jsonp(erro))
});

router.get('/laureados', function(req, res) {
  Nobel.listarLaureados()
   .then(dados => res.jsonp(dados))
   .catch(erro => res.status(500).jsonp(erro))
});


module.exports = router;
