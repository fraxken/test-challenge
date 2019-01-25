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
        if (!(vec instanceof Vector)) {
            throw new TypeError("vec must be an instanceof Vector");
        }

        this.x += vec.x;
        this.y += vec.y;
        this.z += vec.z;
    }
}

module.exports = Vector;
