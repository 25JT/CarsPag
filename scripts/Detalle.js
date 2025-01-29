
AOS.init();


document.addEventListener("DOMContentLoaded", function () { 
    // Obtener los parámetros de la URL
    const params = new URLSearchParams(window.location.search);
    const title = params.get('title');
    const price = params.get('price');
    const imgSrc = params.get('imgSrc');
    const info = params.get('info');
    const tecnico = params.get('tecnico');

    // Insertar los detalles en la página
    const detailsContainer = document.getElementById('product-details');
    detailsContainer.innerHTML = `
        <div class="titBorder" style="margin-left:0%; margin-right:0%; border-radius:10px;">
            <div class="botonCatal">
            <h2 class="fw-bold h2  text-center caja" id="productos_Autos" style="text-transform: uppercase;"></h2>
            
             <a href="Catalogo.html" class="btn btn-secondary mt-4">Volver al catálogo</a>
            </div>
            
        </div>
        <div class="text-center">
            <img src="${imgSrc}" alt="${title}" class="img-fluid my-4 imgDetalle">
        </div>
        <p><strong>Precio:</strong> ${price}</p>
        <p>${info}</p>
        <h3 class="mt-4">Especificaciones Técnicas:</h3>
        <div class="table-info">${createTableFromTechnical(tecnico)}</div>
        
        <a href="Catalogo.html" class="btn btn-secondary mt-4">Volver al catálogo</a>
    `;

    // Función para crear la tabla desde las especificaciones técnicas
    function createTableFromTechnical(tecnicoText) {
        const rows = tecnicoText.split('\n').filter(row => row.trim() !== "");
        let tableHTML = '<table class="tableifn table-striped table-bordered m-4">';
        rows.forEach(row => {
            if (row.includes(':')) {
                const [key, value] = row.split(':').map(part => part.trim());
                tableHTML += `

                 <tr>
                        <th><i>${key}</i></th>
                        <td>${value}</td>
                    </tr>
               
                   `;
            } else {
                // Para secciones sin ":" (como encabezados)
                tableHTML += `
                    <tr>
                        <th colspan="2">${row}</th>
                    </tr>`;
            }
        });
        tableHTML += '</table>';
        return tableHTML;
    } 
    
    var typed = new Typed('#productos_Autos', {
        strings: [title],
        typeSpeed: 150,
        loop: false,
        showCursor: false
      });
});
  