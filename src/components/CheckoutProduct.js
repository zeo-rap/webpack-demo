import React, { forwardRef } from "react";
import "./CheckoutProduct.css";
import { useContextValue } from "./StateProvider";

const CheckoutProduct = forwardRef(
  ({ id, image, title, price, rating, quantity }, ref) => {
    const [{ basket }, setContext] = useContextValue();
    const removeFromBasket = () => {
      setContext({
        type: "REMOVE_FROM_BASKET",
        id: id,
      });
    };
    const decrementProduct = () => {
      setContext({
        type: "DECREMENT_IN_BASKET",
        id: id,
      });
    };
    const incrementProduct = () => {
      setContext({
        type: "INCREMENT_IN_BASKET",
        id: id,
      });
    };
    return (
      <div ref={ref} className="checkoutProduct">
        <img className="checkoutProduct__image" src={image} alt="" />
        <div className="checkoutProduct__info">
          <p className="checkoutProduct__title">{title}</p>
          <p className="checkoutProduct__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="checkoutProduct__rating">
            {Array(rating)
              .fill()
              .map((item) => (
                <p>⭐</p>
              ))}
          </div>
          <button onClick={removeFromBasket}>Remove from Basket</button>
          <button onClick={decrementProduct}>-</button>
          <span>{quantity}</span>
          <button onClick={incrementProduct}>+</button>
        </div>
      </div>
    );
  }
);

export default CheckoutProduct;
