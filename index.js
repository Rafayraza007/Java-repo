const productsContainer = document.getElementById('products');

// Fetch products from API
fetch('https://dummyjson.com/products')
    .then(response => response.json())
    .then(data => {
        const products = data.products;

        products.forEach(product => {
            // Create product card
            const card = document.createElement('div');
            card.classList.add('product-card');

            card.innerHTML = `
            <img src="${product.thumbnail}" alt="${product.title}">
            <div class="product-info">
              <h3>${product.title}</h3>
              <p>${product.description.substring(0, 60)}...</p>
              <div class="price">$${product.price}</div>
            </div>
          `;

            productsContainer.appendChild(card);
        });
    })
    .catch(error => {
        productsContainer.innerHTML = '<p>Failed to load products. Try again later.</p>';
        console.error('Error fetching products:', error);
    });