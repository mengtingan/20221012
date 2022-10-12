function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  rectMode(CENTER)
  noFill()
  stroke(255)
  strokeWeight(2)
  for(var j = -1;j<int(height/(50));j++){
    for(var i = -1;i<int(width/(50));i++)
    {
      stroke(frameCount%256,mouseX,mouseY)
      ellipse(25+(i*50),25+(j*50),mouseX/8)
      stroke(mouseY,mouseX,frameCount%256)
      rect(25+(i*50),25+(j*50),mouseX/5)
      stroke(mouseX,frameCount%256,mouseY)
      ellipse(50+(i*50),50+(j*50),mouseX/15)
      stroke(mouseX,mouseY,frameCount%256)
      ellipse(0+(i*50),50+(j*50),mouseX/20)
    }
  }
}
