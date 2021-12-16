

function preload(){
  imgNavio = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  imgMar = loadAnimation("sea.png");
}

function setup(){
  createCanvas(400,400);


// criando o mar
mar = createSprite(400,200);
mar.addAnimation("imgMar",imgMar);
mar.scale = 0.5;
 

 // criando o navio
navio = createSprite(130,200,30,30);
navio.addAnimation("imgNavio",imgNavio)
navio.scale = 0.25;
}


function draw() {
  background("blue"); 
  mar.velocityX = -1 ;
  drawSprites();

}
