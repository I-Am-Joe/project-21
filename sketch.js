var thickness,wall;
var bullet,speed,weight;
function setup() {
  bullet = createSprite(10,200,50,50);
  thickness=random(22,83);
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  speed=random(223,321);
  weight=random(30,52);
  wall=createSprite(1200,200,80,height/2)
  wall.shapeColor =color(80,80,80);
  bullet.velocityX=speed;
}

function draw() {
  background(255,255,255);  
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var Damage =0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(Damage>10){
      bullet.shapeColor=color(255,0,0);
    }
    if(Damage<10){
      bullet.shapeColor=color(0,255,0);
    }

  }
  bullet.display();
  wall.display();
}

function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
return false;

}