/**
 * npm run create:tmpl nav/menu
 */
const fs = require('fs');
const path = require("path");
//const clipboardy = require('clipboardy');

const fileArg = process.argv[2];
if (!fileArg) {
    console.log('template path missing');
    return;
}

const INCLUDES_PATH = `./src/inc/components`;
const pathParts = fileArg.split('/');
const fileName = pathParts[pathParts.length - 1];
const fileClass = pathParts.join('-');
const filePath = INCLUDES_PATH + '/' + pathParts.join('/');

try {
    fs.mkdirSync(filePath, {recursive: true}, function (err) {
        if (err) console.log(err)
    });
} catch (e) {
}

const phpText = '<?php\n/**\n *\n */\n\n?>\n<div class="' + fileClass + '">\n\n</div>';
const scssText = '.' + fileClass + ' {\n\n}';
fs.writeFile(filePath + "/" + fileName + '.php', phpText, function (err) {
    if (err) throw err;
});
fs.writeFile(filePath + "/" + fileName + '.scss', scssText, function (err) {
    if (err) throw err;
});
console.log('template ' + fileName + ' created');

const scssImport = '\n@import "./../inc/components/' + pathParts.join('/') + '/' + fileName + '";';
fs.appendFile('src/styles/main.scss', scssImport, err => {
    if (err) console.error(err);
    console.log('main.scss updated');
});

//clipboardy.writeSync('<?php include("' + filePath + '/' + fileName + '"); ?>');