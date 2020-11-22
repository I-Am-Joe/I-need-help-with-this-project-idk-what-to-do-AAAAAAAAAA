class Stone{
    constructor(x, y, radius) {
var options = {
  isStatic:false,
  restitution:0.,
  friction:1,
  density:1.2
}
this.body = Bodies.circle(x, y, radius, width, height, options);
this.image = loadImage("sprites/stone.png");
    this.radius = radius;
    World.add(world, this.body);
}
display(){
  var pos =this.body.position;
  translate(pos.x, pos.y);
  circle(0, 0, this.radius);
}
};