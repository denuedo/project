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
  this.interval = setInterval(this.run.bind(this), 1000 / this.fps);
};

Game.prototype.pause = function() {
  
  clearInterval(this.interval);
  setTimeout(
    function(){this.interval = setInterval(this.run.bind(this), 1000 / this.fps )}.bind(this), 1000);
}

Game.prototype.run = function() { 
  this.clear();  
  this.background.draw();
  this.background.move();
  
  this.player.move();
  this.drawObstacles();
  this.moveObstacles();
  
  if (this.hasCrashed()){
    this.player.drawPlayerGreen();
    this.pause();

  
  } else {
    this.player.drawPlayer();
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


Game.prototype.hasCrashed = function() { 
  //debugger
  // console.log(this.player);
  // this.player.left   = function() { return this.player.x                 }
  //   this.player.right  = function() { return (this.player.x + this.player.width)  }
  //   this.player.top    = function() { return this.player.y                 }
    
  //   this.obstacles.bottom = function() { return this.y + (this.height) }
  //   this.obstacles.left = function() { return this.obstacles.x                 }
  //   this.obstacles.right  = function() { return (this.obstacles.x + this.obstacles.width)  }

    
    return this.obstacles.some(function(obstacle,index){
      
       if (
        (this.player.y < obstacle.y + obstacle.height) &&
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
  

  

//   function IntervalTimer(callback, interval) {
//     var startTime, remaining = 0;
//     var state = 0; //  0 = idle, 1 = running, 2 = paused, 3= resumed

//     this.pause = function () {
//         if (state != 1) return;

//         remaining = interval - (new Date() - startTime);
//         window.clearInterval(this.interval);
//         state = 2;
//     };

//     this.resume = function () {
//         if (state != 2) return;

//         state = 3;

    

//     };

//     this.timeoutCallback = function () {
//         if (state != 3) return;

//         callback();

//         startTime = new Date();
//         this.interval = window.setInterval(callback, interval);
//         state = 1;
//     };

//     startTime = new Date();
//     this.interval = window.setInterval(callback, interval);
//     state = 1;
// }