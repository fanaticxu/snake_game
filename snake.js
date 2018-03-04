console.log("started.");

var getCanvas = document.getElementById("canvas");
var ctx = getCanvas.getContext("2d");

var iWidth = getCanvas.width;
var iHeight = getCanvas.height;
const speed = 100;
const gridSize = 20;
var score = 0;
var snakeBody = [];
snakeBody[0] = {
    x: 10*gridSize,
    y: 20*gridSize
};
snakeBody[1] = {
    x: 9*gridSize,
    y: 20*gridSize
};
snakeBody[2] = {
    x: 8*gridSize,
    y: 20*gridSize
};
var hx = snakeBody[0].x;
var hy = snakeBody[0].y;

var direction = "right";
var food = {
    // num between 0*10 to 59*10
    x: Math.round((Math.random()*(iWidth - gridSize)/gridSize))*gridSize,
    y: Math.round((Math.random()*(iHeight - gridSize)/gridSize))*gridSize
}

document.addEventListener("keydown", stopInterval.bind(this));
document.addEventListener("keydown", arrowControl.bind(this));

function game() {
    drawBackground()
    drawSnake();
    drawFood();
    eatFood();
    setDirection();
    isBite();
} 

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
function drawBackground() {
    // repaint the canvas every "speend" ms
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // Score print:
    let printScore = 'score: ' + score;
    ctx.font = "bold 24px verdana, sans-serif ";
    ctx.fillStyle = "gray";
    ctx.fillText(printScore, gridSize, iHeight - gridSize);

}
function drawSnake() {


    // draw snake
    for(i = 0; i < snakeBody.length; i++){
        ctx.fillStyle = (i == 0) ? 'blue' : 'green';    
        ctx.fillRect(snakeBody[i].x, snakeBody[i].y, gridSize, gridSize);
        console.log(snakeBody[i].x, snakeBody[i].y);
        // draw border
        ctx.strokeStyle = 'white';
        ctx.strokeRect(snakeBody[i].x, snakeBody[i].y, gridSize, gridSize);
    }
}

function drawFood(){
    ctx.fillStyle = 'white';    
    ctx.fillRect(food.x, food.y, gridSize, gridSize);
    ctx.strokeStyle = 'white';
    ctx.strokeRect(food.x, food.y, gridSize, gridSize);
}

function newFood(){
    food = {
            // num between 0*10 to 59*10
            x: Math.round((Math.random()*(iWidth - gridSize)/gridSize))*gridSize,
            y: Math.round((Math.random()*(iHeight - gridSize)/gridSize))*gridSize
        }
    // check if food include in the snackbody.
    if(snakeBody.filter(val => (val.x == food.x && val.y == food.y))[0] !== undefined){
        newFood();
    } else {    
        return food;
    }
}
function setDirection(){
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

}

function isBite(){
    if(snakeBody.filter(val => (val.x == hx && val.y == hy))[0] !== undefined){
        clearInterval(intervalTag);
        ctx.fillStyle = 'red'; 
        ctx.fillRect(hx, hy, gridSize, gridSize);
        // draw border
        ctx.strokeStyle = 'white';
        ctx.strokeRect(hx, hy, gridSize, gridSize);
    } else {
        // add the new head
        snakeBody.unshift({x: hx, y: hy});
    }
}

function eatFood() {
    if(hx === food.x && hy === food.y){
        score++;
        newFood();
    } else {
        // delete the tail
        snakeBody.pop();
    }
}
// stop the snake by press enter
function stopInterval(event) {
    console.log(event.keyCode);
    if(event.keyCode == 32){
        clearInterval(intervalTag);
    } 
}

var intervalTag = setInterval(game, speed);