// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      if((i+j)%2==1 && j < 8){
        fill(120);
        rect(i * 10, j * 10, 10, 10);
        fill(0);
        ellipse(i * 10 + 5, j * 10 + 5, 9);
       }
      if((i+j)%2==1 && j < 5){
        fill(120);
        rect(i * 10, j * 10, 10, 10);
       }
      if((i+j)%2==1 && j < 3){
        fill(120);
        rect(i * 10, j * 10, 10, 10);
        fill(255,0,0);
        ellipse(i * 10 + 5, j * 10 + 5, 9);
       }
      }
    }
  }