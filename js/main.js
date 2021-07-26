'use strict';
const products = [
    {id: 1, title: 'Notebook', price: 1000},
    {id: 2, title: 'Mouse', price: 100},
    {id: 3, title: 'Keyboard', price: 250},
    {id: 4, title: 'Gamepad', price: 150},
];

const renderProduct = (item, img='https://via.placeholder.com/200x150') => `<div class="product-item" data-id="${this.id}">
              <img src="${img}" alt="Some img">
              <div class="desc">
                  <h3 class=product-info>${item.title}</h3>
                  <p class=product-price>${item.price} \u20bd</p>
                  <button class="buy-btn">Купить</button>
              </div>
          </div>`;

const renderProducts = list => {
document.querySelector('.products').insertAdjacentHTML('beforeend', list.map(item => renderProduct(item)).join(''));
};

renderProducts(products);

