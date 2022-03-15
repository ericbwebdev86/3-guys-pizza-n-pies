aTags = document.getElementsByTagName('button');
let productArray =[];

for (let i = 0; i < aTags.length; i++) {
    aTags[i].onclick = addProducts;
  }
function addProducts() {
    console.log(this.id);
    productArray.push(this.id);
    console.log(productArray)
}
function saveOrder() {
    let productObj = JSON.stringify(productArray);
    localStorage.setItem("productId", productObj);
};
document.querySelector('.pie-page-btn').addEventListener('click', saveOrder);

