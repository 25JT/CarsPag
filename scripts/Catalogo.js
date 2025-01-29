document.addEventListener("DOMContentLoaded", function () {
    const products = [
        { title: "Porsche 911 (992)", price: "$6.000.000", imgSrc: "/imagen/autos prueba/auto1.webp", info: `El Porsche 911 (992) es la última evolución de un ícono del automovilismo. Con un diseño atemporal que combina elegancia y deportividad, este coupé mantiene la esencia clásica del 911 mientras incorpora tecnología de punta y un rendimiento excepcional.
            Desde su característico diseño con faros redondos hasta su silueta aerodinámica, el 911 sigue siendo uno de los deportivos más reconocibles del mundo. Su carrocería es más ancha que las generaciones anteriores, mejorando estabilidad y presencia en carretera. El motor bóxer trasero y la tracción trasera o total aseguran una conducción emocionante, con una respuesta precisa y una aceleración impresionante.`, 
            tecnico:`
            Dimensiones y Capacidades
            Longitud: 4,519 mm
            Ancho: 1,852 mm (sin espejos)
            Altura: 1,298 mm
            Distancia entre ejes: 2,450 mm
            Capacidad del maletero: 132 litros (frontal)
            Motor y Transmisión
            Tipo de motor: Bóxer de 6 cilindros, 3.0 litros biturbo
            Potencia máxima: 385 hp (Carrera) - 650 hp (Turbo S)
            Torque máximo: 450 Nm - 800 Nm (según versión)
            Transmisión: Automática PDK de 8 velocidades o manual de 7 velocidades
            Tracción: Trasera (Carrera) o Total (Carrera 4 y Turbo)
            Consumo de Combustible (aproximado)
            Ciudad: 9-10 km/l
            Carretera: 12-14 km/l
            Combinado: 10-12 km/l
            Suspensión y Frenos
            Delantera: Independiente tipo McPherson
            Trasera: Multilink
            Frenos:
            Delanteros: Discos ventilados de 330-420 mm
            Traseros: Discos ventilados de 330-410 mm
            Opción de frenos cerámicos Porsche (PCCB)
            Neumáticos y Rines
            Medidas de neumáticos: 245/35 ZR20 (delante) - 305/30 ZR21 (detrás)
            Rines: Aleación ligera de 20 o 21 pulgadas
            Equipamiento de Seguridad
            Airbags: Frontales, laterales y de cortina
            Frenos ABS con EBD y asistente de frenado
            Control de estabilidad (PSM - Porsche Stability Management)
            Control de tracción (PTM - Porsche Traction Management)
            Asistente de mantenimiento de carril y de frenado de emergencia
            Cámara de reversa y sensores de proximidad
            Tecnología y Conectividad
            Pantalla táctil: 10.9 pulgadas con Porsche Communication Management
            Compatibilidad: Apple CarPlay y Android Auto
            Sistema de sonido: Bose o Burmester (según versión)
            Iluminación LED Matrix con luces adaptativas
            Climatización automática bizona
            Modo de manejo Sport y Sport+ con Launch Control
            `
        },
        { title: "Toyota Corola", price: "$4.200.000", imgSrc: "/imagen/autos prueba/auto2.webp", info: `El Toyota Corolla es uno de los automóviles más icónicos y vendidos del mundo, conocido por su equilibrio entre confiabilidad, eficiencia y tecnología. A lo largo de más de 50 años y múltiples generaciones, ha evolucionado hasta convertirse en un sedán moderno, seguro y cómodo, ideal tanto para el uso diario como para viajes largos.`,
            tecnico:`
            Dimensiones y Capacidades
            Longitud: 4,630 mm
            Ancho: 1,780 mm
            Altura: 1,435 mm
            Distancia entre ejes: 2,700 mm
            Capacidad del maletero: 470 litros
            Motor y Transmisión
            Tipo de motor: 4 cilindros, 2.0 litros DOHC VVT-iE
            Potencia máxima: 170 hp @ 6,600 rpm
            Torque máximo: 200 Nm @ 4,400 rpm
            Transmisión: Automática CVT de 10 velocidades simuladas o Manual de 6 velocidades
            Tracción: Delantera
            Consumo de Combustible (aproximado)
            Ciudad: 14 km/l
            Carretera: 20 km/l
            Combinado: 17 km/l
            Suspensión y Frenos
            Delantera: Independiente tipo McPherson
            Trasera: Multilink
            Frenos:
            Delanteros: Discos ventilados
            Traseros: Discos sólidos
            Neumáticos y Rines
            Medidas de neumáticos: 205/55 R16 o 225/45 R18 (según versión)
            Rines: Aleación de aluminio de 16" o 18"
            Equipamiento de Seguridad
            Airbags: 7 (frontales, laterales, de cortina y de rodilla para conductor)
            Frenos ABS con EBD y BA (asistencia de frenado de emergencia)
            Control de estabilidad (VSC) y control de tracción (TRC)
            Asistente de arranque en pendientes (HAC)
            Cámara de reversa con sensores de proximidad
            Sistemas de asistencia Toyota Safety Sense:
            Control de crucero adaptativo
            Asistente de mantenimiento de carril
            Frenado autónomo de emergencia con detección de peatones
            Tecnología y Conectividad
            Pantalla táctil: 8 o 10.5 pulgadas con sistema multimedia Toyota
            Compatibilidad: Android Auto y Apple CarPlay
            Sistema de sonido: 6 parlantes o JBL premium (según versión)
            Aire acondicionado: Automático bizona
            Iluminación LED con luces diurnas DRL
            Llave inteligente con botón de encendido
            `
         },
                
        { title: "Kia K3", price: "$2.500.000", imgSrc: "/imagen/autos prueba/auto3.webp", info: `El Kia K3 Cross es un vehículo que fusiona el diseño deportivo con la funcionalidad moderna, ofreciendo una experiencia de conducción dinámica y segura.
            Motor Eficiente: Equipado con un motor de 1.6 litros que genera 121 caballos de fuerza y 151 Nm de torque, acoplado a una transmisión automática de 6 velocidades, proporcionando una conducción eficiente y dinámica.
            Sistemas Avanzados: Incorpora 6 airbags, sistema de frenos ABS con EBD, control electrónico de estabilidad y asistente de arranque en pendientes. Además, en versiones superiores, ofrece asistencias avanzadas como alerta de colisión frontal y asistente de mantenimiento de carril.`,
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