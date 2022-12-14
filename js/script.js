function pintar_label_rojo (identificador) {
    if (document.getElementById("p_" + identificador).value  == "") {
        document.getElementById("l_" + identificador).style.color="red";
        return 1;
    } else {
        return 0;
    }
}

document.getElementById("formulario").addEventListener("submit",
    function(event) {
        
        let existe_nombre = pintar_label_rojo ("nombre");
        let existe_apellidos = pintar_label_rojo ("apellidos");
        if (existe_nombre == 1 || existe_apellidos == 1) {
            event.preventDefault();
        }
    }
)

function pintar_label_negro (identificador) {
    if (document.getElementById("p_" + identificador).value  != "") {
        document.getElementById("l_" + identificador).style.color="black";
        return 1;
    } else {
        return 0;
    }
}