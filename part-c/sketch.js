const defaultBGCol = 0;

var r = 0;
var g = 0;
var b = 0;
var brushSize = 30;

var resetButton = document.getElementById('reset');
resetButton.onclick = reset;

var subtractBrush = document.getElementById('subtract');
var addBrush = document.getElementById('add');

subtractBrush.onclick = minusBrush;
addBrush.onclick = plusBrush;


function minusBrush(){
  brushSize -= 1;
  document.getElementById('brushSizeVal').textContent = brushSize
}

function plusBrush(){
  brushSize += 1;
  document.getElementById('brushSizeVal').textContent = brushSize
}

function reset () {
  r = 0;
  g = 0;
  b = 0;
  document.getElementById('red').textContent = r;
  document.getElementById('green').textContent = g;
  document.getElementById('blue').textContent = b;
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  background(defaultBGCol)
}

function draw() {
 
  fill(r, g, b)

  ellipse(mouseX, mouseY, brushSize, brushSize)

    if (keyIsDown (82)) {
      r += 1;
      if(r > 255){
        r = 255;
      }
      document.getElementById('red').textContent = r;
    }
    if (keyIsDown (71)) {
      g += 1;
      if(g > 255){
        g = 255;
      }
      document.getElementById('green').textContent = g;
    }
    if (keyIsDown (66)) {
      b += 1;
      if(b > 255){
        b = 255;
      }
      document.getElementById('blue').textContent = b;
    }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}