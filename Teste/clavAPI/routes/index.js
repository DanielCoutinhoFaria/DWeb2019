var express = require('express');
var router = express.Router();
var axios = require('axios');

router.get('/', function(req, res, next) {
   axios.get("http://clav-api.dglab.gov.pt/api/entidades?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ")
    .then(dados =>{
      res.render('index', {lista: dados.data}) //por norma quando os dados vem da net estão no dados.data em vez de só dados
    })
    .catch(erro => {
      res.render('error',{ erro: erro})
    })
  })


  router.get('/:id', function(req, res, next) {
    var data1, data2, data3, data4;
    axios.get("http://clav-api.dglab.gov.pt/api/entidades/" + req.params.id + "?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ")
      .then(dados =>{
        data1 = dados.data
        axios.get("http://clav-api.dglab.gov.pt/api/entidades/" + req.params.id + "/tipologias?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ")
        .then(dados =>{
          data2 = dados.data
          axios.get("http://clav-api.dglab.gov.pt/api/entidades/" + req.params.id + "/intervencao/dono?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ")
          .then(dados =>{
            data3 = dados.data
            axios.get("http://clav-api.dglab.gov.pt/api/entidades/" + req.params.id + "/intervencao/participante?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ")
            .then(dados =>{
              data4 = dados.data
              console.log(data1)
              res.render('entidade', {e:data1,e2:data2,e3:data3,e4:data4})
            })
            .catch(erro => {
              res.render('error',{ erro: erro})
            })
          })
          .catch(erro => {
            res.render('error',{ erro: erro})
          })
        })
        .catch(erro => {
          res.render('error',{ erro: erro})
        })
      })
      .catch(erro => {
        res.render('error',{ erro: erro})
      })
    })




  module.exports = router;
