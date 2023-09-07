import { createStore } from 'vuex'
import axios from 'axios'

const apiUrl = 'https://capstone-tuy1.onrender.com/' 

export default createStore({
  state: {
    products: null, 
    users: null,  
    orders: null,
    token: null,
    msg: null,
    postData: null,  
    orderItems: null,
  },
  mutations: {
    setProducts(state, data) {
      state.products = data
    },
    setUsers(state, users) {
      state.users = users
    },
    setOrders(state, data) {
      state.orders = data
    },
    setOrderItems(state, data) {
      state.orderItems = data
    },
  },
  actions: {
    async fetchProducts({ commit }) { 
      try {
        const response = await axios.get(`${apiUrl}products`)
        commit('setProducts', response.data.results)
      } 
      catch (error) {
        console.error('Error fetching products:', error)
      }
    },
    async fetchUsers({ commit }) { 
      try {
        const response = await axios.get(`${apiUrl}/users`)
        commit('setUsers', response.data)
      } catch (error) {
        console.error('Error fetching users:', error)
      }
    },
    async fetchOrders({ commit }) { 
      try {
        const response = await axios.get(`${apiUrl}/orders`)
        commit('setOrders', response.data)
      } catch (error) {
        console.error('Error fetching orders:', error)
      }
    },
    async fetchOrderItems({ commit }) { 
      try {
        const response = await axios.get(`${apiUrl}/orderitems`)
        commit('setOrderItems', response.data)
      } catch (error) {
        console.error('Error fetching order items:', error)
      }
    },
  },
  modules: {

  }
})
