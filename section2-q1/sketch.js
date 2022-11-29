// 小手調べ
function setup(){
  for(let i = 10; i > 0; i--){
    if(i > 5){
      stroke(255,0,0)
    }
    else{
      stroke(0,0,255)
    }
    ellipse(50,50,i*5)
  }
}
