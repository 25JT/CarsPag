
AOS.init();

const params = new URLSearchParams(window.location.search);
const title = params.get('title') || 'Título no disponible';
const price = params.get('price') || 'Precio no disponible';
const imgSrc = params.get('imgSrc') || 'default.jpg';
const info = params.get('info') || 'Información no disponible';
const tecnico = params.get('tecnico') || 'Especificaciones no disponibles';

// Insertar los detalles en la página
const detailsContainer = document.getElementById('product-details');
detailsContainer.innerHTML = `
    <div class="titBorder" style="margin-left:0%; margin-right:0%; border-radius:10px;">
        <div class="botonCatal">
        <h2 class="fw-bold h2  text-center caja" id="productos_Autos" style="text-transform: uppercase;"></h2>
         <button onclick="window.close(); return false;" class="btn-detalles btn-secondary mt-4">Volver al catálogo</button>
        </div>
    </div>
    <div class="text-center">
        <img src="${sanitizeHTML(imgSrc)}" alt="${sanitizeHTML(title)}" class="img-fluid my-4 imgDetalle">
    </div>
    <div class="LetraDetalle">
        <h3> Acerca de</h3>
        <p>${sanitizeHTML(info)}</p>
        <br>

        <h3 ><strong>Precio:</strong></h3>
        <br>
        <h4>${sanitizeHTML(price)}</h4>
        <br>
     
        <h3 class="mt-4">Especificaciones Técnicas:</h3>
        </div>
     
 
    <div class="table-info">${createTableFromTechnical(tecnico)}</div>
    <button onclick="window.open('https://wa.me/?text=Hola%20me%20interesa%20este%20producto', '_blank'); return false;" class="btn-detalles btn-secondary mt-4">Whatsapp</button>
    <button onclick="window.close(); return false;" class="btn-detalles btn-secondary mt-4">Volver al catálogo</button>
 
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
                    <th><i>${sanitizeHTML(key)}</i></th>
                    <td>${sanitizeHTML(value)}</td>
                </tr>
            `;
        }
        
 
    });
 

    tableHTML += '</table>';
    return tableHTML;    
}
var typed = new Typed('#productos_Autos', {
    strings: [title],
    typeSpeed: 90,
    loop: true,
    showCursor: false
  });


// Función para sanitizar HTML
function sanitizeHTML(str) {
    const temp = document.createElement('div');
    temp.textContent = str;
    return temp.innerHTML;
}


