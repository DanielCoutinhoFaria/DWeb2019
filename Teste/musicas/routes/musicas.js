const express = require('express');
const router = express.Router();

var musicas = require('../controllers/musicas')

router.get('/obras', function(req,res){
    if(req.query.compositor == undefined && req.query.instrumento == undefined){
        musicas.listarDeMusica()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
    }else if(req.query.compositor != undefined && req.query.instrumento == undefined){
        musicas.listarCompositorX(req.query.compositor)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))   
    }else if(req.query.compositor == undefined && req.query.instrumento != undefined){
        musicas.listarArquivosPorInstrumento(req.query.instrumento)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))  
    }
  })

  router.get('/obras/:id', function(req,res){
    musicas.listarObraPorID(req.params.id)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro))
  })

  router.get('/tipos', function(req,res){
    musicas.listarTipos()
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro))
  })

  router.get('/obrasQuant', function(req,res){
    musicas.listarQuant()
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro))
  })

module.exports = router