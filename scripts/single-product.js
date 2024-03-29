function changeMainPhoto(x){
  let mainImageElement = document.getElementById('main-img');
  mainImageElement.src = x;
}

function GenerateSingleProduct()
{
  let spElement = document.getElementById('single-product');
  let product = JSON.parse(localStorage.getItem('s-product'));

  if(product.type === "sneaker")
  {
    spElement.innerHTML = `
    <div class="images">
      <img class="main-img" id="main-img" src="${product.img}" alt="">
      <div class="secondary-imgs">
        <img onclick="changeMainPhoto(this.src)" src="${product.img}" alt="">
        <img onclick="changeMainPhoto(this.src)" src="${product.img2}" alt="">
        <img onclick="changeMainPhoto(this.src)" src="${product.img3}" alt="">
        <img onclick="changeMainPhoto(this.src)" src="${product.img4}" alt="">
      </div>
    </div>

    <div class="details">
      <span class="brand">${product.brand}</span>
      <h2 class="model">${product.model} </h2>
      <h4 class="price">${product.price} лв.</h4>
      <p class="product-details">${product.details}</p>

      <h4 class="size">Size</h4>
      <div class="select-add">
        <select name="sizes" id="sizes" class="sizes">
        </select>

        <button class="add-to-cart" onclick="AddSneakerToCart()">Add To <i class="bi bi-minecart-loaded"></i></button>
      </div>
      
    </div>`

    sizesElement = document.getElementById('sizes');

    product.sizes.forEach(size => {
      let option = document.createElement("option");
      option.text = size;
      option.value = size;
      sizesElement.add(option);
    });
  }
  else if(product.type === "accessory"){
    spElement.innerHTML = `
    <div class="images">
      <img class="main-img" src="${product.img}" alt="">
      <div class="secondary-imgs">
        <img onclick="changeMainPhoto(this.src)" src="${product.img}" alt="">
        <img onclick="changeMainPhoto(this.src)" src="${product.img2}" alt="">
        <img onclick="changeMainPhoto(this.src)" src="${product.img3}" alt="">
        <img onclick="changeMainPhoto(this.src)" src="${product.img4}" alt="">
      </div>
    </div>

    <div class="details">
      <span class="brand">${product.brand}</span>
      <h2 class="model">${product.model} </h2>
      <h4 class="price">${product.price} лв.</h4>
      <p class="product-details">${product.details}</p>

      <h4 class="size"></h4>
      <div class="select-add">
        <button class="add-to-cart" onclick="AddAccessoryToCart()">Add To <i class="bi bi-minecart-loaded"></i></button>
      </div>
      
    </div>`
  }
}

//dobavq sneasker v kolichkata
function AddSneakerToCart(){
  let product = JSON.parse(localStorage.getItem('s-product'));
  let sizeElement = document.getElementById("sizes");
  
  let search = CartItems.find((x) => x.id === product.id && sizeElement.value === x.size);

  if(search === undefined){
    CartItems.push({id:product.id, item: 1, size: sizesElement.value});
    search = CartItems.find((x) => x.id === product.id);
  }
  else{
    search.item += 1;
  }
  localStorage.setItem('cart-items',JSON.stringify(CartItems));
  generateCartQuantity();
}

//dobavq aksesoar
function AddAccessoryToCart(){
  let product = JSON.parse(localStorage.getItem('s-product'));
  
  let search = CartItems.find((x) => x.id === product.id);

  if(search === undefined){
    CartItems.push({id:product.id, item: 1});
    search = CartItems.find((x) => x.id === product.id);
  }
  else{
    search.item += 1;
  }
  localStorage.setItem('cart-items',JSON.stringify(CartItems));
  generateCartQuantity();
}

GenerateSingleProduct();