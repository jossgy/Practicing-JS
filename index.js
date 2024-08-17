// Definimos un array de objetos que representa los productos disponibles en la tienda
const products = [
    {
        id: 1,
        name: 'Ciudad de México',
        price: 1000,
        attractions: 'El Zócalo, Museo Frida Kahlo, Museo Nacional de Antropología, Coyoacán, Xochimilco',
        description: 'La capital del país es un crisol de cultura, historia y modernidad. Aquí encontrarás una gran cantidad de museos, sitios arqueológicos y una vibrante vida nocturna.',
        image: 'https://images.unsplash.com/photo-1694462903956-0212f05dae35?q=80&w=1919&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 2,
        name: 'Quintana Roo',
        price: 1500,
        attractions: 'Cancún, Tulum, Playa del Carmen, Cozumel, Reserva de Sian Ka\'an',
        description: 'Este estado es famoso por sus playas de arena blanca, aguas turquesas y sitios arqueológicos mayas. Es ideal para los amantes del sol, el mar y la historia.',
        image: 'https://images.unsplash.com/photo-1608322680960-20f9000892de?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 3,
        name: 'Yucatán',
        price: 1000,
        attractions: 'Chichén Itzá, Mérida, Uxmal, Cenotes, Valladolid',
        description: 'Cuna de la civilización maya, Yucatán ofrece una rica combinación de arqueología, cultura colonial y belleza natural.',
        image: 'https://images.unsplash.com/photo-1653423383200-5af8e48d9867?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 4,
        name: 'Jalisco',
        price: 1300,
        attractions: 'Guadalajara, Puerto Vallarta, Tequila, Chapala, Tlaquepaque',
        description: 'Este estado es famoso por su mariachi, tequila, y su vibrante cultura. Guadalajara es una ciudad llena de tradición, mientras que Puerto Vallarta es un destino costero encantador.',
        image: 'https://plus.unsplash.com/premium_photo-1697730090213-59f76642099d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 5,
        name: 'Oaxaca',
        price: 1500,
        attractions: 'Oaxaca de Juárez, Monte Albán, Hierve el Agua, Mazunte, Huatulco',
        description: 'Conocido por su riqueza cultural y gastronómica, Oaxaca es un destino imprescindible para los que buscan sumergirse en las tradiciones mexicanas.',
        image: 'https://images.unsplash.com/photo-1562869929-bda0650edb1f?q=80&w=1784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 6,
        name: 'Baja California',
        price: 1500,
        attractions: 'Ensenada, Valle de Guadalupe, La Paz, Los Cabos, Parque Nacional Sierra de San Pedro Mártir',
        description: 'Ofrece una combinación única de paisajes desérticos, viñedos, y playas. Es ideal para los que disfrutan del ecoturismo y el enoturismo.',
        image: 'https://images.unsplash.com/photo-1580250864656-cd501faa9c76?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 7,
        name: 'Chiapas',
        price: 1000,
        attractions: 'San Cristóbal de las Casas, Palenque, Cañón del Sumidero, Agua Azul, Lagos de Montebello',
        description: 'Chiapas es un paraíso para los amantes de la naturaleza y la historia. Su biodiversidad y sus sitios arqueológicos mayas lo convierten en un destino único.',
        image: 'https://images.unsplash.com/photo-1597738090442-fea4bca79981?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 8,
        name: 'Guanajuato',
        price: 1000,
        attractions: 'Guanajuato capital, San Miguel de Allende, Dolores Hidalgo, León',
        description: 'Este estado es conocido por su arquitectura colonial, calles empedradas, y su rica historia relacionada con la independencia de México.',
        image: 'https://images.unsplash.com/photo-1579116317002-fd0cedb52425?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 9,
        name: 'Puebla',
        price: 1200,
        attractions: 'Puebla capital, Cholula, Atlixco, Chignahuapan, Huauchinango',
        description: 'Puebla es famosa por su impresionante arquitectura colonial, su deliciosa gastronomía (como los chiles en nogada) y sus hermosas iglesias.',
        image: 'https://plus.unsplash.com/premium_photo-1664475990295-e4518c63edaf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 10,
        name: 'Veracruz',
        price: 1200,
        attractions: 'Veracruz puerto, Xalapa, El Tajín, Coatepec, Catemaco',
        description: 'Veracruz es un estado con una rica mezcla de culturas, tradiciones y paisajes naturales. Ofrece desde playas hasta selvas, y es famoso por su música y danza jarocha.',
        image: 'https://images.unsplash.com/photo-1619565900877-b99a606d0ff7?q=80&w=1947&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
];

// Seleccionamos los elementos HTML donde se mostrará la información del carrito y productos
const productsList = document.querySelector('.container-items');
const countProductos = document.getElementById('contador-productos');
const containerCardProducts = document.querySelector('.container-card-products');
const detailsProducts = document.querySelector('.details-cont');
const totalPagar = document.querySelector('.total-pagar');
const modalOverlay = document.querySelector('.modal-overlay');
const closeModalBtn = document.querySelector('.icon-close');
const buyButton = document.getElementById('buy-button');

//En sta variable guardaremos los productos añadidos
let selectedProducts = [];

// Función para renderizar (mostrar) los productos en la página
function renderProducts() {
    // Recorremos el array de productos para generar el HTML de cada producto
    products.forEach(product => {
        const productHTML = `
            <div class="item" id="product-${product.id}">
                <figure>
                    <img src="${product.image}" alt="producto" />
                </figure>
                <div class="info-producto">
                    <h2>${product.name}</h2>
                    <p class="price">$${product.price}</p>
                    <p>Atracciones: ${product.attractions}</p>
                    <p>Descripción: ${product.description}</p>
                    <button class="btn-add-card" id="btn-${product.id}">Añadir al carrito</button>
                </div>
            </div>
        `;
        productsList.innerHTML += productHTML; // Agregamos el HTML generado al contenedor de productos
    });
    
    // Añadimos eventos a los botones "Añadir al carrito" para cada producto
    products.forEach(product => {
        const button = document.getElementById(`btn-${product.id}`);
        button.addEventListener('click', () => {
            addProductToCard(product);// Llamamos a la función que agrega el producto al carrito
        });
    });
}

// Función para agregar un producto al carrito
function addProductToCard(product) {
    selectedProducts.push(product); // Agregamos el producto seleccionado al array de productos seleccionados
    countProductos.textContent = selectedProducts.length; // Actualizamos el contador de productos en el carrito
    // Generamos el HTML para mostrar el producto en el modal del carrito
      
    const productRow = `
        <div class="card-producto">
            <div class="info-card-producto">
                <span class="cantidad-producto-carrito">1</span>
                <p class="titulo-producto-carrito">${product.name}</p>
                <span class="precio-pruducto-carrito">$${product.price}</span>
            </div>    
        </div>
    `;
    detailsProducts.innerHTML += productRow; // Agregamos el producto al contenedor de detalles del carrito
    
    // Calculamos el costo total de los productos seleccionados
    const totalCost = selectedProducts.reduce((total, item) => total + item.price, 0);
    totalPagar.textContent = `$${totalCost}`; // Actualizamos el total a pagar en el modalshowCardModal();
    
    // Mostramos el modal del carrito
    showCardModal();
}

// Función para mostrar el modal del carrito
function showCardModal() {
    modalOverlay.classList.add('visible-overlay'); // Mostramos el fondo oscuro
    containerCardProducts.classList.add('visible-card'); // Mostramos el modal del carrito
}

// Función para cerrar el modal del carrito
function closeCardModal() {
    modalOverlay.classList.remove('visible-overlay'); // Ocultamos el fondo oscuro
    containerCardProducts.classList.remove('visible-card'); // Ocultamos el modal del carrito
}

// Añadimos el evento de cierre del modal al botón de cerrar y al fondo oscuro
closeModalBtn.addEventListener('click', closeCardModal);
modalOverlay.addEventListener('click', closeCardModal);

renderProducts(); // Llamamos a la función para renderizar los productos cuando se carga la página
// Añadimos el evento de clic al botón de compra para mostrar un mensaje de éxito
buyButton.addEventListener('click', () => {
    alert('Compra exitosa, mi Amor!'); // Mostramos un mensaje de éxito al usuario
    closeCardModal(); // Cerramos el modal del carrito
});