console.log("started.");

var getCanvas = document.getElementById("canvas");
var ctx = getCanvas.getContext("2d");
var x = 0;
var y = 0;

document.addEventListener("keydown", arrowControl.bind(this));
// ctx.fillRect(0,0,8,8);
// // ctx.stroke();
// ctx.fillRect(x,y,8,8);
// ctx.fillStyle = 'green';

function arrowControl(event) {
    event.keyCode == 37 ? console.log("left") : event.keyCode == 38 ? console.log("up") : event.keyCode == 39 ? console.log("right") : event.keyCode == 40 ? console.log("down") : console.log(event.keyCode);
}

// drawGrid()
var init_x, init_y;
init_x = 10*getRandomInt(59);
init_y = 10*getRandomInt(59);

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


function draw(x, y){
    ctx.fillStyle = 'green';    
    ctx.fillRect(x,y,10,10);
    console.log(x, y);
    return
}

function clear() {
    ctx.clearRect(x,y,10,10)
}

function move() {
    if(x < 590){        
        clear(x,y);
        x+=10;
        draw(x, y);
    }
}

draw(init_x, init_y);
move();
// setInterval ( move, 500 );


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