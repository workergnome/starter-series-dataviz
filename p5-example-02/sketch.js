// some random numbers
var data = [15012, 8271, 30193, 1189, 9913, 16000, 92481, 
            49801, 100407, 2910, 3809, 8018, 61528, 18083, 
            38691, 1800 ];

//-----------------------------------------------------------------------------
// Setup the sketch
function setup() {
  createCanvas(1000, 400);
  noLoop(); 
  textAlign(CENTER);
}

//-----------------------------------------------------------------------------
// draw the sketch
function draw() {

  // determine how many items
  var count = data.length;

  // for each item:
  for (var i = 0; i < count; i++){

    //set the color
    var c = color(255/count*i, 100, 100, 200);
    fill(c);
    noStroke();

    // calculate the radius
    var area = data[i];
    var radius = sqrt(area/PI);

    // draw the circle
    var x = 50 + (width/count)*i;
    var y = height/2;
    ellipse(x, y, radius, radius);
    
    // draw the legend
    fill(0);
    text(area,x,height-50);
    stroke();
    line(x,y+radius/2,x,height-65);

  }
}
