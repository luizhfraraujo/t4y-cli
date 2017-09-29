#! /usr/bin/env node

const project = require('./bin/project');

const myArgs = process.argv.slice(2);

console.log("\x1b[33m","+------------------+",'\x1b[0m');
console.log("\x1b[33m","| t4y-cli dev help |",'\x1b[0m');
console.log("\x1b[33m","+------------------+",'\x1b[0m');
console.log("\n\n");
switch(myArgs[0]) {
    case '--new':
        switch(myArgs[1]) {
            case '--t=api':
                switch(myArgs[2]) {
                    case '--name':
                        let projectName = myArgs[3];
                        console.log("- Criando um novo projeto de API com o nome: " + projectName);
                        project.createApiProject(projectName);
                        break;
                };
                break;
            default:
                console.log("- Criando um novo projeto de API");
                project.createApiProject();
                break;
        };
        break;
    default:
        console.log("\x1b[31m","\n\nERROR",'\x1b[0m');
        console.log("Nenhum parâmetro encontrado!")
        console.log("\n\nDigite --help para saber os comandos \n\n");
        break;
};