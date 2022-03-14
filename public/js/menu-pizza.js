//pie-page-btn
//.product-btn
let productBtn = document.querySelectorAll('.product-btn');
let productArray =[];

for(let i = 0; i < productBtn.length; i ++) {
    document.querySelector('.product-btn')[i].addEventListener('click', function addProducts() {
        productArray.push(productBtn[i].value());
    })
}
function saveOrder() {
    localStorage.setItem("productId", JSON.stringify(productArray));
};
document.querySelector('pie-page-btn').addEventListener('click', saveOrder);

