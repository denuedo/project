window.onload = function() { //cuando el objeto window está cargado haz:
  
  // seleccionar boton

  document.querySelector(".start-screen").onclick = function() {
    document.querySelector(".start-screen").style.display = "none";
    document.querySelector(".canvas-screen").style.display = "block";
    startGame();
  };

  document.querySelector(".gameover-button").onclick = function() {
    document.querySelector(".gameover-button").classList.remove('visible');
    document.querySelector(".start-screen").style.display = "block";
    
  };

  
  
  // cuando se hace click en el boton, llamar a función y cambia display de los div
  
};

// funcion para empezar el canvas
function startGame() {
  var game = new Game("canvas");  //crea una instancia Game ¿en "canvas"?
  game.clear();
  game.start();   //empieza el canvas . La función está en game.js
}