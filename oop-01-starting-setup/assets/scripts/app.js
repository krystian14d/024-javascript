class Product {
    title = 'DEFAULT';
    imageUrl;
    description;
    price;
}

const productList = {
    products: [
        new Product (),
        {
            title: 'A pillow',
            imageUrl: 'https://assets.hermes.com/is/image/hermesproduct/enigmatic-pillow--103436M%2001-worn-1-0-0-1000-1000_g.jpg',
            price: 19.99,
            description: 'A soft pillow!'
        },
        {
            title: 'A carpet',
            imageUrl: 'https://m.media-amazon.com/images/I/81Jsyk9LKML._AC_UF894,1000_QL80_.jpg',
            price: 89.99,
            description: 'A carpet which you might like - or not.'
        }
    ],
    render(){
        const renderHook = document.getElementById('id');
        const prodList = document.createElement('ul');
        prodList.className = 'product-list';
        for(const prod of this.products){
            const prodEl = document.createElement('li');
            prodEl.className = 'product-item';
            prodEl.innerHTML = `
            <div>
                <img src="${prod.imageUrl}" alt="${prod.title}">
                <div class="product-item__content"
                    <h2>${prod.title}</h2>
                    <h3>\$${prod.price}</h3>
                    <p>${prod.description}</p>
                    <button>Add to Cart</button>
                </div>
            </div>
            `;
            prodList.append(prodEl);
        }
        renderHook.append(prodList);
    }
};

productList.render();