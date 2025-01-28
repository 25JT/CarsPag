document.addEventListener("DOMContentLoaded", function() {
    const products = [
        { title: "Porsche", price: "$6.000", imgSrc: "/imagen/autos prueba/auto1.webp", link: "https://wa.me/message/Q4IDJZDEGDYYO1" },
        { title: "Toyota corola", price: "$4.200", imgSrc: "/imagen/autos prueba/auto2.webp", link: "https://wa.me/message/Q4IDJZDEGDYYO1" },
        { title: "Kia K3", price: "$2.500", imgSrc: "/imagen/autos prueba/auto3.webp", link: "https://wa.me/message/Q4IDJZDEGDYYO1" },
        
    ];

    products.sort((a, b) => a.title.localeCompare(b.title));

    const container = document.getElementById("product-container");
    const searchInput = document.getElementById("search-input");
 
    function displayProducts(filteredProducts) {
        container.innerHTML = "";
        filteredProducts.forEach(product => {
            const colDiv = document.createElement("div");
            colDiv.className = "col-md-4 mb-4";

            const cardDiv = document.createElement("div");
            cardDiv.className = "card";

            const link = document.createElement("a");
            link.href = product.link;
            link.target = "_blank";

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

            link.appendChild(img);
            cardDiv.appendChild(link);
            cardDiv.appendChild(cardBody);
            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardText);
            colDiv.appendChild(cardDiv);
            container.appendChild(colDiv);
        });
    }

    searchInput.addEventListener("input", function() {
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