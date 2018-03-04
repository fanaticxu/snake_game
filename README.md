# snake_game

I'm trying to build a snake game using js.

Function wish list:

### 2 Mar 2018
- Add canvas.
- Add random dot print.
- Add move function, can only move frow top left to top right.

### 3 Mar 2018
- Add arrow key event listener.
- Add moveUp, moveDown, moveLeft, moveRight function.
- Add move function press the arrow key move accordingly.

### 4 Mar 2018
- Mind Map
```
put the coordinate of the snake body in an array.

every interval time, pop the tail coordinate and unshift the new head according to the derection. 


```
- !!! add ```ctx.fillRect(0, 0, canvas.width, canvas.height);``` into draw function. reprint the page every "speed" ms.
- Add array of the snake body.
- Modify draw function, now I can control the snake move correctly.
- Add border to each grid. Add random food position.
- Add eat food, after eat food generate a new food