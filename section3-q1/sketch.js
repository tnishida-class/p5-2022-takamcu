// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;

function setup(){
  createCanvas(windowWidth, windowHeight);
  count = 0;
  cycle = 100;
}

function windowResized(){ 
  resizeCanvas(windowWidth, windowHeight); 
}

function draw(){
  background(160, 192, 255);
  count = (count + 1) % cycle;
  let size = count;
  if(count < 50){
    ellipse(width / 2, height / 2, 100 + size); 
  }
  else{
    ellipse(width / 2, height / 2, 200 - size); 
  }
}