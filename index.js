// index.js
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
    // Agrega más productos aquí siguiendo el mismo formato
];

const productsList = document.querySelector('.container-items');

function renderProducts() {
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
                    <button class="btn-add-card" id=${product.id}>Añadir al carrito</button>
                </div>
            </div>
        `;
        productsList.innerHTML += productHTML;
    });
}


renderProducts();
