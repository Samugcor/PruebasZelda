let listaJuegos;
let listaPersonajes;

$(function () {
    

    function emptycards(){
        $(".cardcontainer").empty();
    }

    $.getJSON('https://zelda.fanapis.com/api/games?limit=100', function(response) {
        listaJuegos = response.data;

        console.log(listaJuegos)
        let template = $("#cardTemplate").prop('content');

        listaJuegos.forEach((juego,index )=> {
            let clone = $(template).clone(true);
            $(clone).find(".card").data("indice", index);
            $(clone).find(".nombre").text(juego.name);
            $(clone).find(".fecha").text(juego.released_date);
            $(clone).find(".descripcion").text(juego.description);
            $(".cardcontainer").append(clone);
        });
    });

    $.getJSON('https://zelda.fanapis.com/api/characters?limit=100', function(response) {
        listaPersonajes = response.data;

        console.log(listaPersonajes)
        let template = $("#cardTemplate").prop('content');

        listaPersonajes.forEach((juego,index )=> {
            let clone = $(template).clone(true);
            $(clone).find(".card").data("indice", index);
            $(clone).find(".nombre").text(juego.name);
            $(clone).find(".fecha").text(juego.released_date);
            $(clone).find(".descripcion").text(juego.description);
            $(".cardcontainerPersonajes").append(clone);
        });
    });

    $(".searchbar").keyup(function() {
        
        let input = $(this).val().toLowerCase();

        $(".cardcontainer .card").each(function() {
            let nombre = $(this).find(".nombre").text().toLowerCase();

            if (nombre.includes(input)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });

        $(".cardcontainerPersonajes .card").each(function() {
            let nombre = $(this).find(".nombre").text().toLowerCase();

            if (nombre.includes(input)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });
})