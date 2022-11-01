// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("With great power comes great responsibility.");
}

function balloon(t){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 4;
  fill(255, 0, 0);
  stroke(0)
  rect(0, 0, w + p * 2, h + p * 4);
  stroke(255, 0, 0)
  triangle(w + p * 2, h + p * 4 - 10, w + p * 2 - 10, h + p * 4, w + p * 2 + 10, h  + p * 4 + 10)
  stroke(0)
  line(w + p * 2, h + p * 4 - 10, w + p * 2 + 10, h  + p * 4 + 10)
  line(w + p * 2 - 10, h + p * 4, w + p * 2 + 10, h  + p * 4 + 10)
  noStroke()
  fill(0);
  text(t, p, h + p);
}
