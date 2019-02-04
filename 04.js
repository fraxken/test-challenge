const cases = {
    add: (a, b) => a + b,
    mul: (a, b) => a * b,
    sub: (a, b) => a - b
}
const availableActions = new Set(Object.keys(cases));

function calc(actionName, ...args) {
    if (!availableActions.has(actionName)) {
        throw new Error(`Unknow action '${actionName}'`);
    }

    const [a = 0, b = 0] = args;
    return cases[actionName](a, b);
}

module.exports = calc;
