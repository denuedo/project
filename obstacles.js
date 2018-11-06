function Obstacles (game){

this.game = game;

this.x = 400;
  this.y =-20;
  this.width= 60;
  this.height= 60;
  this.speedY = -3;
  this.min = 10;
  this.max = 450;
  this.img = new Image();
  this.img.src = "./Images/kripton.jpg";
  this.random = this.random();
}

Obstacles.prototype.drawObstacles = function(){
  // this.game.ctx.drawImage(this.img, this.x, this.y, 60,60);
  this.game.ctx.drawImage(this.img, this.x + this.random, this.y, this.width,this.height);
  
  };

Obstacles.prototype.moveObstacles = function(){
  this.y -= this.speedY;
  
}

Obstacles.prototype.random = function (min, max) {
  return Math.floor(Math.random() * (this.max - this.min)) + this.min;
}



