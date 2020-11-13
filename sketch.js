var gameState = "start";

function preload() {
  logoImg = loadImage("images/The last survivor.jpg");
  normalBg = loadImage("normalBG/BG.png");
  topleft1Img = loadImage("normalBG/Tiles/2.png");   // the top left 1      //2
  topleft2Img = loadImage("normalBG/Tiles/3.png");   // the top left 2      //3
  topleft3Img = loadImage("normalBG/Tiles/9.png");   // the top left 3      //9
  topleft4Img = loadImage("normalBG/Tiles/16.png");  // the top left 4      //16

  middleleft1Img = loadImage("normalBG/Tiles/13.png");                              
  middleleft2Img = loadImage("normalBG/Tiles/14.png");
  middleleft3Img = loadImage("normalBG/Tiles/15.png");

  alanStand = loadAnimation("../Alan/Idle__000.png","../Alan/Idle__001.png");
  alanRun = loadAnimation("Alan/Run__000.png","Alan/Run__001.png","Alan/Run__002.png","Alan/Run__003.png","Alan/Run__004.png","Alan/Run__005.png","Alan/Run__006.png");
  alanJump = loadAnimation("Alan/Jump__000.png","Alan/Jump__001.png","Alan/Jump__002.png","Alan/Jump__003.png","Alan/Jump__004.png","Alan/Jump__005.png","Alan/Jump__006.png","Alan/Jump__007.png","Alan/Jump__008.png","Alan/Jump__009.png");
  alanAttack = loadAnimation("Alan/Attack__000.png","Alan/Attack__001.png","Alan/Attack__002.png","Alan/Attack__003.png","Alan/Attack__004.png","Alan/Attack__005.png","Alan/Attack__006.png","Alan/Attack__007.png","Alan/Attack__008.png","Alan/Attack__009.png");
  alanDead = loadAnimation("Alan/Dead__000.png","Alan/Dead__001.png","Alan/Dead__002.png","Alan/Dead__003.png","Alan/Dead__004.png","Alan/Dead__005.png","Alan/Dead__006.png","Alan/Dead__007.png","Alan/Dead__008.png","Alan/Dead__009.png");
  
  sophiaStand = loadImage("../Sophia/Idle__000.png");
  //sophiaRun = loadAnimation("Sophia/Run__000","Sophia/Run__001","Sophia/Run__002","Sophia/Run__003","Sophia/Run__004","Sophia/Run__005","Sophia/Run__006","Sophia/Run__007","Sophia/Run__008","Sophia/Run__009");
  //sophiaJump = loadAnimation("Sophia/Jump__000","Sophia/Jump__001","Sophia/Jump__002","Sophia/Jump__003","Sophia/Jump__004","Sophia/Jump__005","Sophia/Jump__006","Sophia/Jump__007","Sophia/Jump__008","Sophia/Jump__009");

}

function setup() {
  createCanvas(1200,800);

  logo = createSprite(600,50);
  logo.addImage("logo",logoImg);

  
}

function draw() {
  background(0);  
  if(gameState === "start") {
    /*textSize(30);
    fill("red");
    text("The Last Survivor", 450,50);*/
    textSize(30);
    fill("red");
    text("Alan and sophia were travelling through a forest. In their way they found a map. The map ",25,200);
    text("shows a way to a secret place where there's a lot of money. They thought to go to ",25, 230);
    text("the place and collect the money for the purpose of devoloping their village.",25,260);
    text("So, help Alan and sophia to collect the money!",25,330);
    text("The one with more money at the end will be the hero of the village", 25,360);
    text("(HINT : Press Arrow keys to control Alan and press A,S,D,W keys for Sophia)",25,390);
    textSize(35);
    text("Press Space to start the game",300,500);
    if(keyCode === 32) {
      gameState = "play";
    }
  }
  if(gameState === "play") {
    logo.visible = false;
    background(255);
    background(normalBg);
    
    alan = createSprite(30,645);
    alan.addAnimation("alan",alanStand);
    alan.addAnimation("jump", alanJump);
    alan.scale = 0.15;
    
    sophia = createSprite(70,645);
    sophia.addImage("sophia",sophiaStand);
    sophia.scale =  0.15;

    if(keyCode === 38) {          // up arrow
      alan.velocityY = -10;
      alan.changeAnimation("jump",alanJump);
    }
    alan.velocityY = alan.velocityY + 0.5;

    /*topleft8 = createSprite(35,200);                // 1st row 1st one
    topleft8.addImage("topleft6",topleft1Img);      // this is top left 1 image only 
    topleft8.scale = 0.6
    topleft5 = createSprite(110,200);                // 1st row 2st one
    topleft5.addImage("topleft5",topleft1Img);      // this is top left 1 image only 
    topleft5.scale = 0.6;
    topleft1 = createSprite(185,200);               // 1st row 3nd one
    topleft1.addImage("topleft1",topleft1Img);    
    topleft1.scale = 0.6;
    topleft2 = createSprite(255,200);               // 1st row 4rd one
    topleft2.addImage("topleft2",topleft2Img);      
    topleft2.scale = 0.6;

    topleft6 = createSprite(35,270);                // 2nd row 2st one
    topleft6.addImage("topleft6",topleft3Img);      // this is top left 3 image only 
    topleft6.scale = 0.6;
    topleft3 = createSprite(110,270);               // 2nd row 3nd one
    topleft3.addImage("topleft3",topleft3Img);       
    topleft3.scale = 0.6;
    topleft4 = createSprite(185,270);               // 2nd row 4rd one
    topleft4.addImage("topleft4",topleft3Img);
    topleft4.scale = 0.6;
    topleft7 = createSprite(255,270);                // 2nd row 1st one
    topleft7.addImage("topleft7",topleft4Img);      // this is top left 1 image only 
    topleft7.scale = 0.6;

    middleleft1 = createSprite(210,500);
    middleleft1.addImage("middleleft1",middleleft1Img);
    middleleft1.scale = 0.6;
    middleleft2 = createSprite(280,500);
    middleleft2.addImage("middleleft1",middleleft2Img);
    middleleft2.scale = 0.6;
    middleleft3 = createSprite(350,500);
    middleleft3.addImage("middleleft1",middleleft3Img);
    middleleft3.scale = 0.6;

    bottomleft1 = createSprite(30,710);                // 1st row 1st one
    bottomleft1.addImage("bottomleft1",topleft1Img);      // this is top left 1 image only 
    bottomleft1.scale = 0.5;
    bottomleft2 = createSprite(90,710);                // 1st row 2st one
    bottomleft2.addImage("bottomleft2",topleft1Img);      // this is top left 1 image only 
    bottomleft2.scale = 0.5;
    bottomleft3 = createSprite(150,710);               // 1st row 3nd one
    bottomleft3.addImage("bottomleft3",topleft1Img);    
    bottomleft3.scale = 0.5;
    bottomleft4 = createSprite(210,710);                 // 1st row 4th one
    bottomleft4.addImage("bottomleft4",topleft2Img);      
    bottomleft4.scale = 0.5;

    bottomleft1 = createSprite(255,770);                // 2nd row 4th one
    bottomleft1.addImage("topleft7",topleft4Img);      
    bottomleft1.scale = 0.5;

    alan.collide(bottomleft1);
    alan.collide(bottomleft2);
    alan.collide(bottomleft3);
    alan.collide(bottomleft4);*/
  }
  drawSprites();
}

