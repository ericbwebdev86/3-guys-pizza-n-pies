//pie-page-btn
//.product-btn
let buttons = document.getElementsByTagName('button');
let productArray = [];
let products = localStorage.getItem("productId");
productArray = JSON.parse(products);
let reviewOrderBtn = document.querySelector('review-page-btn');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = addProducts;
  }
  function addProducts() {
    console.log(productArray);
    console.log(this.id);
    productArray.push(this.id);
    console.log(productArray);
}
async function buildOrder(event) {
    window.localStorage.clear();
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
        document.location.replace('/review-order');
        window.localStorage.clear();
    } else {
        alert(response.statusText);
    }
    
};
if(reviewOrderBtn){
    reviewOrderBtn.addEventListener('click', buildOrder);
}
