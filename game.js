function Game(canvas) {  //debo poner canvasID? x??
  this.canvas = document.getElementById(canvas); //se puede poner con selectorAll? 
  this.ctx =this.canvas.getContext("2d");
  this.fps = 60;   

  this.reset(); //para hacer un reset a nuevo o a 0   
}

Game.prototype.reset = function(){
  this.background = new Background(this);
  this.player = new Player(this);
  this.obstacles = [];
  this.framesCounter = 0;
  this.score =0;
  
  this.collisionSound = new Audio("./Audios/killbill.mp3");
  this.supermanTheme = new Audio("./Audios/superman.mp3");
  
  this.shield = new Image();
  this.shield.src = "./Images/shield.png";

  this.endBackground = new Background(this);
  
  
Game.prototype.start = function() {
  this.interval = setInterval(this.run.bind(this), 1000 / this.fps);
  
};

Game.prototype.pause = function() {
  clearInterval(this.interval);

  var count = true;
  var framesCount = 0;
  var blinkId = setInterval(function() {
    // debugger

    if(count) {
      this.player.drawPlayerGreen()
    } else {
      this.player.drawPlayer()
    }
    if(framesCount % 10 == 0) count = !count;

    framesCount++;
    
    
  }.bind(this), 900 / this.fps)
  setTimeout(function(){
    clearInterval(blinkId)
    this.collisionSound.pause();
  }.bind(this),3400);
  
  setTimeout(
    function(){this.interval = setInterval(this.run.bind(this), 1000 / this.fps )}.bind(this), 3400);
}

Game.prototype.run = function() { 
  this.clear();  
  this.background.draw();
  this.background.move();
  
  this.player.move();
  this.player.drawPlayer();
  this.drawObstacles();
  this.moveObstacles();
  this.supermanTheme.play();
  this.drawScore();
  this.score += 0.01;
  this.drawLife(); 
  
  
  if (this.hasCrashed()){
    
    this.pause();
    
    this.collisionSound.play();
    this.supermanTheme.pause();
    this.player.life -=1;
  
  } 
  

  this.framesCounter++;

  if (this.framesCounter > 1000) {
    this.framesCounter = 0;
  }
  
  if (this.framesCounter % 170 === 0){
    this.generateObstacles();
  }

}

Game.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
}; 


Game.prototype.generateObstacles = function() {
  this.obstacles.push(new Obstacles(this));
};


Game.prototype.drawObstacles = function() {
  this.obstacles.forEach(function(element) {
    element.drawObstacles();
  });
}



Game.prototype.moveObstacles = function() {

    this.obstacles.forEach(function(element) {
      element.moveObstacles();
    });
}

Game.prototype.drawScore = function() {
  this.ctx.font = "30px sans-serif";
  this.ctx.fillStyle = "green";
  this.ctx.fillText(Math.floor(this.score), 47, 80);
}

Game.prototype.drawTextGameOver = function(){
  this.ctx.font = "30px impact";
  this.ctx.fillStyle = "green";
  this.ctx.fillText("GAME", 480, 200);
  this.ctx.fillText("OVER", 900, 200);


}

Game.prototype.drawLife = function(){
  for(var i = 0; i < this.player.life; i++)
  
  this.ctx.drawImage(this.shield, 25, 100 + i*70, 60, 60);

  if (this.player.life == 0) {
  clearInterval(this.interval);
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  
  this.background.drawGameOver();
  this.drawTextGameOver();
  
  }
}


Game.prototype.hasCrashed = function() { 
  
    
    return this.obstacles.some(function(obstacle,index){ 
      
       if (
        (this.player.y < obstacle.y + obstacle.height-25) &&
        (this.player.x + this.player.width  > obstacle.x + obstacle.random)   &&
        (this.player.x   < obstacle.x + obstacle.random + obstacle.width - 20) &&
        (this.player.y + this.player.height > obstacle.y) 
        ) {
          this.obstacles.splice(index,1); 
          return true;
        } else {
          return false;
        }

    }.bind(this)
    )
   
  }
  
}