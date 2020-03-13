var sun , sun_animation , planet1 , planet2;

function preload () {
sun_animation = loadImage("sun.png");
}
//  canvas - 1550 , 715

function setup() {
  createCanvas(15,71);
  sun = createSprite(400, 200, 775, 357.5);
  sun.addImage ("su" , sun_animation);

  planet1 = createSprite (4,2, 795 , 357.5);


  planet1 = createSprite (4,2, 795 , 357.5);
}

function draw() {
  background(255);  
  drawSprites();
}