const reader = require('./src/reader');
const generator = require('./src/generator');
const ast = require('./src/ast');

const fs = require('fs');
const mkdirp = require('mkdirp');


const parsedData = reader.readDir('source/schemas/');
// console.log(parsedData);
const built = ast.build(parsedData);
console.log(built);

const types = generator.generate(built);
// console.log(types);


function getFileDir(filePath) {
    const slashOffset = filePath.lastIndexOf('/');
    if (slashOffset >= 0) {
        return filePath.slice(0, slashOffset + 1);
    }

    return '';
}

const writeFile = async (path, content) => {
    await mkdirp(getFileDir(path));
    await fs.writeFileSync(path, content);
};

types.forEach(({path, code}) => {
    writeFile('gen/' + path, code);
});