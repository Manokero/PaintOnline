function Paint(x,y,color){
  this.x = x;
  this.y = y;
  this.canvas = document.getElementById("canvas");
  this.ctx = this.canvas.getContext("2d");
  //this.color = "red";
  this.size = document.getElementById("size").value;
  
  this.draw = function(){
  this.ctx.fillStyle = color;  this.ctx.fillRect(this.x,this.y,this.size,this.size)  
  }
}
var paint;
var color = "transparent";
function move(event){
 
  var x = event.clientX;
  var y = event.clientY;
  paint = new Paint(x,y,color)
  //this.color=color;
  paint.draw()
}

function begin(){
  color= document.getElementById("color").value
}

function end(){
  color="transparent"
}

//I will improve this later