

function addToFavorites(newFavId) {
    var storedFavorites = JSON.parse(localStorage.getItem("favorites"));

    if (storedFavorites !== null) {
        if (!favoritesContains(newFavId)) {
            storedFavorites.push(newFavId);
        }
    }
    else {
        storedFavorites = [newFavId];
    }

    localStorage.setItem("favorites", JSON.stringify(storedFavorites));
    updateFavButton();
}

function removeFromFavorites(favId) {
    var storedFavorites = JSON.parse(localStorage.getItem("favorites"));

    var length = storedFavorites.length;

    if (length < 0) {
        length = 0;
    }

    for (var i = 0; i < length; i++) {
        if (storedFavorites[i] === favId) {
            storedFavorites.splice(i,1);
        }
    }

    localStorage.setItem("favorites", JSON.stringify(storedFavorites));
    updateFavButton();
}

function getFavorites() {
    return storedFavorites;
}

function favoritesContains(id) {
    var storedFavorites = JSON.parse(localStorage.getItem("favorites"));
    var containsFav = false;

    if (storedFavorites != null) {
        var length = storedFavorites.length;
    }
    else {
        var length = 0;
    }

    if (length < 0) {
        length = 0;
    }

    for (var i = 0; i < length; i++) {
        if (storedFavorites[i] === id) {
            containsFav = true;
        }
    }
    return containsFav;
}

function drawFavoritesList(destId) {
    var storedFavorites = JSON.parse(localStorage.getItem("favorites"));
}