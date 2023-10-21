document.addEventListener("DOMContentLoaded", function () {
    function tabla() {
        var table = document.createElement("table");
        table.style.width = "600px";
        var proyectar = [
            { imageSrc: "Recursos/corral.png", title: "Corral" },
            { imageSrc: "Recursos/Faccebook.png", title: "Facebook" },
            { imageSrc: "Recursos/Instagram.png", title: "Instagram" },
            { imageSrc: "Recursos/SnapChap.png", title: "Snapchat" },
            { imageSrc: "Recursos/TikTok.png", title: "TikTok" },
            { imageSrc: "Recursos/twitter.png", title: "Twitter Ecommerce" },
        ];

        for (var i = 0; i < 2; i++) {
            var fila = document.createElement("tr");

            for (var j = 0; j < 3; j++) {
                var project = proyectar[i * 3 + j];

                var coll = document.createElement("td");

                var imagen = document.createElement("img");
                imagen.src = project.imageSrc;
                imagen.alt = project.title;
                imagen.width = "300";

                var titulo = document.createElement("span");
                titulo.textContent = project.title;

                var botones = document.createElement("input");
                botones.type = "button";
                botones.value = "Source Code";

                var botones2 = document.createElement("input");
                botones2.type = "button";
                botones2.value = "Preview Demo";

                coll.appendChild(imagen);
                coll.appendChild(document.createElement("br"));
                coll.appendChild(titulo);
                coll.appendChild(document.createElement("br"));
                coll.appendChild(botones);
                coll.appendChild(botones2);
                fila.appendChild(coll);
            }
            table.appendChild(fila);
        }
        document.body.appendChild(table);
    }
    tabla();
});