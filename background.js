function Background (game) {  
  
  
    this.game = game; 


  this.img = new Image();
  this.img.src = "./Images/galaxy.jpg";

  this.x = 0;
  this.y = 0;
  this.dy = 4;
}



Background.prototype.draw = function() {
  this.game.ctx.drawImage(this.img, this.x, this.y, this.game.canvas.width, this.game.canvas.height);
  this.game.ctx.drawImage(this.img, this.x, this.y + this.game.canvas.height, this.game.canvas.width, this.game.canvas.height);

};

Background.prototype.move = function() {
  this.y += this.dy;

  if (this.y > 0)   this.y = -this.game.canvas.height;  
};








