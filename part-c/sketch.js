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

function keyTyped() {
  if (key === 'r') {
    r += 5;
    document.getElementById('red').textContent = r;
  } else if (key === 'g') {
    g += 5;
    document.getElementById('green').textContent = g;
  } else if (key === 'b') {
    b += 5;
    document.getElementById('blue').textContent = b;
  }
  
  return false; // prevent default
}

function draw() {
 
  fill(r, g, b)

  ellipse(mouseX, mouseY, 30, 30)
}
