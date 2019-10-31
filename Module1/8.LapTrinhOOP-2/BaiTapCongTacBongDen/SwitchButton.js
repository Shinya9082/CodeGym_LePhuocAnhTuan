let SwitchButton = function (status) {
    this.status=status;

    this.connectToLamp= function (ElectricLamp) {
        this.lamp= ElectricLamp;
    };
    this.switchOff= function () {
        this.lamp.turnOff();
        this.status=false;
        console.log("Change button status to "+this.status);
    };
    this.switchOn=function () {
        this.lamp.turnOn();
        this.status=true;
        console.log("Change button status to "+this.status);
    };
};