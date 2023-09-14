function batazBestekoa(){
    var guztira = 0;
    for(var i = 1;i <= 3;i++){
        guztira += parseInt(window.prompt("Idatzi " + i + ".nota: "))
    }

    if(guztira/3 >= 5){
        alert("Gaindituta")
    }
}

function pasahitza(){
    pasahitza1 = window.prompt("Idatzi pasahitza: ")
    pasahitza2 = window.prompt("Idatzi pasahitza berriro: ")

    if(pasahitza1 == pasahitza2){
        alert("Ongi etorri")
    }
}

function pasahitzaOptimizatuta(){
    pasahitza1 = window.prompt("Idatzi pasahitza: ")
    pasahitza2 = ""

    while(pasahitza1 != pasahitza2){
        pasahitza2 = window.prompt("Idatzi pasahitza berriro: ")
    }

    //alert("Ongi etorri")
    document.write("Ongi etorri")
}