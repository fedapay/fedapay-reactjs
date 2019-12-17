const fs = require('fs');


const packageJson = JSON.parse( fs.readFileSync('package.json').toString() );
delete packageJson.devDependencies;
delete packageJson.dependencies;
delete packageJson.scripts;
delete packageJson.files;
fs.writeFileSync('dist/package.json', JSON.stringify(packageJson, null, 2));
