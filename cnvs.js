var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.height = 100;
canvas.width  = 300;

var ob = function(x,y,clr){
    this.x = x;
    this.y = y;
    this.clr = clr;
}

var centerx  = (window.innerWidth/2-240)/20;
var centery = 60;
var scalerx = 100 ,scalery = 5;

var mousex=0,mousey=0;
var thresholdx=0,thresholdy=0;

var str = "Jay Rathod";
var layers = new Array();

var first = new ob((window.innerWidth/2-240)/20,60, "tomato"); //yellow

var middle = new ob((window.innerWidth/2-240)/20,60,"aquamarine");   //red

var bottom = new ob((window.innerWidth/2-240)/20,60,"white");

// layers.push(top);
layers.push(first);
layers.push(middle);
layers.push(bottom);


requestAnimationFrame(draw);
function draw(){

    //calculate threshold
    thresholdx = (centerx-mousex)/scalerx;
    thresholdy = (centery-mousey)/scalerx;

    layers[0].x = centerx-thresholdx;
    layers[2].x = centerx+thresholdx;
    layers[0].y = centery-thresholdy;
    layers[2].y = centery+thresholdy;

    c.clearRect(0,0,window.innerWidth,window.innerHeight);
    var i;
    c.font = "50px Pacifico";
    c.beginPath();
    c.globalAlpha = 0.6;
    for(i=0;i<layers.length;i++){
        console.log(layers[i]);
        c.fillStyle = layers[i].clr;
        c.fillText(str,layers[i].x,layers[i].y);
    }
    c.closePath();

    requestAnimationFrame(draw);
}

window.onmousemove = function(e) {
    mousex = e.x;
    mousey = e.y;
}

// var canvas = document.querySelector('canvas');
// var c = canvas.getContext('2d');
// canvas.height = 100 ;
// canvas.width  =  50;

// var ob = function(x,y,clr){
//     this.x = x;
//     this.y = y;
//     this.clr = clr;
// }

// var centerx  = window.innerWidth/50 - 240;
// var centery = 40;
// var scalerx = 10 ,scalery = 5;

// var mousex=0,mousey=0;
// var thresholdx=0,thresholdy=0;

// var str = "Jay Rathod";
// var layers = new Array();

// var first = new ob(window.innerWidth/50 - 240,40, "aquamarine"); //yellow

// var middle = new ob(window.innerWidth/50 - 240,40,"aqua");   //red

// var bottom = new ob(window.innerWidth/50 - 240,40 ,"teal");

// // layers.push(top);
// layers.push(first);
// layers.push(middle);
// layers.push(bottom);


// requestAnimationFrame(draw);
// function draw(){

//     //calculate threshold
//     thresholdx = (centerx-mousex)/scalerx;
//     thresholdy = (centery-mousey)/scalerx;

//     layers[0].x = centerx-thresholdx;
//     layers[2].x = centerx+thresholdx;
//     layers[0].y = centery-thresholdy;
//     layers[2].y = centery+thresholdy;

//     c.clearRect(0,0,window.innerWidth,window.innerHeight);
//     var i;
//     c.font = "5px Pacifico";
//     c.beginPath();
//     c.globalAlpha = 0.6;
//     for(i=0;i<layers.length;i++){
//         console.log(layers[i]);
//         c.fillStyle = layers[i].clr;
//         c.fillText(str,layers[i].x,layers[i].y);
//     }
//     c.closePath();

//     requestAnimationFrame(draw);
// }

// window.onmousemove = function(e) {
// 	mousex = e.x;
// 	mousey = e.y;
// }
