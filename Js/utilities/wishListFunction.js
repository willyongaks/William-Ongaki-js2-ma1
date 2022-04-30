export function getExistingWishlist() {
    const wishList = localStorage.getItem("favourites");

    console.log(wishList);

    if (!wishList) {
        return [];
    } else {
        return JSON.parse(wishList);
    }

};