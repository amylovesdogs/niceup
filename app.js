document.write('');
document.write('The current version of io.js = ' + process.version);
document.write('The current platform = ' + process.platform);

var fs = require('fs');

var contents = fs.readFileSync('./package.json','utf8');
alert(contents);

