export function filtrerdPrice() {

    const search = document.querySelector(".filter");

    search.addEventListener("keyup", () => {
        console.log(event)

        const searchedPrice = event.target.value.trim();
        const productFiltered = result.filter(function (product) {
            if (product.title.toLowerCase().startsWith(searchedPrice)) {
                return true;
            }

        });

        // console.log(productFiltered);
        result = productFiltered;
    })

};
filtrerdPrice();


