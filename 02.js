/**
 * @typedef {Object} VectorLike
 * @property {Number} x
 * @property {Number} y
 */

export default class Vector2 {
  static DIRECTION = Object.freeze({
    UP: 1,
    DOWN: -1
  });

  /**
   * @param {Number} [x=0] x
   * @param {Number} [y=0] y
   * @throws {TypeError}
   */
  constructor(x = 0, y = 0) {
    if (typeof x !== "number") {
      throw new TypeError("x must be a number");
    }
    if (typeof y !== "number") {
      throw new TypeError("y must be a number");
    }

    this.x = x;
    this.y = y;
  }

  /**
   * @param {!Vector2} vec vector Object
   * @returns {void}
   * @throws {TypeError}
   */
  add(vec) {
    if (!(vec instanceof Vector2)) {
      throw new TypeError("vec must be an instanceof Vector2");
    }

    this.x += vec.x;
    this.y += vec.y;
  }

  up() {
    this.y += Vector2.DIRECTION.UP;
  }

  down() {
    this.y += Vector2.DIRECTION.DOWN;
  }

  /**
   * @returns {VectorLike}
   */
  toJSON() {
    return { x: this.x, y: this.y };
  }
}
