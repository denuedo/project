

function Player (game){
  
  this.game = game; 
 
  this.x = 670;
  this.y = 400;
  this.img = new Image();
  this.img.src = "./Images/superman.png";

}

Player.prototype.drawPlayer = function(){
this.game.ctx.drawImage(this.img, this.x, this.y, 150, 300);
};
