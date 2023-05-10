import EventEmitter from "node:events";

// CONSTANTS
const kReadySymbol = Symbol("ready");

export default class Server extends EventEmitter {
  static OHNO = true;

  constructor() {
    super();
    Object.defineProperty(this, kReadySymbol, {
      enumerable: false,
      configurable: false,
      writable: true,
      value: false
    });

    setImmediate(() => {
      this.emit("ready");
      this[kReadySymbol] = true;
    });
  }

  get isReady() {
    return this[kReadySymbol];
  }

  callMeMaybe() {
    if (!this.isReady) {
      throw new Error("Server must be ready!");
    }

    process.stdout.write(Server.OHNO ? "WELL DONE!" : "FOO BAR!");
  }
}
