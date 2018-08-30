describe("AST", function() {
    const ast = require('../src/ast');

    describe("getRelativePath", function() {

        it("returns one dot if paths are equals", function () {
            expect(ast.getRelativePath('dictionaries', 'dictionaries')).toBe('./');
        });

        it("returns two dots if the base path is one level upper then dependent path", function () {
            expect(ast.getRelativePath('dictionaries', 'dictionaries/luggage')).toBe('../');
        });

        it("returns two dots preceding paths if the base and the dependent are neighbours", function () {
            expect(ast.getRelativePath('ancillaries', 'dictionaries')).toBe('../dictionaries');
        });
    });
});