/**
 * @typedef {Object} VectorLike
 * @property {Number} x
 * @property {Number} y
 * @property {Number} z
 */

/**
 * @class Vector
 * 
 * @property {Number} x
 * @property {Number} y
 * @property {Number} z
 */
class Vector {
    /**
     * @constructor
     * @memberof Vector#
     * @param {Number} [x=0] x
     * @param {Number} [y=0] y
     * @param {Number} [z=0] z
     *
     * @throws {TypeError}
     */
    constructor(x = 0, y = 0, z = 0) {
        if (typeof x !== "number") {
            throw new TypeError("x must be a number");
        }
        if (typeof y !== "number") {
            throw new TypeError("y must be a number");
        }
        if (typeof z !== "number") {
            throw new TypeError("z must be a number");
        }

        this.x = x;
        this.y = y;
        this.z = z;
    }

    /**
     * @method add
     * @memberof Vector#
     * @param {!Vector} vec vector Object
     * @returns {void}
     *
     * @throws {TypeError}
     */
    add(vec) {
        if (!(vec instanceof Vector)) {
            throw new TypeError("vec must be an instanceof Vector");
        }

        this.x += vec.x;
        this.y += vec.y;
        this.z += vec.z;
    }

    /**
     * @method toJSON
     * @memberof Vector#
     * @returns {VectorLike}
     */
    toJSON() {
        return { x: this.x, y: this.y, z: this.z };
    }
}

module.exports = Vector;
