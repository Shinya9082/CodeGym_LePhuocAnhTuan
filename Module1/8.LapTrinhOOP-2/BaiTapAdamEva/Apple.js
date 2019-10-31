let Apple = function () {
    this.weight=10;
    this.decrease= function () {
        this.weight--;
    };
    this.isEmpty= function () {
        return this.weight === 0;

    };
    this.getWeight= function () {
        return this.weight;
    }
};