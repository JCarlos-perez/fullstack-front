function pintar_label_rojo (identificador) {
    if ($("#p_" + identificador).val()  == "") {
        $("#l_" + identificador).css("color","red");
        return 1;
    } else {
        return 0;
    }
}

function pintar_label_negro (identificador) {
    if ($("#p_" + identificador).val()  != "") {
        $("#l_" + identificador).css("color","black");
    }
}

$("#formulario").submit("click", function(e) {
        let existe_nombre = pintar_label_rojo ("nombre");
        let existe_apellidos = pintar_label_rojo ("apellidos");
        if (existe_nombre == 1 || existe_apellidos == 1) {
            event.preventDefault();
        }
    }
)

$("#p_nombre").onchange (
    pintar_label_negro("nombre")
)

$("#p_apellidos").onchange( 
    pintar_label_negro("apellidos")
)