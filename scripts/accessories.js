function AccessoriesShopGenerator()
{
  let shop = document.getElementById('accessories-shop');

  SneakerShopProductsData.forEach(product => {
    if(product.type === "accessory")
    shop.innerHTML += `<div class="card" onclick="OpenSingleProduct('${product.id}')">
    <img src="${product.img}" alt="product">
    <div class="card-details">
      <span class="brand">${product.brand}</span>
      <h2 class="model">${product.model}</h2>
      <h4 class="price">${product.price} лв.</h4>
    </div>
  </div>`;
  });
}
AccessoriesShopGenerator();