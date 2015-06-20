// some random numbers
var data = [3, 7, 10, 6, 2];
var data2 =[5, 8, 1, 8, 3];
var data3 = ['Cat', 'Dog', 'Cat', 'Cat', 'Dog'];

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

    // Calculate some values
    var w = width/count-5;
    var h = -data[i]*75;
    var x = (w+5)*i;
    var y = height;
    var c = color((data3[i] == "Cat" ? 0 : 255), 100, 100, 200);

    // draw the circle
    noStroke();
    fill(c);
    ellipse(x+w, y+h, sqrt(data2[i])*30, sqrt(data2[i])*30);

    // reset the colors
    stroke();
    fill(100);

  }
}
