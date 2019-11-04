var express = require('express')
var router = express.Router()
var jsonfile = require('jsonfile')
const nanoid = require('nanoid')
var myBD = __dirname + "/../arq.json"

router.get('/', function(req, res, next) {
  jsonfile.readFile(myBD, (erro, arq)=>{  
    if(!erro) {
      jsonfile.writeFile(myBD, arq, erro => {
        if (erro) {
          res.render('error', { e: erro })
        } else {
          res.render('index', { lista: arq})
        }
    })
  }
  })
})
router.get('/:id', function(req, res, next) {
  jsonfile.readFile(myBD, (erro, arq)=>{  
    if(!erro){
      var id = req.params.id
      let index = arq.findIndex(i => i.id == id)
      res.render('editArq', {i: arq[index]})
      res.end()
  }
  })
})

router.post('/', function(req, res, next) {
  jsonfile.readFile(myBD, (erro, arq)=>{  
    if(!erro){
      arq.push(req.body)
      jsonfile.writeFile(myBD, arq, erro => {
        if(erro) console.log(erro)
        else console.log('Registo adicionado com sucesso')
     })
    }
  })
  res.redirect('/')
})


router.post('/:id', function(req, res, next){
  jsonfile.readFile(myBD, (erro, arq)=>{  
    if(!erro){
      var id = req.params.id
      let index = arq.findIndex(i => i.id == id)
      arq[index].prov = req.body.prov
         arq[index].local = req.body.local
          arq[index].tit = req.body.tit
         arq[index].duracao = req.body.duracao
        jsonfile.writeFile(myBD, arq, erro => {
          if(erro) console.log(erro)
          else console.log('Registo alterado com sucesso!')
        })
      }else{
          console.log('Erro na leitura da BD...')
          res.end('1')
    }
  })
  res.redirect('/')
})
router.delete('/:id', function(req, res) {
  jsonfile.readFile(myBD, (erro, arq)=>{  
    if(!erro){
      var id = req.params.id
      var index = arq.findIndex(i => i.id == id)
      if(index != '') {
        arq.splice(index, 1)
        jsonfile.writeFile(myBD, arq, erro => {
          if(erro) console.log(erro)
          else console.log('Registo removido com sucesso')
      })
        res.end('0')
      } else {
        res.render('error', { e: 'Não foi possível encontrar o registo...' })
      }
    } else {
      res.render('error', { e: 'Não foi possível encontrar o registo para apagar...' })
  }
  })
})

module.exports = router
