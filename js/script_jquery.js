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

$("#p_nombre").on ('change', function() {
    pintar_label_negro("nombre")
})

$("#p_apellidos").on ('change', function() { 
    pintar_label_negro("apellidos")
})

$("#tamano").on ('change', function(){
    console.log(this.value)
    // Aqui va la llamada AJAX con JQuery
    $.ajax({
        method: "POST",
        url: "http://localhost:5000/checksize",
        data: { size: this.value }
      }).done(function(data) {
        var span = document.getElementById("resultado_tamano");
        span.textContent=data;
      }).fail(function() {
        alert("Fallo en la llamada AJAX")
      })
    })
   