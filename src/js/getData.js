const mainStore = document.querySelector('.store-main');
let arr = [];

fetch('other/example.json')
  .then(response => {
    return response.json()
  })
  .then(data => {

    for (let i = 0; i < 4; i++) {
        
        let product = `<div class="product"><div class="product-inner"><div class="inner-upper"><div class="promobox"><div class="number"><img src="images/cart.svg"><span>sztuk: 1</span></div><div class="discount">oszczędasz: <span>${(data.list[i].price.gross.base_float) - (data.list[i].price.gross.promo_float)}zł</span></div></div></div><img class="inner-photo" src="https://outletmeblowy.pl/environment/cache/images/300_300_productGfx_${data.list[i].main_image}.jpg"></img><div class="inner-parameters"><span class="price">${data.list[i].price.gross.final}</span><del class="base-price">${data.list[i].price.gross.base}</del><p class="name">${data.list[i].name}</p><p class="brand">${data.list[i].producer.name}</p></div></div></div>`;

        mainStore.innerHTML += product;
    }

    const buttons = document.querySelectorAll('.button');
    for (const button of buttons) {
        let product = `<div class="product"><div class="product-inner"><div class="inner-upper"><div class="promobox"><div class="number"><img src="images/cart.svg"><span>sztuk: 1</span></div><div class="discount">oszczędasz: <span>${(data.list[i].price.gross.base_float) - (data.list[i].price.gross.promo_float)}zł</span></div></div></div><img class="inner-photo" src="https://outletmeblowy.pl/environment/cache/images/300_300_productGfx_${data.list[i].main_image}.jpg"></img><div class="inner-parameters"><span class="price">${data.list[i].price.gross.final}</span><del class="base-price">${data.list[i].price.gross.base}</del><p class="name">${data.list[i].name}</p><p class="brand">${data.list[i].producer.name}</p></div></div></div>`;
        button.addEventListener('click', function(e) {
            let viewData = e.target.getAttribute('data-view');
            //button.classList.toggle('button-active');
            if (viewData == 2) {
                mainStore.innerHTML = "";
                for (let i = 0; i < 2; i++) {
                    mainStore.innerHTML += `<div class="product"><div class="product-inner"><div class="inner-upper"><div class="promobox"><div class="number"><img src="images/cart.svg"><span>sztuk: 1</span></div><div class="discount">oszczędasz: <span>${(data.list[i].price.gross.base_float) - (data.list[i].price.gross.promo_float)}zł</span></div></div></div><img class="inner-photo" src="https://outletmeblowy.pl/environment/cache/images/300_300_productGfx_${data.list[i].main_image}.jpg"></img><div class="inner-parameters"><span class="price">${data.list[i].price.gross.final}</span><del class="base-price">${data.list[i].price.gross.base}</del><p class="name">${data.list[i].name}</p><p class="brand">${data.list[i].producer.name}</p></div></div></div>`;
                }
            } else if ( viewData == 4) {
                mainStore.innerHTML = "";
                for (let i = 0; i < 4; i++) {
                    mainStore.innerHTML += `<div class="product"><div class="product-inner"><div class="inner-upper"><div class="promobox"><div class="number"><img src="images/cart.svg"><span>sztuk: 1</span></div><div class="discount">oszczędasz: <span>${(data.list[i].price.gross.base_float) - (data.list[i].price.gross.promo_float)}zł</span></div></div></div><img class="inner-photo" src="https://outletmeblowy.pl/environment/cache/images/300_300_productGfx_${data.list[i].main_image}.jpg"></img><div class="inner-parameters"><span class="price">${data.list[i].price.gross.final}</span><del class="base-price">${data.list[i].price.gross.base}</del><p class="name">${data.list[i].name}</p><p class="brand">${data.list[i].producer.name}</p></div></div></div>`;
                }
            } else if ( viewData == 8) {
                mainStore.innerHTML = "";
                for (let i = 0; i < data.count; i++) {
                    mainStore.innerHTML += `<div class="product"><div class="product-inner"><div class="inner-upper"><div class="promobox"><div class="number"><img src="images/cart.svg"><span>sztuk: 1</span></div><div class="discount">oszczędasz: <span>${(data.list[i].price.gross.base_float) - (data.list[i].price.gross.promo_float)}zł</span></div></div></div><img class="inner-photo" src="https://outletmeblowy.pl/environment/cache/images/300_300_productGfx_${data.list[i].main_image}.jpg"></img><div class="inner-parameters"><span class="price">${data.list[i].price.gross.final}</span><del class="base-price">${data.list[i].price.gross.base}</del><p class="name">${data.list[i].name}</p><p class="brand">${data.list[i].producer.name}</p></div></div></div>`;
                }
                //jeśli plik JSON akurat zawiera tylko 5 produktów, ale musimy wyświetlić 8 (bez edycji w JSON)
                for (let i = 0; i < 3; i++) {
                    mainStore.innerHTML += `<div class="product"><div class="product-inner"><div class="inner-upper"><div class="promobox"><div class="number"><img src="images/cart.svg"><span>sztuk: 1</span></div><div class="discount">oszczędasz: <span>${(data.list[i].price.gross.base_float) - (data.list[i].price.gross.promo_float)}zł</span></div></div></div><img class="inner-photo" src="https://outletmeblowy.pl/environment/cache/images/300_300_productGfx_${data.list[i].main_image}.jpg"></img><div class="inner-parameters"><span class="price">${data.list[i].price.gross.final}</span><del class="base-price">${data.list[i].price.gross.base}</del><p class="name">${data.list[i].name}</p><p class="brand">${data.list[i].producer.name}</p></div></div></div>`;
                }
            }
        })
    }

  })
  .catch(err => {
    // Do something for an error here
  })
