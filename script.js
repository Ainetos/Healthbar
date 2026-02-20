var vidaRes
var vidacolor
function Healthbar(vida, vidaMax) {
    vidaRes = (vida * 100) / vidaMax;
    vidacolor = 100 - vidaRes;

    document.getElementById("barra").style.width = vidaRes + "%";
    document.getElementById("barra").style.animationDelay = "-" + vidacolor + "s";
    document.getElementById("inferior").style.animationDelay = "-" + vidacolor + "s";

    document.getElementById("TextoVida").innerHTML = vida + " /" + vidaMax;
}

var animaRes
function AnimaBar(anima, animaMax) {
    animaRes = (anima * 100) / animaMax;

    document.getElementById("barraAnima").style.width = animaRes + "%";

    document.getElementById("TextoAnima").innerHTML = anima + " /" + animaMax;
}

function CambiarColores(colorTexto, colorBordeTexto) {
    document.getElementById("TextoVida").style = 'color: ' + colorTexto + ';margin-top: -17px; margin-left: 24px; font-size: 92px; text-shadow: -2px -2px 0 ' + colorBordeTexto + ', 2px -2px 0 ' + colorBordeTexto + ', -2px 2px 0 ' + colorBordeTexto + ', 2px 2px 0 ' + colorBordeTexto + ', -3px 0px 0 ' + colorBordeTexto + ', 3px 0px 0 ' + colorBordeTexto + ', 0px -3px 0 ' + colorBordeTexto + ', 0px 3px 0 ' + colorBordeTexto + ';';
}