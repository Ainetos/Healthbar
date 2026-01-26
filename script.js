var vidaRes
function Healthbar (vida, vidaMax) {
    vidaRes=(vida*100)/vidaMax;
    document.getElementById("barra").style.width=vidaRes+"%";

    document.getElementById("TextoVida").innerHTML= vida+" /"+vidaMax;

    if(vidaRes>50){
        document.getElementById("barra").style.backgroundColor="limegreen";
        document.getElementById("inferior").style.backgroundColor="darkgreen";
    }
    else if(vidaRes>25){
        document.getElementById("barra").style.backgroundColor="orange";
        document.getElementById("inferior").style.backgroundColor="Chocolate";
    }
    else if(vidaRes>0){
        document.getElementById("barra").style.backgroundColor="red";
        document.getElementById("inferior").style.backgroundColor="darkred";
    }
    else{
        document.getElementById("barra").style.backgroundColor="gray";
        document.getElementById("inferior").style.backgroundColor="black";
    }
}

function CambiarColores(colorTexto, colorBordeTexto){
    document.getElementById("TextoVida").style.color=colorTexto;
    document.getElementById("TextoVida").style= 'text-shadow: -2px -2px 0 ' + colorBordeTexto + ', 2px -2px 0 ' + colorBordeTexto + ', -2px 2px 0 ' + colorBordeTexto + ', 2px 2px 0 ' + colorBordeTexto + ', -3px 0px 0 ' + colorBordeTexto + ', 3px 0px 0 ' + colorBordeTexto + ', 0px -3px 0 ' + colorBordeTexto + ', 0px 3px 0 ' + colorBordeTexto +';';
}