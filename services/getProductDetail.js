function getProductDetail() {
    // Get the URL parameters
    const urlParams = new URLSearchParams(window.location.search);
  
    // Get the productId value from the URL
    const productId = Number(urlParams.get('productId'));
    CallAPI().then((result) => {
      console.log('view data', result.data.content);
      const productList = result.data.content;
      const product = productList.find(item => item.id === productId);
      console.log('view product', product)
      const size = JSON.parse(product.size);
      let sizeList = "";
      size.map(number => sizeList += `<li>${number}</li>`);
      console.log('view size', sizeList)
      const productHtml = `
        <div class="detail-body-left">
            <div class="lazyload-wrapper ">
                <img src="${product.image}" alt="">
            </div>
        </div>
        <div class="detail-body-right">
            <p>${product.description}
            </p>
            <p class="price-layout">
                <span class="price"><i class="fa-solid fa-tag"></i>${product.price}</span>
                <span
                    class="like"><i class="fa-regular fa-heart "></i>Like
                </span>
            </p>
            <h1>Size có sẵn</h1>
            <div class="detail-body-size">
                <ul>${sizeList}</ul>
            </div>
            <div class="detail-body-number">
                <div class="detail-body-number-left">
                    <button disabled="" class="btn">
                        <i class="fa fa-caret-left"></i>
                    </button>
                    <span>1</span>
                    <button class="btn">
                        <i class="fa fa-caret-right"></i>
                    </button>
                </div>
                <div class="detail-body-number-right">
                    <button class="btn btn-brown">
                        <i class="fa-solid fa-cart-plus"></i>Thêm vào giỏ
                    </button>
                </div>
            </div>
            <div class="detail-body-sold">Đã bán: <b>${product.quanlity}</b></div>
        </div>
      `;
      const detailBody = document.getElementById('detail-body');
      detailBody.innerHTML = productHtml;
    }).catch((error) => {
        console.log(error);
    })
  }
  
  getProductDetail();