let ElectricLamp = function (status) {
    this.status=status;

    this.turnOff= function () {
        this.status=false;
        console.log("Change Lamp status to "+this.status);
    };
    this.turnOn= function () {
        this.status=true;
        console.log("Change Lamp status to "+this.status);
    }
};