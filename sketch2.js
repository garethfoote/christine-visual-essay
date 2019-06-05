var imgm1p1
var imgm1p2
var imgm1p3
var imgm1p4
var imgm1p5

var imgm2p1
var imgm2p2
var imgm2p3
var imgm2p4
var imgm2p5

var imgm3p1
var imgm3p2
var imgm3p3
var imgm3p4
var imgm3p5

var imgm4p1
var imgm4p2
var imgm4p3
var imgm4p4
var imgm4p5

var imgm5p1
var imgm5p2
var imgm5p3
var imgm5p4
var imgm5p5

var musclefat1
var musclefat2
var musclefat3
var musclefat4
var musclefat5

var muscle1
var muscle2
var muscle3
var muscle4
var muscle5
var muscle6
var muscle7
var muscle8

var perfect1
var perfect2
var perfect3
var perfect4
var perfect5
var perfect6

var m
var f

function preload(){
  imgm1p1 = loadImage('assets/img/man/1M/1M1P.png');
  imgm1p2 = loadImage('assets/img/man/1M/1M2P.png');
  imgm1p3 = loadImage('assets/img/man/1M/1M3P.png');
  imgm1p4 = loadImage('assets/img/man/1M/1M4P.png');
  imgm1p5 = loadImage('assets/img/man/1M/1M5P.png');

  imgm2p1 = loadImage('assets/img/man/2M/2M1P.png');
  imgm2p2 = loadImage('assets/img/man/2M/2M2P.png');
  imgm2p3 = loadImage('assets/img/man/2M/2M3P.png');
  imgm2p4 = loadImage('assets/img/man/2M/2M4P.png');
  imgm2p5 = loadImage('assets/img/man/2M/2M5P.png');

  imgm3p1 = loadImage('assets/img/man/3M/3M1P.png');
  imgm3p2 = loadImage('assets/img/man/3M/3M2P.png');
  imgm3p3 = loadImage('assets/img/man/3M/3M3P.png');
  imgm3p4 = loadImage('assets/img/man/3M/3M4P.png');
  imgm3p5 = loadImage('assets/img/man/3M/3M5P.png');

  imgm4p1 = loadImage('assets/img/man/4M/4M1P.png');
  imgm4p2 = loadImage('assets/img/man/4M/4M2P.png');
  imgm4p3 = loadImage('assets/img/man/4M/4M3P.png');
  imgm4p4 = loadImage('assets/img/man/4M/4M4P.png');
  imgm4p5 = loadImage('assets/img/man/4M/4M5P.png');

  imgm5p1 = loadImage('assets/img/man/5M/5M1P.png');
  imgm5p2 = loadImage('assets/img/man/5M/5M2P.png');
  imgm5p3 = loadImage('assets/img/man/5M/5M3P.png');
  imgm5p4 = loadImage('assets/img/man/5M/5M4P.png');
  imgm5p5 = loadImage('assets/img/man/5M/5M4P.png');

  musclefat1 = loadImage('assets/img/man/background/muscle-fat.png');
  musclefat2 = loadImage('assets/img/man/background/muscle-fat1.png');
  musclefat3 = loadImage('assets/img/man/background/muscle-fat2.png');
  musclefat4 = loadImage('assets/img/man/background/muscle-fat3.png');
  musclefat5 = loadImage('assets/img/man/background/muscle-fat4.png');
  musclefat6 = loadImage('assets/img/man/background/muscle-fat5.png');

  muscle1 = loadImage('assets/img/man/background/muscle1.png');
  muscle2 = loadImage('assets/img/man/background/muscle2.png');
  muscle3 = loadImage('assets/img/man/background/muscle3.png');
  muscle4 = loadImage('assets/img/man/background/muscle4.png');
  muscle5 = loadImage('assets/img/man/background/muscle5.png');
  muscle6 = loadImage('assets/img/man/background/muscle6.png');
  muscle7 = loadImage('assets/img/man/background/muscle7.png');
  muscle8 = loadImage('assets/img/man/background/muscle8.png');

  perfect1 = loadImage('assets/img/man/background/perfect.png');
  perfect2 = loadImage('assets/img/man/background/perfect1.png');
  perfect3 = loadImage('assets/img/man/background/perfect2.png');
  perfect4 = loadImage('assets/img/man/background/perfect3.png');
  perfect5 = loadImage('assets/img/man/background/perfect4.png');
  perfect6 = loadImage('assets/img/man/background/perfect5.png');

}

function setup(){
  createCanvas(windowWidth, windowHeight+75);
  textSize(15);
  noStroke();

  mSlider = createSlider(1, 5, 0, 1);
  mSlider.position(200, 350);
  mSlider.style('width', '500px');
  pSlider = createSlider(1, 5, 0, 1);
  pSlider.position(200, 600);
  pSlider.style('width', '500px');

  textFont('Futura');
};

function draw(){
  m = mSlider.value();
  p = pSlider.value();

  fill(68,68,68);
  rect(150,200,600,600);

  fill(255);
  textSize(30);
  text('muscles', 210, 300);
  text('fat', 210, 550);
  textSize(15);
  text('less', 195, 400);
  text('more', 680, 400);
  text('less', 195, 650);
  text('more', 680, 650);

  if (m == 1 && p== 1) {
      image(muscle1, 0, -200, muscle1.width/2.8, muscle1.height/2.8);
      fill(68,68,68);
      rect(150,200,600,600);
      fill(255);
      textSize(30);
      text('muscles', 210, 300);
      text('fat', 210, 550);
      textSize(15);
      text('less', 195, 400);
      text('more', 680, 400);
      text('less', 195, 650);
      text('more', 680, 650);
      image(imgm1p1, 800, 50, imgm1p1.width/2, imgm1p1.height/2);
    }
    if (m == 1 && p== 2) {
      image(muscle3, 0, -200, muscle3.width/2.8, muscle3.height/2.8);
      fill(68,68,68);
      rect(150,200,600,600);
      fill(255);
      textSize(30);
      text('muscles', 210, 300);
      text('fat', 210, 550);
      textSize(15);
      text('less', 195, 400);
      text('more', 680, 400);
      text('less', 195, 650);
      text('more', 680, 650);
      image(imgm1p2, 800, 50, imgm1p2.width/2, imgm1p2.height/2);
    }
    if (m == 1 && p== 3) {
      image(musclefat2, 0, -200, musclefat2.width/2.8, musclefat2.height/2.8);
      fill(68,68,68);
      rect(150,200,600,600);
      fill(255);
      textSize(30);
      text('muscles', 210, 300);
      text('fat', 210, 550);
      textSize(15);
      text('less', 195, 400);
      text('more', 680, 400);
      text('less', 195, 650);
      text('more', 680, 650);
      image(imgm1p3, 800, 50, imgm1p3.width/2, imgm1p3.height/2);
    }
    if (m == 1 && p== 4) {
      image(musclefat4, 0, -200, musclefat4.width/2.8, musclefat4.height/2.8);
      fill(68,68,68);
      rect(150,200,600,600);
      fill(255);
      textSize(30);
      text('muscles', 210, 300);
      text('fat', 210, 550);
      textSize(15);
      text('less', 195, 400);
      text('more', 680, 400);
      text('less', 195, 650);
      text('more', 680, 650);
      image(imgm1p4, 800, 50, imgm1p4.width/2, imgm1p4.height/2);
    }
    if (m == 1 && p== 5) {
      image(musclefat3, 0, -200, musclefat3.width/2.8, musclefat3.height/2.8);
      fill(68,68,68);
      rect(150,200,600,600);
      fill(255);
      textSize(30);
      text('muscles', 210, 300);
      text('fat', 210, 550);
      textSize(15);
      text('less', 195, 400);
      text('more', 680, 400);
      text('less', 195, 650);
      text('more', 680, 650);
      image(imgm1p5, 800, 50, imgm1p5.width/2, imgm1p5.height/2);
    }
    if (m == 2 && p== 1) {
      image(muscle5, 0, -200, muscle5.width/2.8, muscle5.height/2.8);
      fill(68,68,68);
      rect(150,200,600,600);
      fill(255);
      textSize(30);
      text('muscles', 210, 300);
      text('fat', 210, 550);
      textSize(15);
      text('less', 195, 400);
      text('more', 680, 400);
      text('less', 195, 650);
      text('more', 680, 650);
      image(imgm2p1, 800, 50, imgm2p1.width/2, imgm2p1.height/2);
    }
    if (m == 2 && p== 2) {
      image(musclefat3, 0, -200, musclefat3.width/2.8, musclefat3.height/2.8);
      fill(68,68,68);
      rect(150,200,600,600);
      fill(255);
      textSize(30);
      text('muscles', 210, 300);
      text('fat', 210, 550);
      textSize(15);
      text('less', 195, 400);
      text('more', 680, 400);
      text('less', 195, 650);
      text('more', 680, 650);
      image(imgm2p2, 800, 50, imgm2p2.width/2, imgm2p2.height/2);
    }
    if (m == 2 && p== 3) {
      image(musclefat5, 0, -200, musclefat5.width/2.8, musclefat5.height/2.8);
      fill(68,68,68);
      rect(150,200,600,600);
      fill(255);
      textSize(30);
      text('muscles', 210, 300);
      text('fat', 210, 550);
      textSize(15);
      text('less', 195, 400);
      text('more', 680, 400);
      text('less', 195, 650);
      text('more', 680, 650);
      image(imgm2p3, 800, 50, imgm2p3.width/2, imgm2p3.height/2);
    }
    if (m == 2 && p== 4) {
      image(musclefat1, 0, -200, musclefat1.width/2.8, musclefat1.height/2.8);
      fill(68,68,68);
      rect(150,200,600,600);
      fill(255);
      textSize(30);
      text('muscles', 210, 300);
      text('fat', 210, 550);
      textSize(15);
      text('less', 195, 400);
      text('more', 680, 400);
      text('less', 195, 650);
      text('more', 680, 650);
      image(imgm2p4, 800, 50, imgm2p4.width/2, imgm2p4.height/2);
    }
    if (m == 2 && p== 5) {
      image(musclefat3, 0, -200, musclefat3.width/2.8, musclefat3.height/2.8);
      fill(68,68,68);
      rect(150,200,600,600);
      fill(255);
      textSize(30);
      text('muscles', 210, 300);
      text('fat', 210, 550);
      textSize(15);
      text('less', 195, 400);
      text('more', 680, 400);
      text('less', 195, 650);
      text('more', 680, 650);
      image(imgm2p5, 800, 50, imgm2p5.width/2, imgm2p5.height/2);
    }
    if (m == 3 && p== 1) {
      image(muscle8, 0, -200, muscle8.width/2.8, muscle8.height/2.8);
      fill(68,68,68);
      rect(150,200,600,600);
      fill(255);
      textSize(30);
      text('muscles', 210, 300);
      text('fat', 210, 550);
      textSize(15);
      text('less', 195, 400);
      text('more', 680, 400);
      text('less', 195, 650);
      text('more', 680, 650);
      image(imgm3p1, 800, 50, imgm3p1.width/2, imgm3p1.height/2);
    }
    if (m == 3 && p== 2) {
      image(muscle6, 0, -200, muscle6.width/2.8, muscle6.height/2.8);
      fill(68,68,68);
      rect(150,200,600,600);
      fill(255);
      textSize(30);
      text('muscles', 210, 300);
      text('fat', 210, 550);
      textSize(15);
      text('less', 195, 400);
      text('more', 680, 400);
      text('less', 195, 650);
      text('more', 680, 650);
      image(imgm3p2, 800, 50, imgm3p2.width/2, imgm3p2.height/2);
    }
    if (m == 3 && p== 3) {
      image(musclefat1, 0, -200, musclefat1.width/2.8, musclefat1.height/2.8);
      fill(68,68,68);
      rect(150,200,600,600);
      fill(255);
      textSize(30);
      text('muscles', 210, 300);
      text('fat', 210, 550);
      textSize(15);
      text('less', 195, 400);
      text('more', 680, 400);
      text('less', 195, 650);
      text('more', 680, 650);
      image(imgm3p3, 800, 50, imgm3p3.width/2, imgm3p3.height/2);
    }
    if (m == 3 && p== 4) {
      image(musclefat5, 0, -200, musclefat5.width/2.8, musclefat5.height/2.8);
      fill(68,68,68);
      rect(150,200,600,600);
      fill(255);
      textSize(30);
      text('muscles', 210, 300);
      text('fat', 210, 550);
      textSize(15);
      text('less', 195, 400);
      text('more', 680, 400);
      text('less', 195, 650);
      text('more', 680, 650);
      image(imgm3p4, 800, 50, imgm3p4.width/2, imgm3p4.height/2);
    }
    if (m == 3 && p== 5) {
      image(musclefat2, 0, -200, musclefat2.width/2.8, musclefat2.height/2.8);
      fill(68,68,68);
      rect(150,200,600,600);
      fill(255);
      textSize(30);
      text('muscles', 210, 300);
      text('fat', 210, 550);
      textSize(15);
      text('less', 195, 400);
      text('more', 680, 400);
      text('less', 195, 650);
      text('more', 680, 650);
      image(imgm3p5, 800, 50, imgm3p5.width/2, imgm3p5.height/2);
    }
    if (m == 4 && p== 1) {
      image(perfect1, 0, -200, perfect1.width/2.8, perfect1.height/2.8);
      fill(68,68,68);
      rect(150,200,600,600);
      fill(255);
      textSize(30);
      text('muscles', 210, 300);
      text('fat', 210, 550);
      textSize(15);
      text('less', 195, 400);
      text('more', 680, 400);
      text('less', 195, 650);
      text('more', 680, 650);
      image(imgm4p1, 800, 50, imgm4p1.width/2, imgm4p1.height/2);
      fill(0,0,255);
      rect(950, 630, 400, 150);
      fill(255);
      textSize(150);
      text('next', 1000, 750);
    }
    if (m == 4 && p== 2) {
      image(perfect3, 0, -200, perfect3.width/2.8, perfect3.height/2.8);
      fill(68,68,68);
      rect(150,200,600,600);
      fill(255);
      textSize(30);
      text('muscles', 210, 300);
      text('fat', 210, 550);
      textSize(15);
      text('less', 195, 400);
      text('more', 680, 400);
      text('less', 195, 650);
      text('more', 680, 650);
      image(imgm4p2, 800, 50, imgm4p2.width/2, imgm4p2.height/2);
      fill(0,0,255);
      rect(950, 630, 400, 150);
      fill(255);
      textSize(150);
      text('next', 1000, 750);
    }
    if (m == 4 && p== 3) {
      image(muscle3, 0, -200, muscle3.width/2.8, muscle3.height/2.8);
      fill(68,68,68);
      rect(150,200,600,600);
      fill(255);
      textSize(30);
      text('muscles', 210, 300);
      text('fat', 210, 550);
      textSize(15);
      text('less', 195, 400);
      text('more', 680, 400);
      text('less', 195, 650);
      text('more', 680, 650);
      image(imgm4p3, 800, 50, imgm4p3.width/2, imgm4p3.height/2);
    }
    if (m == 4 && p== 4) {
      image(muscle5, 0, -200, muscle5.width/2.8, muscle5.height/2.8);
      fill(68,68,68);
      rect(150,200,600,600);
      fill(255);
      textSize(30);
      text('muscles', 210, 300);
      text('fat', 210, 550);
      textSize(15);
      text('less', 195, 400);
      text('more', 680, 400);
      text('less', 195, 650);
      text('more', 680, 650);
      image(imgm4p4, 800, 50, imgm4p4.width/2, imgm4p4.height/2);
    }
    if (m == 4 && p== 5) {
      image(muscle4, 0, -200, muscle4.width/2.8, muscle4.height/2.8);
      fill(68,68,68);
      rect(150,200,600,600);
      fill(255);
      textSize(30);
      text('muscles', 210, 300);
      text('fat', 210, 550);
      textSize(15);
      text('less', 195, 400);
      text('more', 680, 400);
      text('less', 195, 650);
      text('more', 680, 650);
      image(imgm4p5, 800, 50, imgm4p5.width/2, imgm4p5.height/2);
    }
    if (m == 5 && p== 1) {
      image(perfect4, 0, -200, perfect4.width/2.8, perfect4.height/2.8);
      fill(68,68,68);
      rect(150,200,600,600);
      fill(255);
      textSize(30);
      text('muscles', 210, 300);
      text('fat', 210, 550);
      textSize(15);
      text('less', 195, 400);
      text('more', 680, 400);
      text('less', 195, 650);
      text('more', 680, 650);
      image(imgm5p1, 800, 50, imgm5p1.width/2, imgm5p1.height/2);
      fill(0,0,255);
      rect(950, 630, 400, 150);
      fill(255);
      textSize(150);
      text('next', 1000, 750);
    }
    if (m == 5 && p== 2) {
      image(perfect2, 0, -200, perfect2.width/2.8, perfect2.height/2.8);
      fill(68,68,68);
      rect(150,200,600,600);
      fill(255);
      textSize(30);
      text('muscles', 210, 300);
      text('fat', 210, 550);
      textSize(15);
      text('less', 195, 400);
      text('more', 680, 400);
      text('less', 195, 650);
      text('more', 680, 650);
      image(imgm5p2, 800, 50, imgm5p2.width/2, imgm5p2.height/2);
      fill(0,0,255);
      rect(950, 630, 400, 150);
      fill(255);
      textSize(150);
      text('next', 1000, 750);
    }
    if (m == 5 && p== 3) {
      image(muscle4, 0, -200, muscle4.width/2.8, muscle4.height/2.8);
      fill(68,68,68);
      rect(150,200,600,600);
      fill(255);
      textSize(30);
      text('muscles', 210, 300);
      text('fat', 210, 550);
      textSize(15);
      text('less', 195, 400);
      text('more', 680, 400);
      text('less', 195, 650);
      text('more', 680, 650);
      image(imgm5p3, 800, 50, imgm5p3.width/2, imgm5p3.height/2);

    }
    if (m == 5 && p== 4) {
      image(muscle7, 0, -200, muscle7.width/2.8, muscle7.height/2.8);
      fill(68,68,68);
      rect(150,200,600,600);
      fill(255);
      textSize(30);
      text('muscles', 210, 300);
      text('fat', 210, 550);
      textSize(15);
      text('less', 195, 400);
      text('more', 680, 400);
      text('less', 195, 650);
      text('more', 680, 650);
      image(imgm5p4, 800, 50, imgm5p4.width/2, imgm5p4.height/2);
    }
    if (m == 5 && p== 5) {
      image(muscle4, 0, -200, muscle4.width/2.8, muscle4.height/2.8);
      fill(68,68,68);
      rect(150,200,600,600);
      fill(255);
      textSize(30);
      text('muscles', 210, 300);
      text('fat', 210, 550);
      textSize(15);
      text('less', 195, 400);
      text('more', 680, 400);
      text('less', 195, 650);
      text('more', 680, 650);
      image(imgm5p5, 800, 50, imgm5p5.width/2, imgm5p5.height/2);
    }
}

function mousePressed(){
  var m = mSlider.value();
  var p = pSlider.value();

  if (m == 4 && p==1){
    if(mouseX>950 && mouseX<950+400 && mouseY>630 && mouseY<630+150){
        cursor(HAND);
        window.open("index4.html");
      }
    }
  if (m == 4 && p==2){
    if(mouseX>950 && mouseX<950+400 && mouseY>630 && mouseY<630+150){
        cursor(HAND);
        window.open("index4.html");
      }
    }
  if (m == 5 && p==1){
    if(mouseX>950 && mouseX<950+400 && mouseY>630 && mouseY<630+150){
        cursor(HAND);
        window.open("index4.html");
      }
    }
  if (m == 5 && p==2){
    if(mouseX>950 && mouseX<950+400 && mouseY>630 && mouseY<630+150){
        cursor(HAND);
        window.open("index4.html");
      }
    }
  if (m == 5 && p==3){
    if(mouseX>950 && mouseX<950+400 && mouseY>630 && mouseY<630+150){
        cursor(HAND);
        window.open("index4.html");
      }
    }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
