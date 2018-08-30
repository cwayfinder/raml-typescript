function getValue(value) {
    if (String(value[0]).match(/[0-9]/) || ['null', 'true', 'false', 'Nan', 'Infinity'].includes(value)) {
        return value;
    } else if (String(value[0]).match(/[a-z]/i)) {    // ensure that string value is quoted
        return `'${value}'`;
    } else {
        return value;
    }
}

function getType(descriptor) {
    if (descriptor.type === 'array') {
        if (typeof descriptor.items === 'object') {
            return `${descriptor.items.type}[]`;
        }
        return `${descriptor.items}[]`;
    }

    if (descriptor.type === 'integer') {
        return 'number';
    }

    return descriptor.type;
}

function getDependency(descriptor) {
    let result;

    if (descriptor.type) {
        if (descriptor.type === 'array') {
            if (typeof descriptor.items === 'object') {
                result = descriptor.items.type;
            } else {
                result = descriptor.items;
            }
        } else {
            result = descriptor.type;
        }
    } else {
        result = descriptor;
    }

    if (result.includes('[]')) {
        result = result.slice(0, -2);
    }

    return result;
}

function getFieldName(name, descriptor) {
    if (descriptor.required === false) {
        return name + '?';
    } else {
        return name;
    }
}

function buildFields(schema) {
    return Object.entries(schema.properties).map(([name, descriptor]) => {
        return {
            name: getFieldName(name, descriptor),
            type: getType(descriptor),
            defaultValue: descriptor.default && getValue(descriptor.default),
        };
    });
}

function buildDependencies(schema) {
    const deps = Object.entries(schema.properties)
        .map(([name, descriptor]) => getDependency(descriptor))
        .filter(type => {
            console.log(schema);
            console.log('type', type);
            return type[0].match(/[A-Z]/);
        });

    if (schema.type !== 'object') {
        deps.push(schema.type);
    }

    return [...new Set(deps)];
}

function buildEnum(name, schema) {
    const values = schema.enum.map(item => getValue(item));
    return {name, type: 'enum', values};
}

function buildInterface(name, schema) {
    const result = {
        name,
        type: 'interface',
        fields: buildFields(schema),
        dependencies: buildDependencies(schema),
    };

    if (schema.type !== 'object') {
        result['base'] = schema.type;
    }

    return result;
}

function getRelativePath(base, dependent) {
    if (base === dependent) {
        return './';
    }

    const baseFragments = base.split('/');
    const dependentFragments = dependent.split('/');

    if (baseFragments.length < dependentFragments.length) {
        return '../'
    }

    if (baseFragments.length === dependentFragments.length) {
        return '../' + dependent;
    }

    return dependentFragments.join('/');
}

function build(data) {
    return Object.entries(data).map(([name, {schema, fileDir}]) => {
        if (schema.type === 'string') {
            return buildEnum(name, schema);
        }

        const result = buildInterface(name, schema);
        result.imports = result.dependencies
            .map(dep => {
                if (data[dep]) {
                    // if (data[dep].fileDir) {
                    //     return {name: dep, path: './' + data[dep].fileDir + dep};
                    // } else {
                    //     return {name: dep, path: './' + dep};
                    // }
                    return {name: dep, path: getRelativePath(fileDir, data[dep].fileDir) + dep};
                }
            })
            .filter(imp => !!imp);
        // delete result.dependencies;

        result.path = fileDir + name + '.ts';

        return result;
    });
}

module.exports = {build, getRelativePath};