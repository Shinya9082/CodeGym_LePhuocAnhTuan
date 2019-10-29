let MyCircle = function (radius) {
    this.radius= radius;
};
MyCircle.prototype.getRadius=function () {
    return this.radius;
};
MyCircle.prototype.getArea=function () {
  return this.radius*this.radius*Math.PI;
};
    
