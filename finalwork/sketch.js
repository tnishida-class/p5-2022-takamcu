const colors = ['orange', 'white', 'green', 'black', 'red', 'blue'];

function setup() {
  createCanvas(400, 400);
  rectColors = [];
  for(let i = 0; i < 3; i++){
    const c = random(colors);
    rectColors.push(c);
  }
}

function draw() {
  background(220);
  
  fill(0);
  textFont('bold', 32);
  text('Quiz of Tricolore', 10, 50);
  textSize(10);
  text('ページを更新して色の組み合わせを変えよう！🔄', 10, 70);
  text('見覚えがある国旗が出てきたら更新を止めて画面をマウスで長押ししてみよう！', 10, 80);
  text('実在する国旗ならばその国名が国旗の下に表示されるぞ！⭕', 10, 90);
  text('組み合わせ総数は216通り、そのうち正解は6通りしかない！😱', 10, 100);
  text('※実際のカラーコードとは異なる場合があります。', 10, 110);
  text('tricolore = 三色旗。', 275, 40);
  text('主にフランスの国旗を指す。', 275, 50);

  noStroke();
    
  for(let i = 0; i < 3; i++){
    fill(rectColors[i]);
    rect(i * 100 + 50, 125, 100, 200);
    
  let c1 = get(100, 150), c2 = get (200, 150), c3 = get (300, 150);    
  
    if(c1[0] == 0 && c1[1] == 0 && c1[2] == 255 &&
       c2[0] == 255 && c2[1] == 255 && c2[2] == 255 &&
       c3[0] == 255 && c3[1] == 0 && c3[2] == 0){
      if(mouseIsPressed === true){
        fill(0);
        textSize(32);
        text('France', 50, 375);
      }
    }
        
    if(c1[0] == 0 && c1[1] == 0 && c1[2] == 0 &&
       c2[0] == 255 && c2[1] == 255 && c2[2] == 0 &&
       c3[0] == 255 && c3[1] == 0 && c3[2] == 0){
      if(mouseIsPressed === true){
        fill(0);
        textSize(32);
        text('Belgium', 50, 375);
      }
    }
      
     if(c1[0] == 0 && c1[1] == 128 && c1[2] == 0 &&
        c2[0] == 255 && c2[1] == 255 && c2[2] == 255 &&
        c3[0] == 0 && c3[1] == 255 && c3[2] == 0){
      if(mouseIsPressed === true){
        fill(0);
        textSize(32);
        text('Italy', 50, 375);
      }
    }
    
      if(c1[0] == 0 && c1[1] == 128 && c1[2] == 0 &&
         c2[0] == 255 && c2[1] == 255 && c2[2] == 255 &&
         c3[0] == 255 && c3[1] == 165 && c3[2] == 0){
      if(mouseIsPressed === true){
        fill(0);
        textSize(32);
        text('Ireland', 50, 375);
      }
    }
     
      if(c1[0] == 255 && c1[1] == 165 && c1[2] == 0 &&
         c2[0] == 255 && c2[1] == 255 && c2[2] == 255 &&
         c3[0] == 0 && c3[1] == 128 && c3[2] == 0){
         if(mouseIsPressed === true){
        fill(0);
        textSize(32);
        text("Cote d'lvoire", 50, 375);
      }
    }
      
      if(c1[0] == 0 && c1[1] == 0 && c1[2] == 255 &&
         c2[0] == 255 && c2[1] == 255 && c2[2] == 0 &&
         c3[0] == 255 && c3[1] == 0 && c3[2] == 0){
         if(mouseIsPressed === true){
        fill(0);
        textSize(32);
        text('Romania', 50, 375);
      }
    }
  }
}