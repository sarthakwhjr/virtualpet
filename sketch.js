var dog,sadDog,happyDog,foodstock;


function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
  milk=loadImage("Images/milk.png");
}

function setup() {
  createCanvas(1000,400);
  feed=createButton("feed the dog")
 feed.position(700,95)
feed.mousePressed(feeddog)

 food=createButton("add food")
 food.position(790,95)
 food.mousePressed(addfood)
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

food=createSprite(400,200,20,20);
food.addImage(milk);
food.scale=0.15;


}

function draw() {
  background(46,139,87);
  drawSprites(); 
}
function feeddog(){
dog.addImage(happyDog)
if(foodobj.getFoodstock()<=0){
foodobj.updateFoodstock(foodobj.getFoodstock()*0)
}
else{
foodobj.updateFoodstock(foodobj.getFoodstock()-1)
}
}
 
function addfood(){
food  = createSprite(400,200,20,20);
food.addImage(milk);
food.scale=0.15;
}
//function to read food Stock


//function to update food stock and last fed time


//function to add food in stock
