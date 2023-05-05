const cases = {
  add: (a, b) => a + b,
  mul: (a, b) => a * b,
  sub: (a, b) => a - b
};

/** @type {Set<String>} */
const kAvailableActions = new Set(Object.keys(cases));

/**
 * @func calc
 * @param {!String} actionName actionName
 * @param  {...any} args args
 * @returns {Number}
 *
 * @throws {Error}
 */
export function calc(actionName, ...args) {
  if (!kAvailableActions.has(actionName)) {
    throw new Error(`Unknown action '${actionName}'`);
  }

  const [a = 0, b = 0] = args;

  return cases[actionName](Number(a), Number(b));
}
