function ExampleShopGenerator()
{
  let shop = document.getElementById('example-shop');//vzima shop elementa

  for(let i = 0; i < 4; i++) //generira 4 obuvki
  {
    let product = SneakerShopProductsData[i];
    shop.innerHTML += `<div class="card" onclick="OpenSingleProduct('${product.id}')">
    <img src="${product.img}" alt="product">
    <div class="card-details">
      <span class="brand">${product.brand}</span>
      <h2 class="model">${product.model}</h2>
      <h4 class="price">${product.price} лв.</h4>
    </div>
    </div>`;
  }

  for(let i = 16; i < 20; i++) //generira 4 akesoara
  {
    let product = SneakerShopProductsData[i];
    shop.innerHTML += `<div class="card" onclick="OpenSingleProduct('${product.id}')">
    <img src="${product.img}" alt="product">
    <div class="card-details">
      <span class="brand">${product.brand}</span>
      <h2 class="model">${product.model}</h2>
      <h4 class="price">${product.price} лв.</h4>
    </div>
    </div>`;
  }
}

ExampleShopGenerator();