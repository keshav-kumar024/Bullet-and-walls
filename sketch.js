var bullet,wall,thickness
var speed,weight



function setup() {
  createCanvas(1600,400);
  thickness=random(22,83)
  bullet=createSprite(50, 200, 50, 10);
  wall=createSprite(1200,200,thickness,100)
  speed=random(223,321)
  weight=random(10,52)
  bullet.velocityX=speed

}

function draw() {
background(255,255,255);
if(wall.x-bullet.x<(bullet.width+wall.width)/2){
bullet.velocityX=0
var deformation=0.5*weight*speed*speed/22500
if(deformation>100){
bullet.shapeColor="red"


}
if(deformation<180&&deformation>100){
bullet.shapeColor="yellow"


}
if(deformation<100){
bullet.shapeColor="green"



}



}  
if(hasCollided(bullet,wall)){
bullet.velocityX=0
var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
if(damage>10){
wall.shapeColor="red"



}
if(damage<10){
wall.shapeColor="green"



}


}
  drawSprites();
}
function hasCollided(bullet,wall){
bulletRightEgde=bullet.x+bullet.width
wallLeftEgde=wall.x
if(bulletRightEgde>=wallLeftEgde){
return true



}
return false



}


