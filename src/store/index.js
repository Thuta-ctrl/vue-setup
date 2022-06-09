import { createStore } from 'vuex'
const state = {
  cartItems: [
    { id: 1, name: 'cat', count: 3 },
    { id: 2, name: 'dog', count: 4 },
    { id: 3, name: 'elephant', count: 5 }
  ]
}

const actions = {

}

const mutations = {
  updateCartName(state,payload) {
    state.cartItems[payload.index].name = payload.value
  }
}

const getters = {
  getCartItems: (state) => state.cartItems
}

const store = createStore({
  state,
  mutations,
  actions,
  getters
})

export default store