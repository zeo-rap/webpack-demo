export const initialState = {
  basket: [],
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      // check if product in basket
      var index = state.basket.findIndex((x) => x.id === action.item.id);

      // if not in basket add in
      if (index < 0) {
        return {
          ...state,
          basket: [...state.basket, action.item],
        };
      } else {
        // if in basket increment quantity 1
        return {
          ...state,
          basket: state.basket.map((item) =>
            item.id === action.item.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
    case "REMOVE_FROM_BASKET":
      return {
        ...state,
        basket: state.basket.filter((x) => x.id !== action.id),
      };

    case "DECREMENT_IN_BASKET":
      var index = state.basket.findIndex((x) => x.id === action.id);
      if (state.basket[index].quantity > 1)
        return {
          ...state,
          basket: state.basket.map((item) =>
            item.id === action.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
        };
      else {
        return {
          ...state,
          basket: state.basket.filter((x) => x.id !== action.id),
        };
      }

    case "INCREMENT_IN_BASKET":
      return {
        ...state,
        basket: state.basket.map((item) =>
          item.id === action.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
