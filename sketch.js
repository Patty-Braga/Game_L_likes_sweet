let personagem
let doce
let concreto

let tamanho = 64

let andarX = 0
let andarY = 0

let velocidade = 64
let restart = 0

function setup() {
  createCanvas(576, 576);
  personagem = loadImage("L.png");
  concreto = loadImage("concreto.jpg");
  doce = loadImage("doce.png")
}

function draw() {
  if(andarX < 0){
    andarX = 0
  } 
  
  if(andarY < 0){
    andarY = 0
  }
  
  if(andarX > tamanho * 8){
    andarX = tamanho * 8
  }
  
  if(andarY > tamanho * 8){
    andarY = tamanho * 8
  }
  
  background(220);

  for(let i = 0; i < 9; i++){
      for(let j = 0; j < 9; j++) {
        image(concreto, tamanho * i, tamanho * j, tamanho, tamanho);       
      }
  }
  image(doce, 520, 520, tamanho/1.5, tamanho/1.5)  
  image(personagem, andarX, andarY, tamanho, tamanho);

  
  if(andarX === tamanho*8 && andarY === tamanho*8){
     rect(160,160, 256, 256)
     textSize(30)
     text("L comeu o doce!!!", 170, 300)
  
     restart = createButton('Reiniciar')
     restart.mousePressed(reset)
  
     noLoop()
  }
}

function reset(){
  andarX = 0
  andarY = 0
  restart.remove()
  loop()
}

function keyPressed(){
  if(keyIsDown(UP_ARROW)){
     andarY -= velocidade
     }
  
    if(keyIsDown(DOWN_ARROW)){
     andarY += velocidade
     }
  
    if(keyIsDown(LEFT_ARROW)){
     andarX -= velocidade
     }
  
    if(keyIsDown(RIGHT_ARROW)){
     andarX += velocidade
     }
      
}
