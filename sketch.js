var ballfixed,ballmoving;
function setup() {
  createCanvas(1200,800);
  ballmoving=createSprite(400, 200, 20, 80);
  ballfixed=createSprite(200,200,50,80);
  ballmoving.debug=true;
  ballfixed.debug=true;

  
}

function draw() {
  //background(r,g,b)
  background(0,0,0);  
  ballmoving.x=mouseX;
  ballmoving.y=mouseY;
  ballmoving.shapeColor="green";
  ballfixed.shapeColor="green";

  if(ballmoving.x-ballfixed.x<ballfixed.width/2+ballmoving.width/2 &&
    ballfixed.x-ballmoving.x<ballfixed.width/2+ballmoving.width/2 &&
    ballmoving.y-ballfixed.y<ballfixed.height/2+ballmoving.height/2 &&
    ballfixed.y-ballmoving.y<ballfixed.height/2+ballmoving.height/2){
    ballmoving.shapeColor="red";
    ballfixed.shapeColor="red";
  }
  else{
    ballmoving.shapeColor="green";
    ballfixed.shapeColor="green";
  }
  
  drawSprites();
  
}

