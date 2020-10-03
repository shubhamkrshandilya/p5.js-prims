function Point(x,y){
    this.x = x;
    this.y = y;
    this.radius = 5;
    this.show = function(){
        ellipse(this.x, this.y, 2*this.radius, 2*this.radius);
    }
}