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
      state.products = data;
    },
    setUsers(state, data) {
      state.users = data;
    },
    // Rename the mutation to update products
    updateProducts(state, data) {
      state.products = data;
    },
    // Rename the mutation to update users
    updateUsers(state, data) {
      state.users = data;
    },
    setOrders(state, data) {
      state.orders = data;
    },
    setOrderItems(state, data) {
      state.orderItems = data;
    },
  },
  actions: {
    async fetchProducts({ commit }) {
      try {
        const response = await axios.get(`${apiUrl}products`);
        commit('setProducts', response.data.results);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },
    async fetchUsers({ commit }) {
      try {
        const response = await axios.get(`${apiUrl}users`);
        commit('setUsers', response.data.results);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    },
    // Add the editUsers action
    async editUsers({ commit }, userdata) {
      try {
        const response = await axios.put(`${apiUrl}user/${userdata.id}`, userdata);
        commit('updateUsers', response.data);
      } catch (error) {
        console.error('Error editing user:', error);
      }
    },
    // Add the editProducts action
    async editProducts({ commit }, productdata) {
      try {
        const response = await axios.put(`${apiUrl}product/${productdata.id}`, productdata);
        commit('updateProducts', response.data);
      } catch (error) {
        console.error('Error editing product:', error);
      }
    },
    async addUser({ commit }, userdata) {
      try {
        const response = await axios.post(`${apiUrl}user`, userdata);
        location.reload();
        commit('setUsers', response.data); // Update users after adding
      } catch (error) {
        console.error('Error adding user:', error);
      }
    },
    async addProduct({ commit }, productdata) {
      try {
        const response = await axios.post(`${apiUrl}product`, productdata);
        location.reload();
        commit('setProducts', response.data); // Update products after adding
      } catch (error) {
        console.error('Error adding product:', error);
      }
    },
    async deleteProduct({ commit }, product_id) {
      try {
        await axios.delete(`${apiUrl}product/${product_id}`);
        location.reload();
        // Optionally, you can commit a mutation here to remove the product from the state.
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    },
    async fetchOrders({ commit }) {
      try {
        const response = await axios.get(`${apiUrl}orders`);
        commit('setOrders', response.data.results);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    },
    async fetchOrderItems({ commit }) {
      try {
        const response = await axios.get(`${apiUrl}orderitems`);
        commit('setOrderItems', response.data);
      } catch (error) {
        console.error('Error fetching order items:', error);
      }
    },
  },
  modules: {
    
  },
})
