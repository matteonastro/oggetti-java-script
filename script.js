let animale ={
    specie: "mucca",
    razza: "chianina",
    zampe: "4"
}
let animale2 ={
    specie: "cane",
    razza: "bassotto",
    zampe: "4"
}
let animale3 ={
    specie: "gallina",
    razza: "andalusa",
    zampe: "2"
}

function tasto1(){
    document.getElementById("testo").innerHTML = animale.specie + " " +animale.razza+" "+animale.zampe;
}
function tasto2(){
    document.getElementById("testo").innerHTML = animale2.specie + " " +animale2.razza+" "+animale2.zampe;
}
function tasto3(){
    document.getElementById("testo").innerHTML = animale3["specie"] + " " +animale3["razza"]+" "+animale3["zampe"];
}