function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  //background("#ffe8d6")
  //let t_y=mouseY/3//let宣告變數為區域變數
  var t_x= mouseX/2//var宣告變數為權域變數
  var R = mouseX/8 //0~255 mouseX:0~2000 R:隨著滑鼠x移動改變顏色
  var G = mouseY/4 //0~255 G:滑鼠y移動改變顏色
  var B = frameCount%256 // 計數器 ％求餘數 B:隨著時間改變顏色
  fill(R,G,B)//RGB(0~255),
  ellipse(windowWidth/4,windowHeight/4,t_x)
  ellipse(windowWidth/3,windowHeight/3,t_x)
  ellipse(windowWidth/2,windowHeight/2,t_x)
  ellipse(windowWidth*2/3,windowHeight*2/3,t_x)
  ellipse(windowWidth*3/4,windowHeight*3/4,t_x)
}