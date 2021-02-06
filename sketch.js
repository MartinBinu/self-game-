var asciiValues = [];
var allChar =[];

function setup() {

  createCanvas(1600,400);

  

}

function draw() {
  background("black");
  
  spawnAlphabets()

  drawSprites();
}

  function spawnAlphabets(){

     if(frameCount % 10 === 0){


        var num = Math.round( random(32,126));
asciiValues.push(num)

        var showChar = String.fromCharCode(num);
        allChar.push(showChar);
        console.log(showChar);


     }

  }

  function keyPressed(){
    for(var i = 0;i<asciiValues.length;i++){
    
      if(keyCode === asciiValues[i]){

      }

    }
  }