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


