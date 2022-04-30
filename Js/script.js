import { filtrerdPrice } from "./Components/filterprice.js";
import { navigaation } from "./Components/Navigation.js";
import { wishList } from "./Components/wishlist.js";
import { getExistingWishlist } from "./utilities/wishListFunction.js";


const url = "https://fakestoreapi.com/products";
const resultHtml = document.querySelector(".products-item");



export async function fakeStoreApi() {
    try {
        const response = await fetch(url);
        let product = await response.json();

        console.log(product)

        resultHtml.innerHTML = "";

        for (let i = 0; i < product.length; i++) {

            resultHtml.innerHTML += `
                                    <div class="card">
                                    <div>
                                        <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="">
                                    </div>
                                    <div class="card-text">${product[i].title}</div>
                                    <div class="card-text">${product[i].price}</div>
                                    <div class="card-icon"><i class="fa fa-heart" data-id="${product[i].id}" data-title="${product[i].title}"></i></div>
                                    </div>`;
        }
    }
    catch {

    }


    /*favs /whishlist */

    const favBtns = document.querySelectorAll(".card-icon i");

    favBtns.forEach((button) => {
        button.addEventListener("click", handleclick);
    })

    function handleclick() {
        console.log(event)
        this.classList.toggle("fa");
        this.classList.toggle("far");

        const id = this.dataset.id;
        const title = this.dataset.title;


        const currentList = getExistingWishlist();
        // console.log(currentList);

        const productExist = currentList.find(function (fav) {
            return fav.id === id;
        });

        if (productExist === undefined) {
            const product = { id: id, title: title };
            currentList.push(product);
            saveList(currentList)
        }
        else{
            const newList = currentList.filter(fav => fav.id !== id);
            saveList(newList);
        }




    };


  


    function saveList(wishList) {
        localStorage.setItem("favourites", JSON.stringify(wishList))
    }

};

fakeStoreApi();