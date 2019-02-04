const User = {
    name: "fraxken",
    callGreet: 0,
    greet() {
        this.callGreet = this.callGreet > 2 ?  0 : this.callGreet + 1;

        return `hello ${this.name}`;
    }
}

module.exports = { User };