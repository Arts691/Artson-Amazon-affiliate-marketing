document.addEventListener("DOMContentLoaded", function() {
    // Fetch products from PHP endpoint
    fetchProducts();
});

function fetchProducts() {
    fetch('products.php')
    .then(response => response.json())
    .then(data => {
        const productsContainer = document.getElementById('products');
        productsContainer.innerHTML = '';

        data.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');

            const image = document.createElement('img');
            image.src = product.image;
            productDiv.appendChild(image);

            const title = document.createElement('h2');
            title.textContent = product.title;
            productDiv.appendChild(title);

            const description = document.createElement('p');
            description.textContent = product.description;
            productDiv.appendChild(description);

            const price = document.createElement('p');
            price.textContent = `Price: $${product.price}`;
            productDiv.appendChild(price);

            const affiliateLink = document.createElement('a');
            affiliateLink.href = product.affiliateLink;
            affiliateLink.textContent = 'Buy on Amazon';
            productDiv.appendChild(affiliateLink);

            productsContainer.appendChild(productDiv);
        });
    })
    .catch(error => console.error('Error fetching products:', error));
}
