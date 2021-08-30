import { createStore } from "vuex";

function updateLocalStorage(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export default createStore({
  state: {
    cart: [],
  },
  getters: {
    productQuantity: (state) => (product) => {
      const items = state.cart.find((i) => i.id === product.id);

      if (items) return product.quantity;
      else return null;
    },
    cartProducts: (state) => {
      return state.cart;
    },
    totalPrice(state) {
      return state.cart.reduce((a, b) => a + b.price * b.quantity, 0);
    },
  },
  mutations: {
    addToCart(state, product) {
      const items = state.cart.find((i) => i.id === product.id);

      if (items) {
        items.quantity++;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }

      updateLocalStorage(state.cart);
    },
    removeFromCart(state, product) {
      const items = state.cart.find((i) => i.id === product.id);

      if (items) {
        items.quantity--;
      } else {
        state.cart.filter((i) => i.id !== product.id);
      }

      updateLocalStorage(state.cart);
    },

    updateCartStorage(state) {
      const cart = localStorage.getItem("cart");
      if (cart) {
        state.cart = JSON.parse(cart);
      }
    },
  },
  actions: {},
  modules: {},
});
