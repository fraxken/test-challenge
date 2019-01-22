class Vector {
    constructor(x = 0, y = 0, z = 0) {
        if (typeof x !== "number") {
            throw new TypeError("x must be a number");
        }
        if (typeof y !== "number") {
            throw new TypeError("x must be a number");
        }
        if (typeof z !== "number") {
            throw new TypeError("x must be a number");
        }

        this.x = x;
        this.y = y;
        this.z = z;
    }

    add(vec) {

    }

    distanceTo(vec) {

    }
}

module.exports = Vector;
