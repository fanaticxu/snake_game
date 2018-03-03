console.log("started.");

var getCanvas = document.getElementById("canvas");
var ctx = getCanvas.getContext("2d");

var iWidth = getCanvas.width;
var iHeight = getCanvas.height;
const gridSize = 10;
const speed = 100;

var init_x = getRandomXY();
var init_y = getRandomXY();
var headerX, headerY;
var x = getRandomXY();
var y = getRandomXY();
var Dirction = moveRight;
var intervalTag = 1;

document.addEventListener("keypress", stopInterval.bind(this));
document.addEventListener("keydown", arrowControl.bind(this));


draw(init_x, init_y);

function arrowControl(event) {
    if(event.keyCode == 37){
        stop();
        console.log("left"); 
        Dirction = moveLeft;     
        intervalTag = setInterval(Dirction, speed);
    } else if(event.keyCode == 38){
        stop();
        console.log("up");
        Dirction = moveUp;
        intervalTag = setInterval(Dirction, speed);
    } else if(event.keyCode == 39){
        stop();
        console.log("right");
        Dirction = moveRight;
        intervalTag = setInterval(Dirction, speed);
    } else if(event.keyCode == 40){
        stop();
        console.log("down");
        Dirction = moveDown;
        intervalTag = setInterval(Dirction, speed);
    } else {
        stopInterval(event);
    }
}

function stopInterval(event) {
    if(event.keyCode == 13){
        clearInterval(intervalTag);
    } 
}

// drawGrid()

function getRandomXY() {
    return gridSize*getRandomInt(iWidth/gridSize - 1);
}


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


function draw(x, y){
    ctx.fillStyle = 'green';    
    ctx.fillRect(x,y,gridSize,gridSize);
    console.log(x, y);
    return
}

function clear() {
    ctx.clearRect(x,y,gridSize,gridSize)
}

function moveRight() {
    clear(x,y);
    if(x > iWidth - gridSize){
      x = x - iWidth - gridSize;  
    }     
    x+=gridSize;
    draw(x, y);
    prevDirction = "moveRight";
}

function moveDown() {
    clear(x,y);
    if(y > iHeight - gridSize){
      y = y - iHeight - gridSize;  
    }     
    y+=gridSize;
    draw(x, y);
    prevDirction = "moveDown";
}

function moveLeft() {
    clear(x,y);
    if(x < gridSize){
      x = x + iWidth + gridSize;  
    }     
    x-=gridSize;
    draw(x, y);
    prevDirction = "moveLeft";
}

function moveUp() {
    clear(x,y);
    if(y < gridSize){
      y = y + iHeight + gridSize;  
    }     
    y-=gridSize;
    draw(x, y);
    prevDirction = "moveUp";
}

// move();


var stop = function() {
    clearInterval(intervalTag);
}
// function drawGrid() {
//     var gridOption = {
//         separation: 10,
//         color:'#b3e6ff'
//     }
//     drawGridLines(getCanvas, gridOption);
//     return;
// }

// function drawGridLines(cnv, lineOptions){
//   var iWidth = cnv.width;
//   var iHeight = cnv.height;
//   var ctx = cnv.getContext('2d');
//   ctx.strokeStyle = lineOptions.color;
//   ctx.strokeWidth = 0.5;

//   ctx.beginPath();

//   var iCount = null;
//   var i = null;
//   var x = null;
//   var y = null;

//   iCount = Math.floor(iWidth / lineOptions.separation);

//   for (i = 0; i <= iCount; i++) {
//     x = (i * lineOptions.separation);
//     ctx.moveTo(x, 0);
//     ctx.lineTo(x, iHeight);
//     ctx.stroke();
//   }


//   iCount = Math.floor(iHeight / lineOptions.separation);

//   for (i = 0; i <= iCount; i++) {
//     y = (i * lineOptions.separation);
//     ctx.moveTo(0, y);
//     ctx.lineTo(iWidth, y);
//     ctx.stroke();
//   }

//   ctx.closePath();

//   return;

// }