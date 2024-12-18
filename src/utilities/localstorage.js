const getStoredCart = () =>{
    const storedCartString = localStorage.getItem('cart');
    if(storedCartString){
        return JSON.parse(storedCartString);
    }
    return [];
}

const saveCartToLocalStorage = cart =>{
    const cartStringField = JSON.stringify(cart);
    localStorage.setItem('cart',cartStringField);
}

const addToLocalStorage = id =>{
    const cart = getStoredCart();
    cart.push(id);
    // save to localStorage
    saveCartToLocalStorage(cart);
}

const removeFromLocalStorage = id =>{
    const cart = getStoredCart();
    // removing every id
    const remaining = cart.filter(idx => idx !== id);
    saveCartToLocalStorage(remaining);
}

export {addToLocalStorage, getStoredCart, removeFromLocalStorage};