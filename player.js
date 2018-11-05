function Player (game){
  
  this.game = game; 
 
  this.x = 670;
  this.y = 400;
  this.speedX = 0;
  this.img = new Image();
  this.img.src = "./Images/superman.png";
  this.setListeners();
}

Player.prototype.drawPlayer = function(){
this.game.ctx.drawImage(this.img, this.x, this.y, 150, 300);
};


Player.prototype.moveLeft = function() {
  this.speedX -= 5;
}

Player.prototype.moveRight = function() {
  this.speedX += 5;
}

Player.prototype.move = function() {
  this.x += this.speedX;
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




