import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useContextValue, getBasketSubtotal } from "./StateProvider";
import { useHistory } from "react-router-dom";

function Subtotal() {
  const [{ basket }, setContext] = useContextValue();
  const history = useHistory();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketSubtotal(basket)}
        displayType={"text"}
        prefix="$"
      />
      <button onClick={(e) => history.push("/payment")}>
        Proceed to checkout
      </button>
    </div>
  );
}

export default Subtotal;
