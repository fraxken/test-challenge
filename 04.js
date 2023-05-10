export const OPERATIONS = Object.freeze({
  add: (left, right) => left + right,
  mul: (left, right) => left * right,
  sub: (left, right) => left - right
});

/** @type {Set<String>} */
const kAvailableOperations = new Set(Object.keys(OPERATIONS));

/**
 * @func calc
 * @param {!String} operationName operationName
 * @param  {...any} args args
 * @returns {Number}
 *
 * @throws {Error}
 */
export function calc(operationName, ...args) {
  if (!kAvailableOperations.has(operationName)) {
    throw new Error(`Unknown operation '${operationName}'`);
  }

  const [a = 0, b = 0] = args;

  return OPERATIONS[operationName](Number(a), Number(b));
}
