document.addEventListener('DOMContentLoaded', function () {
    var orderButtons = document.querySelectorAll('.btn-order');
    var modalProductImage = document.getElementById('modalProductImage');
    var modalProductName = document.getElementById('modalProductName');
    var modalProductPrice = document.getElementById('modalProductPrice');
    var totalPrice = document.getElementById('totalPrice');
    var quantityInput = document.getElementById('quantityInput');
  
    orderButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var productId = this.getAttribute('data-id');
            var name = this.getAttribute('data-name');
            var price = this.getAttribute('data-price');
            var image = this.getAttribute('data-image');
    
            modalProductImage.src = image;
            modalProductName.textContent = name;
            modalProductPrice.textContent = `Giá: ${parseInt(price).toLocaleString()} đ`;
            modalProductPrice.setAttribute('data-price', price); 
            quantityInput.value = 1; 
            updateTotalPrice(price, 1); 
        });
    });
  
    function updateTotalPrice(price, quantity) {
        totalPrice.textContent = `Tổng tiền: ${(parseInt(price) * quantity).toLocaleString()} đ`;
    }
  
    document.getElementById('minusButton').addEventListener('click', function () {
        updateQuantity(-1);
    });
  
    document.getElementById('plusButton').addEventListener('click', function () {
        updateQuantity(1);
    });
  
    quantityInput.addEventListener('change', function () {
        updateQuantity(0);
    });
  
    function updateQuantity(change) {
        var currentQuantity = parseInt(quantityInput.value, 10);
        var newQuantity = currentQuantity + change;
        newQuantity = newQuantity > 0 ? newQuantity : 1; 
        quantityInput.value = newQuantity;
        var price = modalProductPrice.getAttribute('data-price');
        updateTotalPrice(price, newQuantity);
    }
});      