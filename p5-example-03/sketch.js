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

    // calculate some values
    var w = width/count-SPACING;
    var h = -data[i]*SCALE;
    var x = (w+SPACING)*i;
    var y = height;

    // draw the marker
    ellipse(x+w, y+h, DIAMETER, DIAMETER);
  }
}
