import 'whatwg-fetch';

const mainStore = document.querySelector('.store-main');
let arr = [];

fetch('other/example.json')
  .then(response => {
    return response.json()
  })
  .then(data => {

    for (let i = 0; i < 4; i++) {
        mainStore.innerHTML += `<div class="product"><div class="product-inner"><div class="inner-upper"><div class="promobox"><div class="number"><img src="images/cart.svg"><span>sztuk: 1</span></div><div class="discount">oszczędasz: <span>${(data.list[i].price.gross.base_float) - (data.list[i].price.gross.promo_float)}zł</span></div></div></div><img class="inner-photo" src="https://outletmeblowy.pl/environment/cache/images/300_300_productGfx_${data.list[i].main_image}.jpg"></img><div class="inner-parameters"><span class="price">${data.list[i].price.gross.final_float} zł</span><del class="base-price">${data.list[i].price.gross.base_float} zł</del><p class="name">${data.list[i].name}</p><p class="brand">${data.list[i].producer.name}</p></div></div></div>`;
    }

    const buttons = document.querySelectorAll('.button');
    for (const button of buttons) {
        button.addEventListener('click', function(e) {
            let activeButton = document.getElementsByClassName("button-active")
            if (activeButton.length > 0){	
                activeButton[0].className = "";
            }
            button.className = "button-active";
            let viewData = e.target.getAttribute('data-view');
            if (viewData == 2) {
                mainStore.innerHTML = "";
                for (let i = 0; i < 2; i++) {
                    mainStore.innerHTML += `<div class="product"><div class="product-inner"><div class="inner-upper"><div class="promobox"><div class="number"><img src="images/cart.svg"><span>sztuk: 1</span></div><div class="discount">oszczędasz: <span>${(data.list[i].price.gross.base_float) - (data.list[i].price.gross.promo_float)}zł</span></div></div></div><img class="inner-photo" src="https://outletmeblowy.pl/environment/cache/images/300_300_productGfx_${data.list[i].main_image}.jpg"></img><div class="inner-parameters"><span class="price">${data.list[i].price.gross.final_float} zł</span><del class="base-price">${data.list[i].price.gross.base_float} zł</del><p class="name">${data.list[i].name}</p><p class="brand">${data.list[i].producer.name}</p></div></div></div>`;
                }
            } else if ( viewData == 4) {
                mainStore.innerHTML = "";
                for (let i = 0; i < 4; i++) {
                    mainStore.innerHTML += `<div class="product"><div class="product-inner"><div class="inner-upper"><div class="promobox"><div class="number"><img src="images/cart.svg"><span>sztuk: 1</span></div><div class="discount">oszczędasz: <span>${(data.list[i].price.gross.base_float) - (data.list[i].price.gross.promo_float)}zł</span></div></div></div><img class="inner-photo" src="https://outletmeblowy.pl/environment/cache/images/300_300_productGfx_${data.list[i].main_image}.jpg"></img><div class="inner-parameters"><span class="price">${data.list[i].price.gross.final_float} zł</span><del class="base-price">${data.list[i].price.gross.base_float} zł</del><p class="name">${data.list[i].name}</p><p class="brand">${data.list[i].producer.name}</p></div></div></div>`;
                }
            } else if ( viewData == 8) {
                mainStore.innerHTML = "";
                for (let i = 0; i < data.count; i++) {
                    mainStore.innerHTML += `<div class="product"><div class="product-inner"><div class="inner-upper"><div class="promobox"><div class="number"><img src="images/cart.svg"><span>sztuk: 1</span></div><div class="discount">oszczędasz: <span>${(data.list[i].price.gross.base_float) - (data.list[i].price.gross.promo_float)}zł</span></div></div></div><img class="inner-photo" src="https://outletmeblowy.pl/environment/cache/images/300_300_productGfx_${data.list[i].main_image}.jpg"></img><div class="inner-parameters"><span class="price">${data.list[i].price.gross.final_float} zł</span><del class="base-price">${data.list[i].price.gross.base_float} zł</del><p class="name">${data.list[i].name}</p><p class="brand">${data.list[i].producer.name}</p></div></div></div>`;
                }
                //jeśli plik JSON akurat zawiera tylko 5 produktów, ale musimy wyświetlić 8 (bez edycji w JSON)
                for (let i = 0; i < 3; i++) {
                    mainStore.innerHTML += `<div class="product"><div class="product-inner"><div class="inner-upper"><div class="promobox"><div class="number"><img src="images/cart.svg"><span>sztuk: 1</span></div><div class="discount">oszczędasz: <span>${(data.list[i].price.gross.base_float) - (data.list[i].price.gross.promo_float)}zł</span></div></div></div><img class="inner-photo" src="https://outletmeblowy.pl/environment/cache/images/300_300_productGfx_${data.list[i].main_image}.jpg"></img><div class="inner-parameters"><span class="price">${data.list[i].price.gross.final_float} zł</span><del class="base-price">${data.list[i].price.gross.base_float} zł</del><p class="name">${data.list[i].name}</p><p class="brand">${data.list[i].producer.name}</p></div></div></div>`;
                }
            }
        })
    }

  })
  .catch(err => {
      //do nothing
  })
