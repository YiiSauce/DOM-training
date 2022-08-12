// document.body.children[1].children[0].href = "https://google.com";

let lk = document.querySelector("a");
// let hh = document.body.children[0];
lk.href =  "https://youtube.com";
let curr = document.querySelector("input");
let lbl = document.querySelector("label");
function kch(){
    let str = curr.value;
    lbl.textContent = 50 - str.length+"/50";
    console.log(lbl.textContent);
    // console.log(str);
}
curr.addEventListener("input",kch);

