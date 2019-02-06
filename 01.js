/**
 * @func add
 * @desc Addition entre l'argument a et b
 * @param {!Number} a
 * @param {!Number} b
 * @returns {Number}
 * 
 * @throws {TypeError}
 */
function add(a, b = 10) {
    if (typeof a !== "number") {
        throw new TypeError("a must be a number");
    }
    if (typeof b !== "number") {
        throw new TypeError("b must be a number");
    }

    return a + b;
}

/**
 * @func calc_moy
 * @desc Calcule d'une moyenne à partir d'un tableau de nombre
 * @param {!Number[]} nums
 * @returns {Number}
 * 
 * @throws {TypeError}
 */
function calc_moy(nums = []) {
    if (!Array.isArray(nums)) {
        throw new TypeError("nums must be an array!");
    }

    return nums.reduce((acc, curr) => curr + acc, 0) / nums.length;
}

const STATE = Object.freeze({
    run: 0,
    walk: 1,
    idle: 2
});

module.exports = {
    add,
    calc_moy,
    STATE
};
