document.addEventListener("DOMContentLoaded", function () {
    const products = [
        { title: "Porsche", price: "$6.000", imgSrc: "/imagen/autos prueba/auto1.webp", info: "Más detalles sobre el Porsche...", },
        { title: "Toyota Corola", price: "$4.200", imgSrc: "/imagen/autos prueba/auto2.webp", info: "Más detalles sobre el Toyota Corola..." },
        { title: "Kia K3", price: "$2.500", imgSrc: "/imagen/autos prueba/auto3.webp", info: "El Kia K3 Cross es un vehículo que fusiona el diseño deportivo con la funcionalidad moderna, ofreciendo una experiencia de conducción dinámica y segura",
            tecnico: `
            Dimensiones y Capacidades
            - Longitud: 4,355 mm
            - Ancho: 1,825 mm
            - Altura: 1,530 mm
            - Distancia entre ejes: 2,670 mm
            - Capacidad del baúl: 390 litros
            
            Motor y Transmisión:
            - Tipo de motor: 4 cilindros, 1.6 litros MPI (inyección multipunto)
            - Potencia máxima: 121 caballos de fuerza (hp)
            - Torque máximo: 151 Nm a 4,850 rpm
            - Transmisión: Automática de 6 velocidades
            
            Consumo de Combustible:
            - Ciudad: 13 km/l (aprox)
            - Carretera: 18 km/l (aprox)
            - Combinado: 15.5 km/l (aprox)
            
            Suspensión y Frenos:
            - Delantera: Tipo McPherson
            - Trasera: Barra de torsión
            - Frenos:
              - Delanteros: Discos ventilados
              - Traseros: Discos sólidos
            
            Neumáticos y Rines:
            - Medidas de neumáticos: 215/60 R17
            - Rines: Aleación de aluminio de 17 pulgadas
            
            Equipamiento de Seguridad:
            - Airbags: 6 (delanteros, laterales y de cortina)
            - Frenos ABS con EBD
            - Control Electrónico de Estabilidad (ESC)
            - Asistente de Arranque en Pendientes (HAC)
            - Cámara de reversa con guías dinámicas
            
            Tecnología y Conectividad:
            - Pantalla táctil: 10.25 pulgadas
            - Compatibilidad: Android Auto y Apple CarPlay
            - Sistema de sonido: 6 parlantes
            - Cargador inalámbrico para smartphones
            - Llave inteligente con botón de encendido
            
            Colores Disponibles:
            - Blanco perlado, Plata metálico, Azul oscuro, Negro aurora y Rojo cereza
            `
            
         },
    ];

    products.sort((a, b) => a.title.localeCompare(b.title));

    const container = document.getElementById("product-container");
    const searchInput = document.getElementById("search-input");

    function displayProducts(filteredProducts) {
        container.innerHTML = "";

        filteredProducts.forEach((product, index) => {
            const colDiv = document.createElement("div");
            colDiv.className = "col-md-4 mb-4";

            const cardDiv = document.createElement("div");
            cardDiv.className = "card";

            const img = document.createElement("img");
            img.className = "card-img-top";
            img.src = product.imgSrc;
            img.alt = product.title;

            const cardBody = document.createElement("div");
            cardBody.className = "card-body text-center";

            const cardTitle = document.createElement("h5");
            cardTitle.className = "card-title";
            cardTitle.innerText = product.title;

            const cardText = document.createElement("p");
            cardText.className = "card-text";
            cardText.innerText = product.price;

            const infoLink = document.createElement("a");
            infoLink.href = `detalle.html?title=${encodeURIComponent(product.title)}&price=${encodeURIComponent(product.price)}&imgSrc=${encodeURIComponent(product.imgSrc)}&info=${encodeURIComponent(product.info)}&tecnico=${encodeURIComponent(product.tecnico)}`;
            infoLink.target = "_blank";
            infoLink.className = "butoninfo mt-2";
            infoLink.innerText = "Más información";

            cardDiv.appendChild(img);
            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardText);
            cardBody.appendChild(infoLink);
            colDiv.appendChild(cardDiv);
            cardDiv.appendChild(cardBody);
            container.appendChild(colDiv);
        });
    }

    searchInput.addEventListener("input", function () {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredProducts = products.filter(product =>
            product.title.toLowerCase().includes(searchTerm)
        );
        displayProducts(filteredProducts);
    });

    displayProducts(products);
});




AOS.init();

var typed = new Typed('#nombtienda', {
  strings: ['<i>SHOP NAME</i>', 'WELCOME'],
  typeSpeed: 90,
  loop: true,
  showCursor: false
});