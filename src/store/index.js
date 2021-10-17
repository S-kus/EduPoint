import { createStore } from 'vuex'

export default createStore({
  state: {
    userId: null,
    products: [
      {
        id: 1,
        title: "The Unending Game",
        author: "Vikram Sood",
        description: "Insights about India's greatest espionages...",
        image: "../assets/products/theUnendingGame.png"
      },
      {
        id: 2,
        title: "Immortals of Meluha",
        author: "Amish Tripathi",
        description: "A perfect odyssey of Lord Shiva and how he becamewhat we know him of.",
        image: "../assets/products/immortalsOfMeluha.png"
      },
    ],
    cart: [],
  },
  mutations: {
    addToCart(state, product) {
      state.cart.push(product);
    },
    removeFromCart(state, currentCart) {
      state.cart = currentCart;
    }
  },
  actions: {
    addToCart(context, payload) {
      payload[userId] = context.state.userId;
      context.commit('addToCart', payload);
    },
    removeFromCart(context, payload) {
      const currentCart = context.state.cart;
      currentCart = currentCart.filter(item => {
        return (item.userId != payload.userId && item.productId != payload.productId)
      })
      context.commit('removeFromCart', currentCart);
    }
  },
  getters: {
    allProducts: (state) => {
      return state.products;
    },
    userCart: (state) => (id) => {
      return state.cart.filter(item => item.userId === id)
    }
  }
})
