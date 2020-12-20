var fixedRect,movingRect;
function setup() { 
  createCanvas(800,400);
fixedRect = createSprite (200,200,20,20);
fixedRect.shapeColor = ("green");

movingRect = createSprite (350,350,20,20);
movingRect.shapeColor = ("green");

altRect = createSprite(300,300,50,50);
altRect.shapeColor = ("blue");

}

function draw() {
  background(255,255,255);  
  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
   if (isTouching (movingRect,altRect)) 
{
  movingRect.shapeColor = ("red");
  altRect.shapeColor = ("red");
}
else {
  altRect.shapeColor = ("blue");
  movingRect.shapeColor = ("green");

}
drawSprites();



}

function isTouching (object1,object2) {
  if (object1.x - object2.x < object1.width/2 + object2.width/2 && object2.x - object1.x < object2.width/2 + object1.width/2
    && object2.y - object1.y < object2.height/2 + object1.height/2 && object1.y - object2.y <  object1.height/2 + object2.height/2    )
    {
return true; 

    }
else { return false; } 





}