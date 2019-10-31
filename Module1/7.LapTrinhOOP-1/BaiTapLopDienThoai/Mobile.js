let Mobile= function () {
    this.stage=true;
    this.battery=100;
    this.Draft="";
    this.Inbox=[];
    this.Sent=[];
};
Mobile.prototype.getStage=function () {
    if (this.stage){
        this.battery--;
        return this.stage;
    }

};
Mobile.prototype.changeStage=function () {
    if (this.stage){
        this.battery--;
        return this.stage= !this.stage;
    }

};
Mobile.prototype.chargeMoblie=function () {
    if (this.stage){
        this.battery++;
    }

};
Mobile.prototype.createMesage=function (message) {
    if (this.stage){
        this.Draft=message;
        this.battery--;
    }
};
Mobile.prototype.sentMessage=function () {
    if (this.stage){
        this.battery--;
        this.Sent.push(this.Draft);
        return this.Draft;
    }

};
Mobile.prototype.receiveMessage=function (message) {
    if (this.stage){
        this.Inbox.push(message);
        this.battery--;
    }
};


Mobile.prototype.checkMessage=function () {
    if (this.stage){
        this.battery--;
        return this.Inbox;
    }

};
Mobile.prototype.checkSentMessage=function () {
    if (this.stage){
        this.battery--;
        return this.Sent;
    }

};

