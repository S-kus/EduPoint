import { createStore } from 'vuex'

export default createStore({
  state: {
    userId: null,
    products: [
      {
        id: 1,
        title: "The Unending Game",
        author: "Vikram Sood",
        price: 500,
        description: "Insights about India's greatest espionages...",
        image: "theUnendingGame.jpg"
      },
      {
        id: 2,
        title: "The Immortals of Meluha",
        author: "Amish Tripathi",
        price: 450,
        description: "A perfect odyssey of Lord Shiva and how he becamewhat we know him of.",
        image: "immortalsOfMeluha.jpg"
      },
      {
        id: 3,
        title: "The Oath Of The Vayuputras",
        author: "Amish Tripathi",
        price: 480,
        description: "Shiva learns more about the infamous foes Nagas and a life-changing secret of Vayuputras.",
        image: "oathOfVayuputras.jpg"
      },
      {
        id: 4,
        title: "2 States",
        author: "Chetan Bhagat",
        price: 450,
        description: "A story about a couple coming from two different states in India, who face hardships in convincing their parents to approve of their marriage.",
        image: "2states.jpg"
      },
      {
        id: 5,
        title: "The Monk who sold his ferrari",
        author: "Robin Sharma",
        price: 450,
        description: "A renowned inspirational fiction, The Monk Who Sold His Ferrari is a revealing story that offers the readers a simple yet profound way to live life.",
        image: "theMonkWhoSoldHisFerrari.jpg"
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
