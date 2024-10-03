import { createSlice } from "@reduxjs/toolkit";
import { notify } from "../notify";
import { Product } from "../../types/Product";

type Cart = {
  total: number;
  quantity: number;
};

type ItemProps = {
  id: number;
};

type stateProps = {
  cartItems: Product[] | [];
};

const user = JSON.parse(localStorage.getItem("furniro-user")!);

const getCartItems = () => {
  if (user) {
    return JSON.parse(localStorage.getItem(`furniro-cartItems-${user.email}`)!);
  } else {
    return JSON.parse(localStorage.getItem("furniro-cartItems")!);
  }
};

const initialState = {
  cartItems: getCartItems() ? getCartItems() : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const setLocalStorage = (state: stateProps) => {
  if (user) {
    localStorage.setItem(
      `furniro-cartItems-${user.email}`,
      JSON.stringify(state.cartItems)
    );
  } else {
    localStorage.setItem("furniro-cartItems", JSON.stringify(state.cartItems));
  }
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item: ItemProps) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        if (action.payload.newQuantity > 1) {
          state.cartItems[itemIndex].cartQuantity += action.payload.newQuantity;
          notify(
            "info",
            `[${action.payload.newQuantity}] ${action.payload.title} were added to your cart!`
          );
        } else {
          state.cartItems[itemIndex].cartQuantity += 1;
          notify("success", ` ${action.payload.title} was added to your cart!`);
        }
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
        notify("success", `${action.payload.title} was added to your cart!`);
        state.cartTotalQuantity = state.cartItems.length;
      }

      setLocalStorage(state);
    },
    removeFromCart(state, action) {
      const nextCartItems = state.cartItems.filter(
        (item: ItemProps) => item.id !== action.payload.id
      );

      state.cartItems = nextCartItems;
      notify("error", `${action.payload.title} was removed from your cart!`);

      setLocalStorage(state);
    },
    decreaseItem(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item: ItemProps) => item.id === action.payload.id
      );

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
        setLocalStorage(state);
      }
    },
    increaseItem(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item: ItemProps) => item.id === action.payload.id
      );

      if (state.cartItems[itemIndex].cartQuantity < 50) {
        state.cartItems[itemIndex].cartQuantity += 1;
        setLocalStorage(state);
      }
    },
    getTotals(state) {
      const { total, quantity } = state.cartItems.reduce(
        (cartTotal: Cart, cartItem: Product) => {
          const { normalPrice, cartQuantity } = cartItem;
          const itemTotal = normalPrice * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );

      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
    cleanCart(state) {
      state.cartItems = [];
      setLocalStorage(state);
      notify("info", "Your cart has been cleaned.");
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  decreaseItem,
  increaseItem,
  getTotals,
  cleanCart,
} = cartSlice.actions;

export default cartSlice.reducer;
