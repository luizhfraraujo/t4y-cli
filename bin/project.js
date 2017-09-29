const fs = require('fs');

const configJsFile = "var http = require('http');\nvar fs = require('fs');";

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

exports.createApiProject =  (projectName) => {
    //Create Folders
    fs.mkdir("src", function(error) {
        statusCallback(error, 'src/');
    });

    fs.mkdir("bin", function(error) {
        statusCallback(error, 'bin/');
    });

    fs.mkdir("src/controllers", function(error) {
        statusCallback(error, 'src/controllers');
    });

    fs.mkdir("src/routes", function(error) {
        statusCallback(error, 'src/routes');
    });

    fs.mkdir("src/models", function(error) {
        statusCallback(error, 'src/models');
    });

    //Create Files
    fs.writeFile('src/app.js', configJsFile, function (error) {
        statusCallback(error, 'src/server.js');
    });

    fs.writeFile('src/config.js', configJsFile, function (error) {
        statusCallback(error, 'src/config.js');
    });
}