function Obstacles (game){

this.game = game;

this.x = 700;
  this.y = -10;
  this.speedY = -3;
  this.img = new Image();
  this.img.src = "./Images/kripton.jpg";
  
}

Obstacles.prototype.drawObstacles = function(){
  this.game.ctx.drawImage(this.img, this.x, this.y, 60,60);
  };

Obstacles.prototype.moveObstacles = function(){
  this.y -= this.speedY;
}