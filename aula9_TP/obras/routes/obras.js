var express = require('express');
var router = express.Router();

var Obra = require('../controllers/obras')

/*router.get('/obras', function(req, res) {
    Obra.listar()
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro))
  });*/

router.get('/obras', function(req, res) {
    if(req.query.ano == undefined && req.query.compositor == undefined && req.query.periodo == undefined){
        Obra.listar()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
    }
    if(req.query.ano != undefined && req.query.compositor == undefined && req.query.periodo == undefined){
        Obra.consultarPorAno(req.query.ano)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
    }
    if(req.query.ano == undefined && req.query.compositor != undefined && req.query.duracao != undefined && req.query.periodo == undefined){
        Obra.consultarCompositorPorDuracao(req.query.compositor, req.query.duracao)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
    }
    if(req.query.ano == undefined && req.query.compositor == undefined && req.query.duracao == undefined && req.query.periodo != undefined){
        Obra.consultarPorPeriodo(req.query.periodo)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
    }
});
  
router.get('/obras/:idObra', function(req, res) {
    Obra.consultarObra(req.query.idObra)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
});

router.get('/compositores', function(req, res) {
    Obra.listarCompositores()
     .then(dados => res.jsonp(dados))
     .catch(erro => res.status(500).jsonp(erro))
  });

router.get('/periodos', function(req, res) {
Obra.listarPeriodos()
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
});


  module.exports = router