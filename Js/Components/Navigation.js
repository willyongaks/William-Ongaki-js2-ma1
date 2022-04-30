export function navigaation(){
    const navigationMenu = document.querySelector(".navigation");

navigationMenu.innerHTML = `<div class=menu>

                            <a href="/index.html" class="active">Home</a>
                            |
                            <a href="/wishlist.html">Whishlist</a>
                            </div>`
};

navigaation();
