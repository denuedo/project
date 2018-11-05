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
  this.framesCounter=0;
}

Game.prototype.start = function() {
  this.interval = setInterval(function() { 
    this.clear();  
    this.background.draw();
    this.background.move();
    this.player.drawPlayer();
    this.player.move();
    this.drawObstacles();
    this.moveObstacles();
    //this.generateObstacles();
    this.framesCounter++;

    if (this.framesCounter > 1000) {
      this.framesCounter = 0;
    }
    
    if (this.framesCounter % 170 === 0){
      this.generateObstacles();
    }


  } .bind(this), 1000 / this.fps);
};

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


  Game.prototype.moveObstacles = function() {

    this.obstacles.forEach(function(element) {
      element.moveObstacles();
    });

}
}
