let testDiv = document.querySelector("div");

function changeStyle(color, fsize, bcolor){
  if (color) {
    this.style.color = color;
  } else {
    this.style.color = "inherit";
  }
  if(fsize) {
    this.style.fontSize = fsize;
  } else {
    this.style.fontSize = "inherit";
  }
  if(bcolor){
    this.style.backgroundColor = bcolor;
  } else {
    this.style.backgroundColor = "inherit";
  }
  
}

let newDiv = changeStyle.bind(testDiv);
newDiv("red", "18px", "black");
