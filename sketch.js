let ground;
let lander;
var lander_img;
var bg_img;

var vy = 0;
var g = 0.05;

function preload()
{
  lander_img = loadImage("normal.png");
  bg_img = loadImage("bg.png");

}

function setup() {
  createCanvas(1000,700);
  frameRate(80);

  lander = createSprite(200,50,30,30);
  lander.addImage(lander_img);
  lander.scale = 0.1;
  lander.setCollider("rectangle",0,0,200,200)
  
  invisibleGround = createSprite(100,500,windowWidth,10)
  invisibleGround.visible = false

  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
  image(bg_img,0,0);
  push()
  fill(255);
  text("Vertical Velocity: "+round(vy),800,75);
  pop();

  //fall down
  vy +=g;
  lander.position.y+=vy;

  drawSprites();

  console.log("inviground:"+invisibleGround.y)
  console.log("lander:"+lander.y)

if(lander.collide(invisibleGround)){
  g = 0
  vy = 0
  
}


}

function keyPressed()
{
  if(keyCode==UP_ARROW&&lander.y<invisibleGround.y-15)
  {
    upward_thrust();
    lander.changeAnimation('thrusting');
    thrust.nextFrame();
    
  }
}

function upward_thrust()
{
  vy = -1;
}

