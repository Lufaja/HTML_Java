var btn = document.createElement('button');
btn.style.margin = '10px';
btn.innerHTML = 'Switch lights off';
document.body.appendChild(btn);
btn.style.marginLeft = "696px";
btn.style.marginTop = "323px";
// schijf hier tussen je code
currentColor = "yellow"
document.body.style.background = "yellow";

function changeBackground(color) { 
    btn.innerHTML = ""
    if (currentColor == "black"){
        currentColor = "yellow" 
        btn.innerHTML = "Switch lights off"
         console.log("Light is on")
    }else{
    currentColor = "black"
     btn.innerHTML = "Switch lights on"
     console.log("Light is off")
    }document.body.style.background = currentColor;}


btn.onclick = function(){ changeBackground(currentColor)}


// schijf hier tussen je code