function BrandShopGenerator()//generira shopa za vseki brand 
{
  let BrandLabelElement = document.getElementById('brand-label');
  let brand = JSON.parse(localStorage.getItem('brand'));
  let shop = document.getElementById('brand-shop');
  
  if(brand === "Supreme")
  {
    BrandLabelElement.innerHTML = `<img src="../imgs/supreme-logo.jpg" alt="">`;
  }
  else if(brand === "Air Jordan")
  {
    BrandLabelElement.innerHTML = `<img src="../imgs/jordan-logo.png" alt="">`;
  }
  else if(brand === "Nike SB")
  {
    BrandLabelElement.innerHTML = `<img src="../imgs/nike-sb-logo.jpg" alt="">`;
  }
  else if(brand === "Burberry")
  {
    BrandLabelElement.innerHTML = `<img src="../imgs/burberry-logo.png" alt="">`;
  }
  else if(brand === "Nike")
  {
    BrandLabelElement.innerHTML = `<img src="../imgs/nike-logo.webp" alt="">`;
  }
  else if(brand === "Nike Air Max")
  {
    BrandLabelElement.innerHTML = `<img src="../imgs/nike-airmax-logo.png" alt="">`;
  }
  else if(brand === "Adidas")
  {
    BrandLabelElement.innerHTML = `<img src="../imgs/adidas-logo.jpg" alt="">`;
  }
  else if(brand === "Yeezy")
  {
    BrandLabelElement.innerHTML = `<img src="../imgs/yeezy-logo.png" alt="">`;
  }

  SneakerShopProductsData.forEach(product => {
    if(product.brand.includes(brand))
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

BrandShopGenerator();