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
  this.img.src = "./Images/rocks.png";
  this.random = this.random();

  
  // número de imágenes diferentes
  this.img.frames = 8;
  this.img.frameIndex = 0;


  // medidas de la imagen a representar en el canvas
  this.w = 50;
  this.h = 50;

  this.vy = 1;

}



Obstacles.prototype.drawObstacles = function(){
  // this.game.ctx.drawImage(this.img, this.x, this.y, 60,60);
  this.game.ctx.drawImage(
    this.img,
    this.img.frameIndex * Math.floor(this.img.width / this.img.frames), 
     0, 
     Math.floor(this.img.width / this.img.frames),
     this.img.height,
     this.x + this.random,
     this.y,
     this.width,
     this.height

  );
  

  this.animateImg();

  };

Obstacles.prototype.animateImg = function(){
  if (this.game.framesCounter % 6 === 0)  this.img.frameIndex++;
  if (this.img.frameIndex > 7)  this.img.frameIndex = 0;
}

Obstacles.prototype.moveObstacles = function(){
  this.y -= this.speedY;
  
}

Obstacles.prototype.random = function (min, max) {
  return Math.floor(Math.random() * (this.max - this.min)) + this.min;
}



