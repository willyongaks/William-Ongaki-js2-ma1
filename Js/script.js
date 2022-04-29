// import catchError from "./Components/catcherror.js";
// import pricefilter from "./Components/filterprice.js";


const resultHtml = document.querySelector(".result");
const search = document.querySelector(".filter");



const url = "https://fakestoreapi.com/products";



async function fakeStoreApi() {
    try {
        const response = await fetch(url);
        const result = await response.json();

        console.log(result);

        resultHtml.innerHTML = "";

        for (let i = 0; i < result.length; i++) {

            resultHtml.innerHTML += `
                                    <div class="card">
                                    <div>
                                        <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="">
                                    </div>
                                    <div class="card-text">${result[i].title}</div>
                                    <div class="card-text">${result[i].price}</div>
                                    <div class="card-icon"><i class="fa fa-heart"></i></div>
                                    </div>`

        }
    }

    catch {

    }
}

fakeStoreApi();

search.onkeyup = function () {
    console.log(event);

    const searchvalue = event.target.value.trim();

    const filteredprice = filter()(function (result) {
        if (result[i].price.startsWith(searchvalue)) {
            return true;
        }
    })

    resultHtml = filteredprice;

    console.log(filteredprice);
}