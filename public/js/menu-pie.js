//pie-page-btn
//.product-btn
let buttons = document.getElementsByTagName('button');
let orderedProductIds = [];
let products = localStorage.getItem("productId");
orderedProductIds = JSON.parse(products);
let reviewOrderBtn = document.querySelector('.review-order-btn');

// hardcoded dummy values
let total = 100
let order_status = "In The Oven"

for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = addProducts;
}

function addProducts() {
    console.log(orderedProductIds);
    console.log(this.id);
    orderedProductIds.push(this.id);
    console.log(orderedProductIds);
}

async function buildOrder(event) {
    window.localStorage.clear();
    event.preventDefault();
    const response = await fetch('/api/orders', {
        method: 'POST',
        body: JSON.stringify({
            total,
            order_status,
            orderedProductIds,
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.ok) {
        document.location.replace('/review-order');
        window.localStorage.clear();
    } else {
        alert(response.statusText);
    }

};

reviewOrderBtn.addEventListener('click', buildOrder);
// if (reviewOrderBtn) {
//     reviewOrderBtn.addEventListener('click', buildOrder);
// }
