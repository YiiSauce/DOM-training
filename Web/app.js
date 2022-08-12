let kalam = document.getElementById("count");
let combien = document.getElementById("baqi");
let max = kalam.maxLength;

function func(event){
    let remain = max - event.target.value.length;
    combien.textContent = remain;
    if(remain<10){
        combien.classList.add("warning");
        kalam.classList.add("warning");
    }
    else{
        combien.classList.remove("warning");
        kalam.classList.remove("warning");
    }
}

kalam.addEventListener("input", func)
