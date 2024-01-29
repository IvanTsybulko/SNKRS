function addCopy(productID, size){
  let search = CartItems.find((x) => x.id === productID && x.size === size.toString());
  search.item+=1;
  localStorage.setItem('cart-items',JSON.stringify(CartItems));
  generateTotalSum();
  GenerateItems();
  generateCartQuantity();
  
}

function DeleateCopy(productID, size){
  let search = CartItems.find((x) => x.id === productID && x.size === size.toString());
  search.item-=1;

  if(search.item == 0){
    let index = CartItems.indexOf(search);
    CartItems.splice(index,1);
  }
  localStorage.setItem('cart-items',JSON.stringify(CartItems));
  generateTotalSum();
  GenerateItems();
  generateCartQuantity();
}

function addCopyA(productID){
  let search = CartItems.find((x) => x.id === productID);
  search.item+=1;
  localStorage.setItem('cart-items',JSON.stringify(CartItems));
  generateTotalSum();
  GenerateItems();
  generateCartQuantity();
  
}

function DeleateCopyA(productID){
  let search = CartItems.find((x) => x.id === productID);
  search.item-=1;
  if(search.item == 0){
    let index = CartItems.indexOf(search);
    CartItems.splice(index,1);
  }
  localStorage.setItem('cart-items',JSON.stringify(CartItems));
  generateTotalSum();
  GenerateItems();
  generateCartQuantity();
}

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
              <h2 class="quantity"><i onclick="DeleateCopy(${item.id}, ${item.size})" class="bi bi-dash-circle"></i> ${item.item} <i onclick="addCopy(${item.id}, ${item.size})" class="bi bi-plus-circle"></i></h2>
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
              <h2 class="quantity"><i onclick="DeleateCopyA(${item.id})" class="bi bi-dash-circle"></i> ${item.item} <i onclick="addCopyA(${item.id})" class="bi bi-plus-circle"></i></h2>
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

    totalSum+= search.price * item.item;
  });

  let totalSumElement = document.getElementById('total-sum');

  totalSumElement.innerHTML = `Total: ${totalSum} лв.`
}

generateTotalSum();