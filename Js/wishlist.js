import { getExistingWishlist } from "./utilities/wishListFunction.js";
import { navigaation } from "./Components/Navigation.js";


const wishList = getExistingWishlist();
const resultHtml = document.querySelector(".products-item");

resultHtml.innerHTML = "";

wishList.forEach((product) => {
    resultHtml.innerHTML += `
                            <div class="card">
                             <div>
                                <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="">
                            </div>
                            <div class="card-text">${product.title}</div>
                            <div class="card-text">${product.price}</div>
                            <div class="card-icon"><i class="fa fa-heart"></i></div>
                            </div>`;
});




