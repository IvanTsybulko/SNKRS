function GenerateItems()
{
  let html ="";
  let OrderItemsElement = document.getElementById('order-items');

  if(CartItems.length > 0)
  {
    CartItems.forEach(item => {
      let search = SneakerShopProductsData.find((x) => x.id === item.id);
      if(search.type === "sneaker"){
        html+=`
          <div class="product-card">
            <div class="product-details">
              <h3 class="brand">${search.brand}</h3>
              <h1 class="model">${search.model}</h1>
              <h2 class="size">Size: ${item.size}</h2>
              <h2 class="quantity">Quantity: x${item.item}</h2>
              <h2 class="price">${search.price} лв.</h2>
            </div>
  
            <img class="product-img" id="product-img" onclick="OpenSingleProduct(${search.id})" src="${search.img}" alt="">
          </div>
      `;
      }
      else{
        html+=`
          <div class="product-card">
            <div class="product-details">
              <h3 class="brand">${search.brand}</h3>
              <h1 class="model">${search.model}</h1>
              <h2 class="quantity">Quantity: x${item.item}</h2>
              <h2 class="price">${search.price} лв.</h2>
            </div>
  
            <img class="product-img" id="product-img" onclick="OpenSingleProduct(${search.id})" src="${search.img}" alt="">
          </div>
      `;
      }
  
    });  
  }
  else{
    html = `
    <h1>No added Products</h1>
    <img src="imgs/sale-shoes.gif" width="30%">
    `;

  }
  OrderItemsElement.innerHTML = html;
}
GenerateItems();

function ClearCart(){
  localStorage.removeItem("cart-items");
  location.reload();
}

function generateTotalSum(){
  let totalSum = 0;

  CartItems.forEach(item => {
    let search = SneakerShopProductsData.find((x) => x.id === item.id);

    totalSum+= search.price;
  });

  let totalSumElement = document.getElementById('total-sum');

  totalSumElement.innerHTML = `Total: ${totalSum} лв.`
}

generateTotalSum();