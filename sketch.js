var fixedRect,movingRect;



function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(400, 200, 50, 50);
  fixedRect.shapeColor="green";
  fixedRect.debug=true;

  movingRect= createSprite(500, 200, 50, 100);
  movingRect.shapeColor="green";
  movingRect.debug=true;
}

function draw() {
  background(0);
  
  if(fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 &&
     movingRect.x - fixedRect.x < movingRect.width/2+fixedRect.width/2 &&
     fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2 &&
     movingRect.y - fixedRect.y < movingRect.height/2+fixedRect.height/2 ){
    fixedRect.shapeColor="red";
    movingRect.shapeColor="red";

  } else{

    fixedRect.shapeColor="green";
    movingRect.shapeColor="green";
  }

movingRect.x=mouseX;
movingRect.y=mouseY;

  drawSprites();
}