let MyRec=function (width, height) {
    this.width= width;
    this.height= height;
};

MyRec.prototype.getArea=  function () {
  return (this.width*this.height);
};
MyRec.prototype.getDia=  function () {
  return (this.width+this.height)*2
};
MyRec.prototype.setWidth= function (width) {
    this.width=width;
};
MyRec.prototype.setHeight= function (height) {
    this.height=height;
};
MyRec.prototype.drawRec= function () {
    let c = document.getElementById("myCanvas");
    let ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.rect(100,100,this.width,this.height);
    ctx.stroke();
};