function irudiaAldatu(){
    if(document.getElementById("jauna").checked){
        document.getElementById("irudia").src = "img/caraHombre.jpg"
    }else if(document.getElementById("anderea").checked){
        document.getElementById("irudia").src = "img/caraMujer.jpg"
    }
}

function formBidali() {
  var formulario = document.getElementById("form1");
  formulario.onsubmit = function datuakIdatzi() {
    var izenaEm = document.getElementById("izenaEm");
    izenaEm.textContent = "Izena: " + formulario.izena.value;

    var abizenaEm = document.getElementById("abizenaEm");
    abizenaEm.textContent = "Abizena: " + formulario.abizena.value;

    var helbideaEm = document.getElementById("helbideaEm");
    helbideaEm.textContent = "Helbidea: " + formulario.helbidea.value;

    var hiriaEm = document.getElementById("hiriaEm");
    hiriaEm.textContent = "Hiria: " + formulario.hiria.value;

    document.getElementById("gustokoenakEm").textContent = "Gustokoenak:";

    if (formulario.liburuak.checked) {
      document.getElementById("liburuakEm").textContent = "Liburuak";
    }

    if (formulario.pelikulak.checked) {
      document.getElementById("pelikulakEm").textContent = "Pelikulak";
    }
    formulario.bidali.disabled = true;
    return false;
  };
}

function formReseteatu(){
    var formulario = document.getElementById("form1")
    formulario.reset()
    document.getElementById("izenaEm").textContent = ""
    document.getElementById("abizenaEm").textContent = ""
    document.getElementById("helbideaEm").textContent = ""
    document.getElementById("hiriaEm").textContent = ""
    document.getElementById("gustokoenakEm").textContent = ""
    document.getElementById("liburuakEm").textContent = ""
    document.getElementById("pelikulakEm").textContent = ""

}