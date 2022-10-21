let rectR = 0;
let rectG = 0;
let rectB = 0;
let rectSize = 50;
let rectX = 0;
let rectY = 0;
let rectDir1 = true;
let rectDir2 = true;
let rectDir3 = false;
let rectDir4 = false;
let cirR = 125;
let cirG = 125;
let cirB = 125;
let cirSize = 100;
let cirX = 50;
let cirY = 50;
let cirRight = true;
let cirDown = true;
let cirLeft = false;
let cirUp = false;
let sqR = 255;
let sqG = 255;
let sqB = 255;
let sqX = 0;
let sqY= 0;
let tX = 10;
let tY = 275;
let sqSize = 20;
let sqAngle = 0;
let sqForward = true;
let stR = 60;
let stG = 40;
let stB = 200;
let rectSize2 = 30;
let rectX2 = -30;
let rectY2 = 400;
let rDir1 = true;
let rDir2 = true;
let rDir3 = false;
let rDir4 = false;


function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  strokeWeight(0);

}

function draw() {
  background(60,40,200);

  push();
  strokeWeight(0)
  fill(cirR,cirG,cirB);
  ellipse(cirX,cirY,cirSize);
   if(cirRight) {
    cirX++;
   } else { if (cirDown) {
    cirY++;
   } else { if (cirLeft){
    cirX--;
   } else { if (cirUp) {
    cirY--;
   } else {
    cirRight = true;
    cirDown = true;
   } } } }

   if (cirX > 350) {
    cirRight = false;
    cirLeft = true;}
   if (cirY >350) {
    cirDown = false;
    cirUp = true;}
   if (cirX < 50) {
    cirLeft = false;}
   if (cirY < 50) {
    cirUp = false;}
   pop();

   push();
   strokeWeight(10);
   stroke(stR,stG,stB);
   line(0, 230, 400, 230);
   pop();
 
  push();
  strokeWeight(0)
  fill(rectR,rectG,rectB);
  rect(rectX,rectY,rectSize);
    if (rectDir1){
      rectX++;
      rectY++;
   } else { if (rectDir2) {
      rectX++;
      rectY--;
     } else { if (rectDir3) {
      rectX--;
      rectY++;
     } else { if (rectDir4) {
      rectX--;
      rectY--;
     } else {
      rectDir1 = true;
      rectDir2 = true;
     } } } }

    if (rectY > 175) {
      rectDir1 = false;
    }
    if (rectX > 350) {
      rectDir2 = false;
      rectDir3 = true;
    }
    if (rectY > 175) {
      rectDir3 = false;
      rectDir4 = true;
    }
    if (rectX < 0) {
      rectDir4 = false;
    }
  pop();

  push();
  strokeWeight(0)
  fill(rectR,rectG,rectB);
  rect(rectX2,rectY2,rectSize2);
  if (rDir3) {
    rectX2-=.6;
    rectY2--;
   } else { if (rDir4) {
    rectX2-=.6;
    rectY2++;
   } else {
    if (rDir1){
      rectX2+=.6;
      rectY2--;
   } else { if (rDir2) {
      rectX2+=.6;
      rectY2++;
     } else {
      rectX2 = -30;
      rectY2 = 400;
     }
   } } }

    if (rectY2 < 235) {
      rDir1 = false;
      rDir2 = true;
    }
    if (rectY2 > 370) {
      rDir2 = false;
      rDir1 = true;
    }
    if (rectX2 > 400) {
      rDir1 = false;
      rDir2 = false;
    }   
    
  
    
    
  pop();

   push();
   rectMode(CENTER);
   strokeWeight(0)
   fill (sqR,sqG,sqB)
   if (sqForward) {
    sqAngle+=2;
    tX++;
  } else {
    tX--;
    sqAngle-=2;
  }
  if (tX > 390) {
    sqForward = false;
  }
  if (tX < 10) {
    sqForward = true;
  }
   translate(tX,tY);
   rotate (sqAngle);
   square (sqX,sqY,sqSize);
  pop();

   
}

function mouseClicked() {
  if (mouseClicked) {
    rectR = random(255);
    rectG = random(255);
    rectB = random(255);
    cirR = random(255);
    cirG = random(255);
    cirB = random(255);
    sqR = random(255);
    sqG = random(255);
    sqB = random(255);
    stR = random(255);
    stG = random(255);
    stB = random(255);
  }
}
