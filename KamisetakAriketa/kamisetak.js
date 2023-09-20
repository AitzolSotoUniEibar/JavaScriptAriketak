function atzera(){
    if(index > 0){
        index--
        aldatu()
    }else{
        alert("Ezin da atzera egin")
    }
}
function hurrengoa(){
    if(index < 2){
        index++
        aldatu()
    }else{
        alert("Ezin da aurrera egin")
    }
}
function aldatu(){
    if(index == 0){
        document.getElementById("irudia").src='img/6.jpg'
        document.getElementById("zenbKamiseta").textContent = "6.Kamiseta"
    }else if(index == 1){
        document.getElementById("irudia").src='img/9.jpg'
        document.getElementById("zenbKamiseta").textContent = "9.Kamiseta"
    }else if(index == 2){
        document.getElementById("irudia").src='img/11.jpg'
        document.getElementById("zenbKamiseta").textContent = "11.Kamiseta"
    }
}