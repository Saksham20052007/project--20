var car, wall;
var speed, wieght;

function setup() {
  createCanvas(800,400);
  speed=random(55,90);
  wieght=random(400,1500) 
car = createSprite(50, 200, 50, 50 );
car.shapeColor = "white";
wall = createSprite(600, 200, 60,380 );

    car.velocityX = speed;
  
}

function draw() {
  background("black");


  
  if(car.x-wall.x>car.width/2+wall.width/2){
    car.velocityX = 0;
    var deformation = 0.5*wieght*speed*speed/22500
    if(deformation<80){
       car.shapeColor = "green";
    }
     if(deformation>80 && deformation<180){
      car.shapeColor = "red"; 
    }
    if(deformation>180){
      car.shapeColor = "yellow";
    }
  }

  drawSprites();
}