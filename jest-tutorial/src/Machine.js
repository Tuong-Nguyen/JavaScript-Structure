import Addition from "./Addition";

export default class Machine {
    constructor(){
        this.addition = new Addition();
    }

    add(a, b) {
        return this.addition.add(a, b);
    }
}
