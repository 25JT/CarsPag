

AOS.init();

        // Obtener los parámetros de la URL
        const params = new URLSearchParams(window.location.search);
        const title = params.get('title');
        const price = params.get('price');
        const imgSrc = params.get('imgSrc');
        const info = params.get('info');

        // Insertar los detalles en la página
        const detailsContainer = document.getElementById('product-details');
        detailsContainer.innerHTML = `
            
            <div class="p-2 titBorder"  style="margin-left:0%; margin-right:0%; border-radius:0px;">
            <h2 class="fw-bold h2 p-2 text-center " id="productos_Autos" style="text-transform: uppercase;" >${title}</h2>
            </div>
            <div>
            <img src="${imgSrc}" alt="${title}" class="img-fluid my-4 imgDetalle">
            </div>
            
            <p>${info}</p>
            
            <p><strong>Precio:</strong> ${price}</p>
            <a href="Catalogo.html" class="btn btn-secondary">Volver al catálogo</a>     
        `;
        


        var typed = new Typed('#productos_Autos', {
            strings: [title],
            typeSpeed: 150,
            loop: false
          });