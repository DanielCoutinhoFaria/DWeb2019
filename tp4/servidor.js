var http = require('http')
var fs = require('fs')

var servidor = http.createServer(function (req,res) {
    var partes = req.url.split('/')
    var pag = partes[partes.length-1]
    if(pag >= 1 && pag <= 122){
        fs.readFile('xml/arq' + pag + '.xml', function(err,data){
            res.writeHead(200, {'Content-Type': 'text/xml; charset=utf-8'});
            res.write(data);
            res.end()
        })
    }else{
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.write("Ficheiro inexistente " + pag);
        res.end() 
    }

})
servidor.listen(7777);