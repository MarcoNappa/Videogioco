function startGame() {
    document.getElementById("introMsg").style.display = "block";
    document.getElementById("lv1").style.display = "block";
    document.getElementById("porta").style.display = "block";
    document.getElementById("fessura").style.display = "block";
}

function portaLv1() {
    document.getElementById("fuga").style.display = "block";
    document.getElementById("imgPorta").style.display = "block";
    document.getElementById("porta").style.display = "none";
    document.getElementById("fessura").style.display = "none";
    document.getElementById("button1").style.display = "none";
}
function fessuraLv1() {
    document.getElementById("mortetxt").style.display = "block";
    document.getElementById("mortebt").style.display = "block";
    document.getElementById("morte").style.display = "none";
    document.getElementById("fuga").style.display = "none";
    document.getElementById("porta").style.display = "none";
    document.getElementById("fessura").style.display = "none";
    document.getElementById("button1").style.display = "none";


}
function cortile() {
    alert("COMPLIMENTI HAI VINTO IL GIOCO !!!!!!!!!!!!!")
    document.getElementById("fotoVictory").style.display = "block";
}
function morte() {
    alert("Hai perso, morte di Merda....")
    document.getElementById("imgMorte").style.display = "block";
}



