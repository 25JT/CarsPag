document.getElementById("catalogo").innerHTML = "catalogo"
document.getElementById("contactanos").innerHTML = "contactanos"
document.getElementById("buscar").innerHTML = "buscar"
document.getElementById("nombtienda").innerHTML = "SHOP NAME"
document.getElementById("ttAutos").innerHTML = "¿Buscas un auto?"


  document.addEventListener("DOMContentLoaded", function () {
    const products = [
      { title: "Borradores", price: "$400", imgSrc: "/imagen/autos prueba/auto1.webp", link: "" },
      { title: "Cuaderno", price: "$4.200", imgSrc: "/imagen/autos prueba/auto2.webp", link: "" },
      { title: "Marcadores", price: "$2.500", imgSrc: "/imagen/autos prueba/auto3.webp", link: "" },
      { title: "Ega en barra", price: "$2.400", imgSrc: "/imagen/autos prueba/auto6.webp", link: ""},
      { title: "Lapiceros en azul negro y rojo", price: "$1.200", imgSrc: "/imagen/autos prueba/auto4.webp", link: ""},
      { title: "Cuaderno", price: "$4.200", imgSrc: "/imagen/autos prueba/auto2.webp", link: "" },
      { title: "Cuaderno", price: "$4.200", imgSrc: "/imagen/autos prueba/auto3.webp", link: "" },
      { title: "Cuaderno", price: "$4.200", imgSrc: "/imagen/autos prueba/auto5.webp", link: "" },
      { title: "Cuaderno", price: "$4.200", imgSrc: "/imagen/autos prueba/auto6.webp", link: "" },
    ];
  
    const container = document.getElementById("product-container");
  
    products.forEach(product => {
      const colDiv = document.createElement("div");
      colDiv.className = "col-md-4 mb-5";
  
      const cardDiv = document.createElement("div");
      cardDiv.className = "card tarjeta";
  
      const link = document.createElement("a");
      link.href = product.link;
      link.target = "_blank ";
      
  
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
  });

  AOS.init();

  var typed = new Typed('#nombtienda', {
    strings: ['<i>SHOP NAME</i>', 'WELCOME'],
    typeSpeed: 90,
    loop: true
  });
