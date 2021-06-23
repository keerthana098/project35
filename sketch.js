var dog, happyDog, dog1, dog2,database, foodS, foodStock, readStock;

function preload()
{
	dog = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}

function setup() {
   database=firebase.database();
  
   foodStock = database.ref('Food');
   foodStock.on("value", readStock);

	createCanvas(1000, 500);
  
  dog1=createSprite(700,350,30,20);
  dog1.addImage(dog);
  dog1.scale = 0.15;
}


function draw() {  
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog1.addImage(happyDog)

  }

  drawSprites();
  fill("white");
  text("Note: Press Up Arrow key to feed the dog", 770,15);
  //add styles here

}
function readStock(){
  foodS=data.val();
}

function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

  database.ref('/').update({
    Food:x
  })
}


