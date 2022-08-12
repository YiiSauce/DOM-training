let kalam = document.getElementById("count");
let combien = document.getElementById("baqi");
let max = kalam.maxLength;

function func(event){
    let remain = max - event.target.value.length;
    combien.textContent = remain;
}

kalam.addEventListener("input", func)
