var express = require('express');
var router = express.Router();
var axios = require('axios');

router.get('/', function(req, res, next) {
   axios.get("http://clav-api.dglab.gov.pt/api/entidades?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NzM0ODgwMDgsImV4cCI6MTU3NjA4MDAwOH0.UD0UdMrzKcWDop8HlwqdeOuK_ZzZxHvOMOP2DMkIjUQ")
    .then(dados =>{
      res.render('index', {lista: dados.data})
    })
    .catch(erro => {
      res.render('error',{ erro: erro})
    })
  })

router.get('/:id', function(req, res, next) {
  var data1, data2, data3, data4;
  axios.get("http://clav-api.dglab.gov.pt/api/entidades/" + req.params.id + "?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NzM0ODgwMDgsImV4cCI6MTU3NjA4MDAwOH0.UD0UdMrzKcWDop8HlwqdeOuK_ZzZxHvOMOP2DMkIjUQ")
    .then(dados =>{
      data1 = dados.data
      axios.get("http://clav-api.dglab.gov.pt/api/entidades/" + req.params.id + "/tipologias?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NzM0ODgwMDgsImV4cCI6MTU3NjA4MDAwOH0.UD0UdMrzKcWDop8HlwqdeOuK_ZzZxHvOMOP2DMkIjUQ")
      .then(dados =>{
        data2 = dados.data
        axios.get("http://clav-api.dglab.gov.pt/api/entidades/" + req.params.id + "/intervencao/dono?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NzM0ODgwMDgsImV4cCI6MTU3NjA4MDAwOH0.UD0UdMrzKcWDop8HlwqdeOuK_ZzZxHvOMOP2DMkIjUQ")
        .then(dados =>{
          data3 = dados.data
          axios.get("http://clav-api.dglab.gov.pt/api/entidades/" + req.params.id + "/intervencao/participante?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NzM0ODgwMDgsImV4cCI6MTU3NjA4MDAwOH0.UD0UdMrzKcWDop8HlwqdeOuK_ZzZxHvOMOP2DMkIjUQ")
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
