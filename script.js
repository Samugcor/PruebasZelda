let listaJuegos;

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

    $("#searchbar").keyup(function() {
        emptycards()
        let input = $(this).val().toLowerCase();

        $.getJSON(`https://zelda.fanapis.com/api/games?limit=100`, function(response) {
            listaJuegos = response.data;
            let listaJuegosFiltro=[];
            listaJuegos.forEach(juego => {
                console.log(juego.name.includes(input))
                if (juego.name.includes(input)==true) {
                    listaJuegosFiltro.push(juego)
                }
            });

            console.log(listaJuegosFiltro);

            let template = $("#cardTemplate").prop('content');
    
            listaJuegosFiltro.forEach((juego,index )=> {
                let clone = $(template).clone(true);
                $(clone).find(".card").data("indice", index);
                $(clone).find(".nombre").text(juego.name);
                $(clone).find(".fecha").text(juego.released_date);
                $(clone).find(".descripcion").text(juego.description);
                $(".cardcontainer").append(clone);
            });
        });
    });
})