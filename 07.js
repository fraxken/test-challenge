function *boo(coef) {
    yield 10 - coef;
    yield 5n;
}

function* foo(coef = 0) {
    yield 1 + coef;
    yield* boo();
    yield 0n;
}

module.exports = foo;
