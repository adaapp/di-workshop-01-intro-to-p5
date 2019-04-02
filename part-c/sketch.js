var r = 0;
var g = 0;
var b = 0;

var resetButton = document.getElementById('reset');
resetButton.onclick = reset;

function reset () {
  r = 0;
  g = 0;
  b = 0;
  document.getElementById('red').textContent = r;
  document.getElementById('green').textContent = g;
  document.getElementById('blue').textContent = b;
}

function setup() {
  createCanvas(600, 600)
  background(0, 0, 0)
}

function draw() {
 
  fill(r, g, b)

  ellipse(mouseX, mouseY, 30, 30)
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