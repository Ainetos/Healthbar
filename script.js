var vidaRes
function Healthbar (vida, vidaMax) {
    vidaRes=(vida*100)/vidaMax;
    document.getElementById("barra").style.width=vidaRes+"%";

    document.getElementById("TextoVida").innerHTML= vida+" /"+vidaMax;
}