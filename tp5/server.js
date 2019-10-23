var http = require('http')
var pug = require('pug')
var fs = require('fs')
var jsonfile = require('jsonfile')
 
var {parse} = require('querystring')
 
var myBD = "tarefas.json"
 
var myServer = http.createServer((req,res)=>{
 
    console.log(req.method + ' ' + req.url)
 
    if(req.method == 'GET'){
        if((req.url == '/')||(req.url == '/tarefas')){
            jsonfile.readFile(myBD, (erro, tarefas) => {
                if(!erro){
                    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
                    res.write(pug.renderFile('index.pug', {lista: tarefas}))
                    res.end()
                }
                else{
                    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
                    res.write(pug.renderFile('erro.pug', {e: "Erro: na leitura da BD"}))
                    res.end()
                }
            })
        }
        else if(req.url == '/w3.css'){
            res.writeHead(200, {'Content-Type': 'text/css'})
            fs.readFile('w3.css', (erro, dados)=>{
                if(!erro) res.write(dados)
                else res.write(pug.renderFile('erro.pug', {e: erro}))
                res.end()
            })
        }
        else if(req.url == '/apagar.js'){
            res.writeHead(200, {'Content-Type': 'text/javascript'})
            fs.readFile('apagar.js', (erro, dados)=>{
                if(!erro) res.write(dados)
                else res.write(pug.renderFile('erro.pug', {e: erro}))
                res.end()
            })
        }
        else{
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
            console.log("Erro: "+ req.url +" não está implementado!")
            res.write(pug.renderFile('erro.pug', {e: "Erro: "+ req.url +" não está implementado!"}))
            res.end()
        }
    }
    else if(req.method == 'POST'){
        if(req.url == '/'){
            recuperaInfo(req, resultado => {
                jsonfile.readFile(myBD, (erro, tarefas)=>{
                    if(!erro){
                        tarefas.push(resultado)
                        jsonfile.writeFile(myBD, tarefas, erro => {
                            if(erro) console.log(erro)
                            else console.log('Registo gravado com sucesso.')
                            res.end(pug.renderFile('index.pug', {lista: tarefas}))
                        })
                    }
                    else
                    res.end(pug.renderFile('index.pug', {lista: tarefas}))
                })
            })
        }
        else{
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
            console.log("Erro: "+ req.url +" não está implementado!")
            res.write(pug.renderFile('erro.pug', {e: "Erro: "+ req.url +" não está implementado!"}))
            res.end()
        }
    }
    else if(req.method == 'DELETE'){
        if(req.url.startsWith('/')){
            var id = req.url.split('/')[1]
            jsonfile.readFile(myBD, (erro, tarefas)=>{
                if(!erro){
                    var index = tarefas.findIndex(a => a.nome == id)
                    if(index > -1){
                        tarefas.splice(index, 1)
                        jsonfile.writeFile(myBD, tarefas, erro => {
                            if(erro) console.log(erro)
                            else console.log('BD atualizada com sucesso.')
                        })
                        res.end('0')
                    }
                    else {
                        console.log('Erro: não consegui encontrar o elemento a remover...')
                        res.end('1')
                    }
                }
                else{
                    console.log('Erro na leitura da BD...')
                    res.end('1')
                }
            })
        }
    }
    else{
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
        console.log("Método: "+req.method+" não suportado!")
        res.write(pug.renderFile('erro.pug', {e: "Método: "+req.method+" não suportado!"}))
        res.end()
    }
})
 
myServer.listen(5005, ()=>{
    console.log('Servidor à escuta na porta 5005...')
})
 
function recuperaInfo(request, callback){
    if(request.headers['content-type'] == 'application/x-www-form-urlencoded'){
        let body = ''
        request.on('data', bloco => {
            body += bloco.toString()
        })
        request.on('end', ()=>{
            callback(parse(body))
        })
    }
    else callback(null)
}