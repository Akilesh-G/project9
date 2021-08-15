var box;
function setup() {
  createCanvas(400,400);
  background(0)
  box=createSprite(200,200,20,20)
}

function draw() 
{
  
if(keyIsDown(UP_ARROW)){
 background("red");
}
if(keyIsDown(DOWN_ARROW)){
  background("blue");
 }
 if(keyIsDown(RIGHT_ARROW)){
  background("yellow");
 }
 if(keyIsDown(LEFT_ARROW)){
  background("pink");
 }
drawSprites();

}


