let glass = $("glass");
let blurtxt = $("blur");
let blur_ctrl = $("blur_ctrl");
let opacity = $("transparency");
let opa_ctrl = $("transp_ctrl");
let code = $("code");
let copyCode = $("copy-code");
let codeProp1 = $("code-property1");
let codeVal1 = $("code-values1");
let codeProp2 = $("code-property2");
let codeVal2 = $("code-values2");
let codeProp3 = $("code-property3");
let codeVal3 = $("code-values3");
let infoMessage = document.querySelector("#information-msg");
let infoBtn = document.querySelector(".info");
let button = document.querySelector("#button");
let copiedMessage=document.querySelector("#copied-message");
let obj = {
  blur: "0px",
  transparency: "0px",
};

controls(obj);

function controls(obj) {
  blur_ctrl.addEventListener("input", () => {
    obj.blur = blur_ctrl.value / 5 + "px";
    update();
  });

  transp_ctrl.addEventListener("input", () => {
    obj.transparency = transp_ctrl.value / 100;
    update();
  });
}

function update() {
  blurtxt.innerText = `Blur: ${obj.blur}`;
  opacity.innerText = `Transparency: ${obj.transparency}`;
  glass.style.backdropFilter = `blur(${obj.blur})`;
  glass.style.background = `rgba(255 , 255 , 255 , ${obj.transparency})`;

  copyCode.innerText = getCssText();
  codeProp1.innerText = codeProperty1();
  codeVal1.innerText = codeValues1();
  codeProp2.innerText = codeProperty2();
  codeVal2.innerText = codeValues2();
  codeProp3.innerText = codeProperty3();
  codeVal3.innerText = codeValues3();
  btnActive();
}

function getCssText() {
  return `background: rgba(255, 255, 255, ${obj.transparency});\n\nbackdrop-filter: blur(${obj.blur}); \n\n-webkit-backdrop-filter: blur(${obj.blur});`;
}
function codeProperty1() {
  return `background:`;
}
function codeValues1() {
  return `rgba(255, 255, 255, ${obj.transparency});`;
}
function codeProperty2() {
  return `backdrop-filter:`;
}
function codeValues2() {
  return ` blur(${obj.blur});`;
}
function codeProperty3() {
  return `-webkit-backdrop-filter:`;
}
function codeValues3() {
  return ` blur(${obj.blur});`;
}

function create(elem) {
  let element = document.createElement(elem);
  return element;
}

function $(elem) {
  return document.getElementById(elem);
}

let infoTab = function () {
  infoMessage.classList.add("visible");
  setTimeout(() => {
    infoMessage.classList.remove("visible");
  }, 5000);
};

infoBtn.addEventListener("click", infoTab);
button.addEventListener("click",codeCopy);
button.addEventListener("click",copyMessage);

function btnActive() {
  if (button.classList.contains("copy-btn-disable")) {
    button.classList.remove("copy-btn-disable");
    button.classList.add("copy-btn-active");
  }
}
function codeCopy(){
  let copyText = document.getElementById("copy-code");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
    
};

function copyMessage(){
  if(copiedMessage.classList.contains("display")){
    copiedMessage.classList.remove("display");
    setTimeout(() => {
      copiedMessage.classList.add("display");
    }, 2000);
  };
};
