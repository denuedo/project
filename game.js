function Game(canvas) {  //debo poner canvasID? x??
  this.canvas = document.getElementById(canvas); //se puede poner con selectorAll? 
  this.ctx =this.canvas.getContext("2d");
  this.fps = 60;   //pq?

      this.reset(); //de momento no hace falta. pero pq llama aquí a reset?
      
      
}

Game.prototype.reset = function(){
  this.background = new Background(this);

  
}


Game.prototype.start = function() {
  this.interval = setInterval(function() { 
    this.clear();  
    this.background.draw();
    

    

  } .bind(this), 1000 / this.fps);
};

Game.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
}; 


