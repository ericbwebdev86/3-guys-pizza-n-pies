//pie-page-btn
//.product-btn
let productBtn = document.querySelectorAll('.product-btn');
let products = localStorage.getItem("productId");
let productArray = JSON.parse(products);

for(let i = 0; i < productBtn.length; i ++) {
    document.querySelector('.product-btn')[i].addEventListener('click', function addProducts() {
        productArray.push(productBtn[i].value());
    })
}
function buildOrder(event) {
    event.preventDefault();
    const response = await fetch('/api/orders', {
        method: 'POST',
        body: JSON.stringify({
            productArray
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if(response.ok) {
        document.location.replace('/cart-page');
    } else {
        alert(response.statusText);
    }
};
document.querySelector('review-page-btn').addEventListener('click', buildOrder);