var encriptacion = [
    ["a", "ai"],
    ["e", "enter"],
    ["i", "imes"],
    ["o", "ober"],
    ["u", "ufat"]
];

function encriptar() {
    var letra;
    var mensaje = document.querySelector("#entrada").value;
    var new_mensaje = "";
    //convertir
    const convertir = (acc, item) => acc == item[0] ? item[1] : acc;
    //iterar el mensaje
    for (let i of mensaje) {
        letra = encriptacion.reduce(convertir, i);
        new_mensaje = new_mensaje.concat(letra);
    }
    document.getElementById("salida").innerHTML = new_mensaje;
    document.getElementById("entrada").value = "";
    // document.getElementById("salida").style.backgroundImage = "none";
}

function desencriptar() {
    var mensaje = document.querySelector("#entrada").value;
    //reconvertir
    const reconvertir = (acc, item) => acc.replaceAll(item[1], item[0]);
    const new_mensaje = encriptacion.reduce(reconvertir, mensaje);
    document.getElementById("salida").innerHTML = new_mensaje;
    document.getElementById("entrada").value = "";
    // document.getElementById("salida").style.backgroundImage = "none";
}

function copiar() {
    var copiar_mensaje = document.getElementById("salida");
    copiar_mensaje.select();
    document.execCommand('copy');
}
function limpiar() {
    document.getElementById("salida").innerHTML = "";
}
function cambiar() {
    let entrada = document.getElementById("entrada");
    let salida = document.getElementById("salida");
    let salida_text = document.getElementById("salida").value;
    entrada.value = salida_text;
    salida.innerHTML = "";
}