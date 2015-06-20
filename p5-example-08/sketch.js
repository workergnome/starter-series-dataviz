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

  // store the previous points
  var prevX, prevY;

  // for each item:
  for (var i = 0; i < count; i++){

    // Calculate some values
    var w = width/count-SPACING;
    var h = -data[i]*SCALE;
    var x = (w+5)*i;
    var y = height;
    var c = color(data[i]*25, 100, 100, 200);

    // draw the circle
    noStroke();
    fill(c);
    ellipse(x+w, y+h, sqrt(data[i])*30, sqrt(data[i])*30);

    // reset the colors
    stroke();
    fill(100);

    // draw the line, using the previous points.
    // (skip the first point, 'cause there isn't one previous)
    if (i > 0) {
      line(x+w,y+h,prevX,prevY);
    }

    // draw the marker
    ellipse(x+w, y+h, DIAMETER, DIAMETER);

    // save the current points for the next item
    prevX = x+w;
    prevY = y+h;
  }
}
