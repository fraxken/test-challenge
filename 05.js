const EventEmitter = require("events");

const SimReady = Symbol("ready");

class Server extends EventEmitter {
    constructor() {
        super();
        Reflect.defineProperty(this, SimReady, {
            enumerable: false,
            configurable: false,
            writable: true,
            value: false
        });

        setTimeout(() => {
            this.emit("ready");
            this[SimReady] = true;
        }, 500);
    }

    get isReady() {
        return this[SimReady];
    }

    callMeMaybe() {
        if (!this.isReady) {
            throw new Error("Server must be ready!");
        }

        process.stdout.write(Server.OHNO ? "WELL DONE!" : "FOO BAR!");
    }
}
Server.OHNO = true;

module.exports = Server;
