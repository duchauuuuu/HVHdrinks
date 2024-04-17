function displayProductsInRows(productsArray) {
    var productContainer = document.querySelector('.product-list .row');
    productContainer.innerHTML = ''; 

    var newRow = document.createElement('div');
    newRow.className = 'row';
    productsArray.forEach(function(product, index) {
        if (index % 4 === 0 && index !== 0) { 
            productContainer.appendChild(newRow);
            newRow = document.createElement('div');
            newRow.className = 'row';
        }
        newRow.appendChild(product);
    });
    
    if (newRow.hasChildNodes()) {
        productContainer.appendChild(newRow);
    }
}

function sortProductsByPrice(order) {
    var productsArray = Array.from(originalProductsList);

    if (order !== 'default') {
        productsArray.sort(function(a, b) {
            var priceA = parseInt(a.querySelector('.card-text').textContent.replace(/[^0-9]/g, ''));
            var priceB = parseInt(b.querySelector('.card-text').textContent.replace(/[^0-9]/g, ''));
            return order === 'lowToHigh' ? priceA - priceB : priceB - priceA;
        });
    }

    return productsArray;
}

function searchProductsByName(searchTerm) {
    var productsArray = Array.from(originalProductsList);
    if (searchTerm) {
        productsArray = productsArray.filter(function(product) {
            var title = product.querySelector('.card-title').textContent.toLowerCase();
            return title.includes(searchTerm.toLowerCase());
        });
    }
    return productsArray;
}

document.addEventListener('DOMContentLoaded', function() {
    originalProductsList = document.querySelectorAll('.product-list .row .col-md-3');
    document.getElementById('priceSelect').addEventListener('change', function() {
        var order = this.value; 
        var sortedOrResetProducts = sortProductsByPrice(order);
        displayProductsInRows(sortedOrResetProducts);
    });

    document.getElementById('searchButton').addEventListener('click', function() {
        var searchTerm = document.getElementById('searchInput').value;
        var filteredProducts = searchProductsByName(searchTerm);
        displayProductsInRows(filteredProducts);
    });
    
    document.getElementById('searchInput').addEventListener('keyup', function(event) {
        var searchTerm = event.target.value;
        var filteredProducts = searchProductsByName(searchTerm);
        displayProductsInRows(filteredProducts);
    });
});




