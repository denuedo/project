
![](https://i.imgur.com/1QgrNNw.png)

# PROJECT 1: SUPERMAN

## Description
Superman's worst enemy, Lex Luthor, has managed to build a weapon that shoots kryptonite to kill Superman. The superhero has only 3 lives. Help him to dodge the kryptonite so he can survive Help him dodge the kryptonite so he can survive as long as possible.

## Github Pages
 https://denuedo.github.io/project/
 
 ## Notes about the code
 1. I am proud of all the code because it was the first game I created. Specially, I am proud of the pause part that manages to stop the whole game when there is a collision.
```
Game.prototype.pause = function() {
  clearInterval(this.interval);

  var count = true;
  var framesCount = 0;
  var blinkId = setInterval(function() {

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


```

2. I would plan everything better before I started coding.

3. If I had more time I would do a more complete game: with more effects in the kryptonite, more screens, more game levels. If I had time I would refactor my code.

4. The most difficult part for me was the one I explained in point number one.

