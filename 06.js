const oP = {
  foo: 10
};

const handler = {
  get(obj, prop) {
    if (!Reflect.has(obj, prop)) {
      throw new Error(`Unknown property ${prop} in target object!`);
    }

    return Reflect.get(obj, prop) ** 2;
  },
  set(obj, prop, value) {
    if (typeof value !== "number") {
      throw new TypeError("value must be a number");
    }

    Reflect.set(obj, prop, value);

    return true;
  }
};

export default new Proxy(oP, handler);
