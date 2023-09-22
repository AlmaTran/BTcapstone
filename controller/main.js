function hienThiDS(mang) {
    var content = "";
    const originUrl = window.location.origin;

    mang.map(function (sp) {

        content += `
       
                    <div class="card-item col-12 col-md-6 col-lg-4">
                        <div class="card-item-inner">
                            <div class="card-img">
                            <a href="${originUrl}/view/chiTietSanPham.html?productId=${sp.id}">
                                    <div class="lazyload-wrapper text-center">
                                        <img src=${sp.image} 5.png" alt="" class="img-fluid">
                                    </div>
                                </a>
                            </div>
                            <div class="card-body">
                                <h3 class="">
                                  <a href="./view/chiTietSanPham.html">${sp.name}</a>
                                </h3>
                                <p>${sp.shortDescription}</p>
                                <p style="font-size: 13px; text-align: right; padding: 0px 10px; opacity: 0.8;">${sp.quantity}</p>
                            </div>
                            <div class="card-footer">
                                <div class="footer-left">
                                <i class="fa-solid fa-cart-shopping"></i>Mua ngay</div>
                                <div class="footer-right"><i class="fa-sharp fa-solid fa-tag"></i>$350</div>
                            </div>
                        </div>
                    </div>
        `
    });
    document.querySelector("#DSSP").innerHTML = content;
}

function layDanhSachSP() {
    CallAPI().then((result) => {
        console.log(result);

        hienThiDS(result.data.content)

    }).catch((error) => {
        console.log(error);
    })
}
layDanhSachSP()
///

const decreaseButton = document.getElementById('decreaseButton');
        const increaseButton = document.getElementById('increaseButton');
        const quantityElement = document.getElementById('quantity');

        // Biến lưu giá trị số lượng
        let quantity = 1;

        // Hàm cập nhật số lượng và giao diện
        function updateQuantity() {
            quantityElement.innerText = quantity;
        }

        // Bắt sự kiện click để tăng giảm số lượng
        decreaseButton.addEventListener('click', () => {
            if (quantity > 1) {
                quantity--;
                updateQuantity();
            }
        });

        increaseButton.addEventListener('click', () => {
            quantity++;
            updateQuantity();
        });

//
const cart = [];

// Hàm thêm sản phẩm vào giỏ hàng
function addToCart(productId, productPrice) {
    // Lấy số lượng sản phẩm từ số lượng đã chọn
    const quantityOrder = parseInt(document.querySelector(".sl").innerHTML);

    // Tạo một đối tượng sản phẩm
    const product = {
        id: productId,
        price: parseInt(productPrice),
        quantity: quantityOrder,
    };

    // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
    const existingProduct = cart.find((item) => item.id === productId);

    if (existingProduct) {
        // Nếu sản phẩm đã tồn tại, cập nhật số lượng
        existingProduct.quantity += quantityOrder;
    } else {
        // Nếu sản phẩm chưa tồn tại, thêm vào giỏ hàng
        cart.push(product);
    }

    // Cập nhật giỏ hàng và tính tổng tiền
    updateCart();
}

// Hàm cập nhật giỏ hàng trên giao diện và tính tổng tiền
function updateCart() {
    let totalPrice = 0;
    let totalQuantity = 0;

    // Lặp qua các sản phẩm trong giỏ hàng
    cart.forEach((product) => {
        totalPrice += product.price * product.quantity;
        totalQuantity += product.quantity;
    });

    // Hiển thị tổng tiền và số lượng sản phẩm trong giỏ hàng
    document.getElementById("tienThanhToan").textContent = totalPrice.toLocaleString();
    document.querySelector(".cart__text").textContent = totalQuantity;

    // Cập nhật danh sách sản phẩm trong giỏ hàng trên giao diện
    const cartItems = document.getElementById("tbody");
    cartItems.innerHTML = '';

    cart.forEach((product) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>
                <img width="80px" src="https://shop.cyberlearn.vn/images/adidas-prophere.png" alt="">
                <p>Product Name</p>
            </td>
            <td>${product.price.toLocaleString()} đ</td>
            <td>${product.quantity}</td>
            <td><button type="button" class="btn btn-danger" onclick="removeFromCart('${product.id}')">X</button></td>
        `;
        cartItems.appendChild(row);
    });

    // Lưu giỏ hàng vào Local Storage (nếu cần)
    saveCartToLocalStorage();
}
// ==============================
const iconCart = document.querySelector('.iconCart');
const Cart = document.querySelector('.cart');
const container = document.querySelector('.container');
const close = document.querySelector('.close');

// Bắt sự kiện khi nhấp vào biểu tượng giỏ hàng
iconCart.addEventListener('click', function () {
    // Kiểm tra xem giỏ hàng có đang ẩn (được đặt bằng right: -100%) hay không
    if (Cart.style.right === '-100%') {
        // Hiển thị giỏ hàng và thay đổi vị trí của container
        Cart.style.right = '0';
        container.style.transform = 'translateX(-400px)';
    } else {
        // Ẩn giỏ hàng và đưa container về vị trí ban đầu
        Cart.style.right = '-100%';
        container.style.transform = 'translateX(0)';
    }
});

// ================================
const btnRight = document.querySelector('.btn-right');
const btnLeft = document.querySelector('.btn-left');
btnLeft.addEventListener('click',() =>{
    const value = document.querySelector('.value');
    value.textContent = parseInt(value.textContent) - 1;
})
btnRight.addEventListener('click',() =>{
    const value = document.querySelector('.value');
    value.textContent = parseInt(value.textContent) + 1;
})

