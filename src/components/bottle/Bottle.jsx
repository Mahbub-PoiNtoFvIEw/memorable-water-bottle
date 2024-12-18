import './Bottle.css';

const Bottle = ({bottle, handleAddToCart}) => {
    const {name, price, img} = bottle;
    return (
        <div className="bottle">
            <h2>{name}</h2>
            <p>Price : ${price}</p>
            <img src={img} alt="" />
            <br />
            <button onClick={() => handleAddToCart(bottle)}>Purchase</button>
        </div>
    );
};

export default Bottle;