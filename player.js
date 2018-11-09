function Player (game){
  
  this.game = game; 
 
  this.x = 670;
  this.y = 400;
  this.width =150;
  this.height = 300;
  this.speedX = 0;
  this.life = 3;

  this.img = new Image();
  this.img.src = "./Images/lego.png";

  this.img2 = new Image();
  this.img2.src = "./Images/greenLego.png";

  this.setListeners();
}

Player.prototype.drawPlayer = function(){
this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
};

Player.prototype.drawPlayerGreen = function(){
  this.game.ctx.drawImage(this.img2, this.x, this.y, this.width, this.height);
  };

Player.prototype.moveLeft = function() {
  this.speedX -= 5;
}

Player.prototype.moveRight = function() {
  this.speedX += 5;
}

Player.prototype.move = function() {

  // console.log(this.x);
  this.x += this.speedX;
  if (this.x < 0) {
    this.x = 0;
  };

  if(this.x +this.width > this.game.canvas.width){
    this.x  = this.game.canvas.width -this.width;
  }
  
}


Player.prototype.setListeners = function(){
  document.onkeydown = function(event){ //ejecuta 1fun q tiene un evento cuando pulse tecla en navaegador
    event.preventDefault();
    
    switch (event.keyCode) { 
      case 37:
      this.moveLeft();
      break;
    
      case 39:
      this.moveRight();
    }

  }.bind(this);

  document.onkeyup = function(event){ //ejecuta 1fun q tiene un evento cuando pulse tecla en navaegador
    event.preventDefault();
    
    switch (event.keyCode) { 
      case 37:
      case 39:
      this.speedX = 0;
    }

  }.bind(this);

};









