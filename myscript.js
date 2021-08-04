//alert("bienvenido/a a password generator!!!!!!")
//var simbolos = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
var simbolos = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var suplantador = ["aA^4", "bB38", "cC<(", "dD>)", "eE3", "fF+#", "gG69", "hH#", "iI1¡!", "jJ¡7", "kK#", "lL1|", "mMwW", "nNzZ", "oO0Q", "pPq?", "qQ?", "rRk2", "sS5", "tT7", "uU", "vV", "wWmM", "xX*+", "yY7", "zZ2N", " -_."];

var salida = "";

function tomaEntrada() {

    var entrada = document.getElementById("entrada");

    for (var i = 0; i < 8; i++) {

        var x = Math.floor((Math.random() * simbolos.length) + 1);

        salida = salida.concat(simbolos.charAt(x));

        //salida = salida.concat(simbolos[x])
    }


    //var salida = "escribiste: " + entrada.value + " eso es la salida"


    document.getElementById("salidap").innerHTML = salida;
    //document.getElementById("entrada1").innerHTML = entrada;
    //alert("el input dice: funca");
    console.log(entrada.value);
    salida = "";
}

function suplantar() {
    var entrada = document.getElementById("entrada").value.toString();
    salida = entrada.charAt(0);
    //console.log("el tamaño del suplantador es: " + suplantador.length);

    for (var i = 1; i < entrada.length; i++) {
        //entrada.charAt(i)
        for (var j = 0; j < suplantador.length; j++) {
            if (entrada.charAt(i) == suplantador[j].charAt(0)) {
                var r = Math.floor((Math.random() * suplantador[j].length) + 0);
                salida += suplantador[j].charAt(r);
                //console.log(suplantador[j].charAt(r));
            }
        }
    }


    document.getElementById("salidap").innerHTML = salida;
    console.log("la salida es: " + salida);
    salida = "";
}