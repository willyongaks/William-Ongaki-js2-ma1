// import catchError from "./Components/catcherror.js";
const resultHtml = document.querySelector(".result");
const Search = document.querySelector(".filter").value;

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
                                    </div>`


        }


    }

    catch {

    }
}

fakeStoreApi();

Search.onkeyup = function() {
    console.log(Event);

    const searchvalue = Event.target(search).value.trim();

    const pricedfilter = results.filter(function (result) {
        if (result.price[i].startWith(searchvalue)) {
            return true;
        }
    });

    console.log(pricedfilter);

    result = pricedfilter;

    fakeStoreApi();
};