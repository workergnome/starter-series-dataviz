// some random numbers
var data = [3, 7, 10, 6, 2];

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
    var w = width/count-5;
    var h = -data[i]*75;
    var x = (w+5)*i;
    var y = height;

    // draw the bars
    rect(x, y, w, h);

    // draw the circle
    ellipse(x+w, y+h, 5, 5);

  }
}
