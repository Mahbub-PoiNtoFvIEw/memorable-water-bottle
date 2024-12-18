import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../bottle/Bottle";
import './bottles.css'
import { addToLocalStorage, getStoredCart, removeFromLocalStorage } from "../../utilities/localstorage";
import Cart from "../Cart/Cart";

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);
    
    useEffect(() =>{
        fetch('bottle.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    },[])

    // load cart from localstorage
    useEffect(()=>{
        if(bottles.length){
            const storedCartId =  getStoredCart();
            // console.log(storedCartId)
            const savedCart = [];
            for(const id of storedCartId){
                const bottle = bottles.find( bottle => bottle.id === id);
                if(bottle){
                    savedCart.push(bottle)
                }
            }
            // console.log(savedCart);
            setCart(savedCart);
        }
    },[bottles])

    const handleAddToCart = bottle =>{
        const newCart = [...cart, bottle];
        setCart(newCart);
        addToLocalStorage(bottle.id);
    }

    const handleRemoveFromCart = id =>{
        const remainingCart = cart.filter(bottle => bottle.id !== id)
        setCart(remainingCart);
        removeFromLocalStorage(id);
    }

    return (
        <div>
            <h2>Bottles available : {bottles.length}</h2>
            <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
            <div className="bottle-container">
                {
                    bottles.map(bottle => <Bottle 
                        key={bottle.id} 
                        bottle={bottle}
                        handleAddToCart={handleAddToCart}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;