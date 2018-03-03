console.log("started.");

var getCanvas = document.getElementById("canvas");
var ctx = getCanvas.getContext("2d");

var iWidth = getCanvas.width;
var iHeight = getCanvas.height;
const speed = 200;

const gridSize = 10;

var snakeBody = [];
snakeBody[0] = {
    x: 10*gridSize,
    y: 20*gridSize
}
snakeBody[1] = {
    x: 9*gridSize,
    y: 20*gridSize
}

var direction = "left";


document.addEventListener("keydown", stopInterval.bind(this));
document.addEventListener("keydown", arrowControl.bind(this));


function arrowControl(event) {
    if(event.keyCode == 37 && direction != "right"){
        console.log("left"); 
        direction = "left";
    } else if(event.keyCode == 38 && direction != "down"){
        console.log("up");
        direction = "up";
    } else if(event.keyCode == 39 && direction != "left"){
        console.log("right");
        direction = "right";
    } else if(event.keyCode == 40 && direction != "up"){
        console.log("down");
        direction = "down";
    } 
}

function drawSnake() {

    // repaint the canvas every "speend" ms
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // draw snake
    for(i = 0; i < snakeBody.length; i++){
        ctx.fillStyle = 'green';    
        ctx.fillRect(snakeBody[i].x,snakeBody[i].y,gridSize,gridSize);
        console.log(snakeBody[i].x, snakeBody[i].y);
    }  
    // privious head position
    var hx = snakeBody[0].x;
    var hy = snakeBody[0].y;
    // delete the tail
    snakeBody.pop();
    // check snake head direction 
    if(direction == "left") {
        if(hx < gridSize){
            hx = hx + iWidth + gridSize;  
        }     
        hx-=gridSize;
    }
    if(direction == "right") {
        if(hx > iWidth - gridSize){
            hx = hx - iWidth - gridSize;  
        }
        hx+=gridSize;
    }
    if(direction == "up") {
        if(hy < gridSize){
            hy = hy + iHeight + gridSize;  
        }     
        hy-=gridSize;
    }
    if(direction == "down") {
        if(hy > iHeight - gridSize){
            hy = hy - iHeight - gridSize;  
        }     
        hy+=gridSize;
    }
    // add the new head
    snakeBody.unshift({x: hx, y: hy});

} 



// stop the snake by press enter
function stopInterval(event) {
    console.log(event.keyCode);
    if(event.keyCode == 32){
        clearInterval(intervalTag);
    } 
}

var intervalTag = setInterval(drawSnake, speed);