let exec = require('child_process').exec
var nomeBD, nomeFile
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Qual o nome da base de dados? ", function(dbName) {
    rl.question("Qual o nome do ficheiro Json? ", function(nameFile) {
        nomeBD = dbName
        nomeFile = nameFile
        rl.close();
    });
});
rl.on("close", function() {
    let command = 'mongoimport -d ' + nomeBD + ' -c ' + nomeBD + ' --file ' + nomeFile + '.json --jsonArray'
    exec(command, (err, stdout, stderr) => {
        if(err){
            console.log(err)
        }else{
            console.log("executou!!!!")
        }
})
});