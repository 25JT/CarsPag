document.addEventListener("DOMContentLoaded", function () {
    const products = [
        { title: "Porsche", price: "$6.000", imgSrc: "/imagen/autos prueba/auto1.webp", info: "Más detalles sobre el Porsche..." },
        { title: "Toyota Corola", price: "$4.200", imgSrc: "/imagen/autos prueba/auto2.webp", info: "Más detalles sobre el Toyota Corola..." },
        { title: "Kia K3", price: "$2.500", imgSrc: "/imagen/autos prueba/auto3.webp", info: "Más detalles sobre el Kia K3..." },
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
            infoLink.href = `detalle.html?title=${encodeURIComponent(product.title)}&price=${encodeURIComponent(product.price)}&imgSrc=${encodeURIComponent(product.imgSrc)}&info=${encodeURIComponent(product.info)}`;
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
  loop: true
});