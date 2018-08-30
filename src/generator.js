function buildImport({name, path}) {
    return `import {${name}} from '${path}';`;
}

function buildField({name, type, defaultValue}) {
    if (defaultValue) {
        return `  ${name}: ${type} = ${defaultValue};`;
    }
    return `  ${name}: ${type};`;
}

function generateInterface({name, base, fields, imports}) {
    const importsPart = imports.map(buildImport).join('\n');
    const meta = base ? ` extends ${base}` : '';
    const fieldsPart = fields.map(buildField).join('\n');

    let result = '';
    if (imports.length) {
        result += imports.map(buildImport).join('\n') + '\n\n';
    }

    return result + `export interface ${name}${meta} {
${fieldsPart}
}
`;
}

function generateEnum({name, values}) {
    return `export type ${name} = ${values.join(' | ')};\n`;
}

function generateCode(ast) {
    if (ast.type === 'enum') {
        return generateEnum(ast);
    }
    return generateInterface(ast);
}

function generate(abstractTrees) {
    return abstractTrees.map(ast => ({path: ast.path, code: generateCode(ast)}));
}

module.exports = {generate};