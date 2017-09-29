const fs = require('fs');

const configJsFile = "var http = require('http');\nvar fs = require('fs');";

function packageJsonFile(projectName) {
    return `{
    "name": "` + projectName + '", \n    "version": "0.0.2",' +
    `\n    "description": "A client help on initialize projets in NodeJS.",
    "main": "index.js",
    "scripts": {
        "test": "echo \\"Error: no test specified\\" && exit 1"
    },
    "keywords": [
        "demo"
    ],
    "author": "Luiz Henrique de F. R. Araújo <luizhbd@gmail.com> (http://tir4y.me)",
    "license": "ISC",
    "dependencies": {}
}`;
}

const statusCallback = function (error, file_name, callback) {
    if (error) {
        console.log("\x1b[31m",file_name + ': ERROR','\x1b[0m');
        console.log(error);
    } else {
        console.log(file_name + ': DONE');
        if (callback) {
            callback();
        }
    }
};

exports.createApiProject =  async(projectName) => {
    //Create Folders
    let projectNameFolder = "";
    if(projectName) {
        projectNameFolder = projectName + "/";
        await fs.mkdir(projectNameFolder, function(error) {
            statusCallback(error, projectNameFolder);
        });
    }

    await fs.mkdir(projectNameFolder + "src", function(error) {
        statusCallback(error, projectNameFolder + 'src/');
    });

    await fs.mkdir(projectNameFolder + "bin", function(error) {
        statusCallback(error, projectNameFolder + 'bin/');
    });

    await fs.mkdir(projectNameFolder + "src/controllers", function(error) {
        statusCallback(error, projectNameFolder + 'src/controllers');
    });

    await fs.mkdir(projectNameFolder + "src/routes", function(error) {
        statusCallback(error, projectNameFolder + 'src/routes');
    });

    await fs.mkdir(projectNameFolder + "src/models", function(error) {
        statusCallback(error, projectNameFolder + 'src/models');
    });

    //Create Files
    await fs.writeFile(projectNameFolder + 'src/app.js', configJsFile, function (error) {
        statusCallback(error, projectNameFolder + 'src/server.js');
    });

    await fs.writeFile(projectNameFolder + 'src/config.js', configJsFile, function (error) {
        statusCallback(error, projectNameFolder + 'src/config.js');
    });

    await fs.writeFile(projectNameFolder + 'package.json', packageJsonFile(projectName), function (error) {
        statusCallback(error, projectNameFolder + 'package.json');
    });
}