function Background (game) {  //porque le paso el param??
  
  
    this.game = game; //pq???


  this.img = new Image();
  this.img.src = "./Images/space.jpg";

  this.x = 0;
  this.y = 0;
  this.dy = 10;
}



Background.prototype.draw = function() {
  this.game.ctx.drawImage(this.img, this.x, this.y, this.game.canvas.width, this.game.canvas.height);
  this.game.ctx.drawImage(this.img, this.x, this.y + this.game.canvas.height, this.game.canvas.width, this.game.canvas.height);

};

Background.prototype.move = function() {
  this.y -= this.dy;

  if (this.y < -this.game.canvas.height) this.y = 0;  //pq
};








