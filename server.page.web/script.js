document.addEventListener('DOMContentLoaded', () => {
    // Botones para añadir al carrito (estaticos y dinamicos)
    const addToCartButtons = document.querySelectorAll('.product button');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Producto añadido al carrito');
        });
    });

    //Búsqueda simple (simulada)
    const searchButton = document.querySelector('.search-bar button');
    searchButton.addEventListener('click', () => {
        const query = document.querySelector('.search-bar input').value;
        if (query) {
            alert('Buscando: ${query}');
        }
});

    //Modal de login
    const loginBtn = document.getElementById('login-Btn');
    const loginModal = document.getElementById('login-modal');
    const closeModalBtn = document.getElementById('close-modal');

    loginBtn.addEventListener('click', () => {
        loginModal.showModal(); // Muestra el modal
    });

    closeModalBtn.addEventListener('click', () => {
        loginModal.closest(); // Cierra el modal
    });

    //Submint simulado del form (solo alerta, sin envio real)
    loginModal.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Sesion iniciada exitosamente');
        loginModal.closest();
    });

    // Cargar productos dinamicos desde API (fake store API - segura y publica)
    async function loadProducts() {
        try {
            const response = await fetch('https://fakestoreapi.com/products?limit=5');
            if (!response.ok) throw new Error('Error en API');
            const products = await response.json();
            const productGrid = document.getElementById('product-grid');

            // Limpiar Productos estaticos si quieres. o agregar al final
            // productoGrid.innerHTML = ''; // Descomenta para reemplazar

            products.forEach(product => {
                const article = document.createElement('article');
                article.classList.add('product');
                article.innerHTML = `
                    <img src="${product.image}" alt="${product.title}">
                    <h3>${product.title}</h3>
                    <p class="price">$${product.price}</p>
                    <button>Añadir al carrito</button>
                `;
                // Agregar evento al nuevo boton
                article.querySelector('button').addEventListener('click', () => {
                    alert('Producto añadido al carrito');
                });
            });
    } catch (error) {
        console.error('Error cargando productos:', error);
        // Fallback: Usa estaticos si API falla

    }
}

loadProducts(); // Llama a la funcion al cargar la pagina

});