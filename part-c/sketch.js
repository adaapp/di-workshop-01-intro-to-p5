var r = 0;
var g = 0;
var b = 0;
var resetButton = document.getElementById('reset')

resetButton.addEventListener('click', reset(), false);

function reset () {
    if (r>0 )
  r = 0;
  document.getElementById('red').textContent = r;

  g = 0;
  document.getElementById('green').textContent = g;

  b = 0;
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
