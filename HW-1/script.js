"use strict";


const goods = [
    { id: '1', title: 'Shirt', price: 150 , imageUrl : 'https://picsum.photos/seed/6/200'},
    { id: '2',title: 'Socks', price: 50 , imageUrl : 'https://picsum.photos/seed/36/200'},
    { id: '3',title: 'Jacket', price: 350 , imageUrl : 'https://picsum.photos/seed/62/200'},
    { id: '4',title: 'Shoes', price: 250 , imageUrl : 'https://picsum.photos/seed/16/200'},
];


console.log(goods);

const renderGoodsItem = (item) =>
     `<div class="goods-item" data-id="${this.id}">
            <div class="desc" >
                <h3>${item.title}</h3>
                <img src="${item.imageUrl}" alt="">
                <p>Цена: ${item.price}</p>      
                <button class="buy-btn" type="button">Купить</button>
            </div>    
        </div>`;


const renderGoodsList = list => {
    document.querySelector('.goods-list')
        .insertAdjacentHTML('beforeend', list.map(item => renderGoodsItem(item))
            .join(''));
};

renderGoodsList(goods);

