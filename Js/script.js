const url = "https://fakestoreapi.com/products";

const resultHtml = document.querySelector(".result");

async function fakeStoreApi() {
    try {
        const response = await fetch(url);
        const result = await response.json();

        console.log(result);

        resultHtml.innerHTML = "";

        for (let i = 0; i < result.length; i++) {

            resultHtml.innerHTML += `
                                    <div>${result[i].title}</div>
                                    <div>${result[i].price}</div>`
        }


    }

    catch {

    }
}

fakeStoreApi();