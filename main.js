let glass = $("glass");
let blurtxt = $("blur");
let blur_ctrl = $("blur_ctrl");
let opacity = $("transparency");
let opa_ctrl = $("transp_ctrl");
let code = $("code");

let obj = {
  blur:"0px" ,
  transparency: "0px"
}

controls(obj);

function controls(obj){
  blur_ctrl.addEventListener("input" , ()=>{
    obj.blur = ( blur_ctrl.value / 5) + "px";
    update();
  });
  
  transp_ctrl.addEventListener("input" , ()=>{
    obj.transparency = transp_ctrl.value / 100;
    update();
  });
  
}


function update(){
  blurtxt.innerText = `Blur: ${obj.blur}`;
  opacity.innerText= `Transparency: ${obj.transparency}`;
  glass.style.backdropFilter = `blur(${obj.blur})`;
  glass.style.background = `rgba(255 , 255 , 255 , ${obj.transparency})`;
  
  code.innerText = getCssText();
}

function getCssText(){
  return `background: rgba(255, 255, 255, ${obj.transparency});\n backdrop-filter: blur(${obj.blur}); \n -webkit-backdrop-filter: blur(${obj.blur});`;
}



function create(elem) {
  let element = document.createElement(elem);
  return element;
}


function $(elem) {
  return document.getElementById(elem);
}