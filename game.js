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
    this.hasCrashed()
    
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

    
    this.obstacles.some(function(obstacle){
      //debugger
       if (
        (this.player.y < obstacle.y + obstacle.height) &&
        (this.player.x + this.player.width  > obstacle.x + obstacle.random)   &&
        (this.player.x   < obstacle.x + obstacle.random + obstacle.width - 20) &&
        (this.player.y + this.player.height > obstacle.y) 
        ) {
          
        }

      
    }.bind(this)
    )
      
        
               
               
    

  }
  

  

  // if( a.x+a.w >= b.x && 
  //   b.x+b.w >= a.x &&
  //   a.y+a.h >= b.y && 
  //   b.y+b.h >= a.y
  // ){} 


// Game.prototype.isCollision = function() {
//   // colisiones genéricas 
//   // (p.x + p.w > o.x && o.x + o.w > p.x && p.y + p.h > o.y && o.y + o.h > p.y )
//   return this.obstacles.some(function(obstacle) {
//     return (
//       ((this.player.x + this.player.w) >= obstacle.x &&
//        this.player.x < (obstacle.x + obstacle.w) &&
//        this.player.y + (this.player.h - 20) >= obstacle.y)
//     );
//   }.bind(this));
// };