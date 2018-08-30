const fs = require('fs');
const path = require('path');
const JSON6 = require('./json-like/index');


function walkSync(dir, filelist = []) {
    fs.readdirSync(dir).forEach(file => {
        const dirFile = path.join(dir, file);
        try {
            filelist = walkSync(dirFile, filelist);
        }
        catch (err) {
            if (err.code === 'ENOTDIR' || err.code === 'EBUSY') filelist = [...filelist, dirFile];
            else throw err;
        }
    });
    return filelist;
}

function removeComments(line) {
    const rightOffset = line.indexOf('#');
    if (rightOffset === 0) {
        return '';
    }
    if (rightOffset >= 0) {
        return line.slice(0, rightOffset);
    }
    return line;
}

function readFile(dir, filename) {
    const text = fs.readFileSync(dir + filename).toString();
    const cleaned = text.split('\n').map(removeComments).join('\n');
    return JSON6.parse(cleaned);
}

function getTypeName(filePath) {
    const leftOffset = filePath.lastIndexOf('/');
    if (leftOffset > 0) {
        filePath = filePath.slice(leftOffset + 1);
    }

    const rightOffset = filePath.indexOf('.');
    if (rightOffset > 0) {
        filePath = filePath.slice(0, rightOffset);
    }

    return filePath;
}

function getFileDir(filePath) {
    const slashOffset = filePath.lastIndexOf('/');
    if (slashOffset >= 0) {
        return filePath.slice(0, slashOffset + 1);
    }

    return '';
}

function readDir(dir) {
    const files = walkSync(dir).map(file => file.slice(dir.length));

    const items = files.map(filePath => {
        const schema = readFile(dir, filePath);
        const name = getTypeName(filePath);
        const fileDir = getFileDir(filePath);

        return {name, schema, fileDir};
    });

    return items.reduce((acc, {name, schema, fileDir}) => ({...acc, [name]: {schema, fileDir}}), {});
}

module.exports = {readDir};