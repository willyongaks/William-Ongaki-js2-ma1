import { fakeStoreApi } from "../script.js";

export async function filtrerdPrice() {

    const search = document.querySelector(".filter");

    search.addEventListener("keyup", () => {
        console.log(event)

        const searchedPrice = event.target.value.trim();
        const productFiltered = result.filter(function (product) {
            if (product.price > searchedPrice) {
                return true;
            }

        });

        // console.log(productFiltered);
        result = productFiltered;
    })

};
filtrerdPrice();


