// some random numbers
var data = [3, 7, 10, 6, 2];
var data2 =[5, 8, 1, 8, 3];
var data3 = ['Cat', 'Dog', 'Cat', 'Cat', 'Dog'];

//-----------------------------------------------------------------------------
// Setup the sketch
function setup() {
  createCanvas(400, 800);
  noLoop();
  noStroke();
  fill(100);
}

//-----------------------------------------------------------------------------
// draw the sketch
function draw() {
  background(240)

  // determine how many items
  var count = data.length;

  // Draw the legend
  var catColor =  color(0, 100, 100, 200)
  var dogColor =  color(255, 100, 100, 200)

  fill(catColor);
  rect(10, height-50, 30, 30)
  text("CAT",55, height- 30)

  fill(dogColor);
  rect(100, height-50, 30, 30)
  text("DOG",155, height- 30)

  // for each item:
  for (var i = 0; i < count; i++){

    // Calculate some values
    var w = width/count-5;
    var h = -data[i]*75;
    var x = (w+5)*i;
    var y = height;
    var c = data3[i] == "Cat" ? catColor : dogColor;

    // draw the circle
    fill(c);
    ellipse(x+w, y+h, sqrt(data2[i])*30, sqrt(data2[i])*30);
  }

}
