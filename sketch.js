var points = [];
// var button;
var canvas;
const INT_MAX = 100000;
function setup() {
  canvas = createCanvas(480,480);
  canvas.mousePressed(addPoint);
 
  // button = createButton("Clear");
  // button.mousePressed(clearPoints);
}

// function clearPoints(){
//   points.pop();
// }

function addPoint(){
  points.push(new Point(mouseX,mouseY));
}

function draw() {
  background(31);
  // console.log(points.length);
  var checked = [];
  var unchecked = [];

  for(var i=0;i<points.length;i++){
    unchecked.push(points[i]);
  }

  var start = unchecked[0];
  checked.push(start);
  unchecked.splice(0, 1);

  while(unchecked.length>0){
    var min = INT_MAX;
    var cIndex, uIndex;

    for(var i=0;i<checked.length;i++){
      for(var j=0;j<unchecked.length;j++){
        var p1 = checked[i];
        var p2 = unchecked[j];
        var d = dist(p1.x,p1.y,p2.x,p2.y);
        if(d < min){
          min = d;
          cIndex = i;
          uIndex = j;
        }
      }
    }
    strokeWeight(4);
    stroke(random(50,230));
    
    line(checked[cIndex].x, checked[cIndex].y, unchecked[uIndex].x, unchecked[uIndex].y);
    checked.push(unchecked[uIndex]);
    unchecked.splice(uIndex, 1);
  }

 for(var i=0;i<points.length;i++){
  points[i].show();
 }
}