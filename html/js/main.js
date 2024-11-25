const loadProductsButton = document.getElementById("btnLoadProducts");

loadProductsButton.addEventListener("click", async () => {
    const container = document.getElementById("cardProductos");

    const displayProducts = (products) => {
        container.innerHTML = ""; 
        products.slice(0, 9).forEach(product => {
            const card = document.createElement("div");
            card.className = "col";


            card.innerHTML = `
                <div class="card shadow-sm">
                    <img class="bd-placeholder-img card-img-top" src="${product.image}" alt="${product.title}" width="100%" height="225">
                    <div class="card-body">
                        <p class="card-text">${product.description}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                            </div>
                            <small class="text-body-secondary">$${product.price}</small>
                        </div>
                    </div>
                </div>
            `;

        container.appendChild(card);
        
        });
    };

    try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
            throw new Error("Error al cargar los productos.");
        }
        const products = await response.json();
        displayProducts(products); // Aquí se llama la función para mostrar las tarjetas
    } catch (error) {
        console.error("No se cargaron los productos:", error.message);
    }
});