var mockData = [
    {
        link: '../html_duchau/Cotton_candy.html',
        picture: '../img/quangcao1.png',
        name: 'Cotton Candy Milk Tea',
        detail: 'Tên món Size Giá tiền(VNĐ)',
    },
    {
        link: '../html_duchau/Grape_Smoothie.html',
        picture: '../img/quangcao2.png',
        name: 'Grape Smoothie',
        detail: 'Tên món Size Giá tiền(VNĐ)',
    },
    {
        link: '../html_duchau/MILO_Kem_Chanh.html',
        picture: '../img/quangcao3.png',
        name: 'MILO Kem Chanh',
        detail: 'Tên món Size Giá tiền(VNĐ)',
    },
    {
        link: '../html_duchau/matcha.html',
        picture: '../img/quangcao4.png',
        name: 'Trà Sữa Matcha',
        detail: 'Tên món Size Giá tiền(VNĐ)',
    },
    {
        link: '../html_duchau/Bac_Ha.html',
        picture: '../img/quangcao5.png',
        name: 'Trà Sữa Bạc Hà',
        detail: 'Tên món Size Giá tiền(VNĐ)',
    },
    {
        link: '../html_duchau/Tra_Sua_Dau.html',
        picture: '../img/quangcao6.png',
        name: 'Trà Sữa Dâu',
        detail: 'Tên món Size Giá tiền(VNĐ)',
    },
];

var productsContainer = document.querySelector('.products');

function renderProducts(products) {
    productsContainer.innerHTML = '';
    products.forEach(item => {
        var newProduct = document.createElement('a');
        newProduct.href = item.link;

        var product = document.createElement('div');
        product.classList.add('product');

        product.innerHTML = `
            <img src="${item.picture}" alt="">
            <div class="info">
                <div class="name" style="color: #80b7ff;">${item.name}</div>
                <div class="detail" style="color: #8b8b8b;">${item.detail}</div>
            </div>
        `;

        newProduct.classList.add('link_product');
        newProduct.appendChild(product);
        productsContainer.appendChild(newProduct);
    });
}

renderProducts(mockData);

var searchInput = document.querySelector('.search input');

// Ẩn danh sách sản phẩm khi trang vừa được tải
productsContainer.classList.add('hide');

// Hiển thị danh sách sản phẩm khi ô tìm kiếm hoặc danh sách sản phẩm được click
searchInput.addEventListener('mousedown', function () {
    productsContainer.classList.remove('hide');
});

// Ẩn danh sách sản phẩm khi di chuột ra khỏi ô tìm kiếm hoặc danh sách sản phẩm
document.addEventListener('mousedown', function (event) {
    if (!event.target.closest('.search') && !event.target.closest('.products')) {
        productsContainer.classList.add('hide');
    }
});

searchInput.addEventListener('input', function (e) {
    let txtSearch = e.target.value.trim().toLowerCase();
    let listProductDOM = document.querySelectorAll('.product');
    listProductDOM.forEach(item => {
        if (item.innerText.toLowerCase().includes(txtSearch)) {
            item.classList.remove('hide');
        } else {
            item.classList.add('hide');
        }
    });
});
