// some random numbers
var data = [3, 7, 10, 6, 2];

// some constants
var DIAMETER = 5;
var SCALE = 75;
var SPACING = 5;

//-----------------------------------------------------------------------------
// Setup the sketch
function setup() {
  createCanvas(400, 800);
  noLoop();
  fill(100);
}

//-----------------------------------------------------------------------------
// draw the sketch
function draw() {
  background(240)

  // determine how many items
  var count = data.length;

  // for each item:
  for (var i = 0; i < count; i++){

    var w = width/count-SPACING;
    var h = -data[i]*SCALE;
    var x = (w+5)*i;
    var y = height;
    var c = color(data[i]*25, 100, 100, 200);

    // draw the circle
    noStroke();
    fill(c);
    ellipse(x+w-20, y/2, 30, 30);

    // reset the colors
    stroke();
    fill(100);

    // draw the marker
    ellipse(x+w, y+h, DIAMETER, DIAMETER);

  }
}
