var pos = 360
var counter = 0
var myCounter = 0

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function preload() {
  myImage = loadImage("Images/Background_3.png")
  my_Image = loadImage("Images/Background_2.png")
  cross = loadImage("Images/Cross.png")
}

function draw() {
    background(my_Image)
  
  push()
  translate(width/320*287,height/40*9)
  rotate(pos)
  strokeWeight(3)
  line(0,0,0,-width/20*1)
  pop()
  
  if (pos > 360 ){
      counter ++
      console.log(counter)
      pos = 0;
  }
    
    if (counter > 365){
        myCounter ++
        counter = 0
    }
  
  textSize(windowWidth/40)
  fill(255)
  text(counter + " Days",windowWidth/80*69,windowHeight/20*9)
  text(myCounter + " Years", windowWidth/80*69, windowHeight/20*10)
  
    if (counter >= 14){
      image(cross, windowWidth/80*7,windowHeight/20*3,windowWidth/8,windowHeight/5)
  } // Ant
    if (counter >= 28){
      image(cross, windowWidth/80*14,windowHeight/20*3,windowWidth/8,windowHeight/5)
  } // Bee
    if (myCounter >= 3){
      image(cross, windowWidth/80*22,windowHeight/20*3,windowWidth/8,windowHeight/5)
  } // Octopus
    if (counter >= 10){
      image(cross, windowWidth/80*33,windowHeight/40*5,windowWidth/8,windowHeight/5)
  } //Moth
    if (counter >= 7){
      image(cross, windowWidth/80*43,windowHeight/40*4,windowWidth/8,windowHeight/5)
  } // Mayfly
    if (counter >= 120){
      image(cross, windowWidth/80*53,windowHeight/40*4,windowWidth/8,windowHeight/5)
  } // Dragonfly
    
    if (myCounter >= 1){
    image(cross, windowWidth/80*7,windowHeight/20*3,windowWidth/8,windowHeight/5)
    image(cross, windowWidth/80*14,windowHeight/20*3,windowWidth/8,windowHeight/5)
    image(cross, windowWidth/80*33,windowHeight/40*5,windowWidth/8,windowHeight/5)
    image(cross, windowWidth/80*43,windowHeight/40*4,windowWidth/8,windowHeight/5)
    image(cross, windowWidth/80*53,windowHeight/40*4,windowWidth/8,windowHeight/5)
    } // Less than a year
    
    if (myCounter >= 4){
      image(cross, windowWidth/80*54,windowHeight/40*11,windowWidth/8,windowHeight/5)
  } // Lizard
    if (myCounter >= 6){
      image(cross, windowWidth/80*46,windowHeight/40*11,windowWidth/8,windowHeight/5)
  } // Toucan
    if (myCounter >= 7){
      image(cross, windowWidth/80*35,windowHeight/40*12,windowWidth/8,windowHeight/5)
  } // Deer
    if (myCounter >= 8){
      image(cross, windowWidth/80*25,windowHeight/40*13,windowWidth/8,windowHeight/5)
  } // Humming Bird
    if (myCounter >= 9){
      image(cross, windowWidth/80*16,windowHeight/40*13,windowWidth/8,windowHeight/5)
  } // Kangaroo
    if (myCounter >= 10){
      image(cross, windowWidth/80*7,windowHeight/40*14,windowWidth/8,windowHeight/5)
  } // Swan
    
    if (myCounter >= 12){
      image(cross, windowWidth/80*12,windowHeight/40*21,windowWidth/8,windowHeight/5)
  } // Rabbit
    if (myCounter >= 13){
      image(cross, windowWidth/80*20,windowHeight/40*20,windowWidth/8,windowHeight/5)
  } // Dog
    if (myCounter >= 15){
      image(cross, windowWidth/80*29,windowHeight/40*20,windowWidth/8,windowHeight/5)
  } // Goat
    if (myCounter >= 25){
      image(cross, windowWidth/80*38,windowHeight/40*20,windowWidth/8,windowHeight/5)
  } // Tiger
    if (myCounter >= 30){
      image(cross, windowWidth/80*49,windowHeight/40*19,windowWidth/8,windowHeight/5)
  } // Horse
    
    if (myCounter >= 70){
      image(cross, windowWidth/80*24,windowHeight/40*26,windowWidth/8,windowHeight/5)
  } // Human
    if (myCounter >= 150){
      image(cross, windowWidth/80*33,windowHeight/40*26,windowWidth/8,windowHeight/5)
  } // Tortoise
}

function mouseWheel(event) {
 (event.delta)
 pos += event.delta;
 
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
    backgroundImage(myImage)
    background_Image(my_Image)
}
function backgroundImage(img) {
    
    var x = 0;
    var y = 0;
    var w = width;
    var h = height;
    // default offset is center
    var offsetX = 0.5;
    var offsetY = 0.5;


    var iw = img.width,
        ih = img.height,
        r = Math.min(w / iw, h / ih),
        nw = iw * r,   // new prop. width
        nh = ih * r,   // new prop. height
        cx, cy, cw, ch, ar = 1;


    // decide which gap to fill    
    if (nw < w) ar = w / nw;                             
    if (Math.abs(ar - 1) < 1e-14 && nh < h) ar = h / nh;  // updated
    nw *= ar;
    nh *= ar;


    // calc source rectangle
    cw = iw / (nw / w);
    ch = ih / (nh / h);


    cx = (iw - cw) * offsetX;
    cy = (ih - ch) * offsetY;


    // make sure source rectangle is valid
    if (cx < 0) cx = 0;
    if (cy < 0) cy = 0;
    if (cw > iw) cw = iw;
    if (ch > ih) ch = ih;


    // fill image in dest. rectangle
    image(img, cx, cy, cw, ch,  x, y, w, h);
}
function background_Image(img) {
    
    var x = 0;
    var y = 0;
    var w = width;
    var h = height;
    // default offset is center
    var offsetX = 0.5;
    var offsetY = 0.5;


    var iw = img.width,
        ih = img.height,
        r = Math.min(w / iw, h / ih),
        nw = iw * r,   // new prop. width
        nh = ih * r,   // new prop. height
        cx, cy, cw, ch, ar = 1;


    // decide which gap to fill    
    if (nw < w) ar = w / nw;                             
    if (Math.abs(ar - 1) < 1e-14 && nh < h) ar = h / nh;  // updated
    nw *= ar;
    nh *= ar;


    // calc source rectangle
    cw = iw / (nw / w);
    ch = ih / (nh / h);


    cx = (iw - cw) * offsetX;
    cy = (ih - ch) * offsetY;


    // make sure source rectangle is valid
    if (cx < 0) cx = 0;
    if (cy < 0) cy = 0;
    if (cw > iw) cw = iw;
    if (ch > ih) ch = ih;


    // fill image in dest. rectangle
    image(img, cx, cy, cw, ch,  x, y, w, h);
}