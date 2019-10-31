

function Hero(image, top, left, size){
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;
  this.speed=20;

  this.setSpeed= function (speed) {
    this.speed=speed;
  };

  this.getHeroElement = function(){
    return '<img width="'+ this.size + '"' +
      ' height="'+ this.size + '"' +
      ' src="' + this.image +'"' +
      ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
  };

  this.moveRight = function(){
    if(this.left < window.innerWidth - this.size){
      this.left += this.speed;
      console.log('ok: ' + this.left);
    }
  };

  this.moveLeft = function(){
    if(this.left > 0 ){
      this.left -= this.speed;
      console.log('ok: ' + this.left);
    }

  };

  this.moveUp = function(){
    if (this.top>0){
      this.top -= this.speed;
      console.log('ok: ' + this.top);
    }
  };

  this.moveDown = function(){
    if(this.top<window.innerHeight-this.size){
      this.top += this.speed;
      console.log('ok: ' + this.top);
    }
  }

}



let hero = new Hero('2.png', 20, 30, 200);

function start(evt){
  switch (evt.keyCode) {
    case 37: hero.moveLeft();break;
    case 38: hero.moveUp();break;
    case 39: hero.moveRight();break;
    case 40: hero.moveDown(); break;
  }
  document.getElementById('game').innerHTML = hero.getHeroElement();
}

function onstart() {
  window.addEventListener('keydown', start);
}
