import { createStore } from 'vuex'
import axios from 'axios'
import sweet from 'sweetalert';
import router from '@/router';
import { useCookies } from 'vue3-cookies';
import AuthenticateUser from '@/service/AuthenticateUser';
const { cookies } = useCookies()


const apiUrl = 'https://capstone-tuy1.onrender.com/'

export default createStore({
  state: {
    products: null,
    product: null,
    users: null,
    orders: null,
    token: null,
    msg: null,
    postData: null,
    orderItems: null,
    searchQuery: '',
    cartItems: [],
  },
  mutations: {
    setProducts(state, data) {
      state.products = data;
    },
  
    setUsers(state, data) {
      state.users = data;
    },
    updateProducts(state, data) {
      state.products = data;
    },
    updateUsers(state, data) {
      state.users = data;
    },
    setOrders(state, data) {
      state.orders = data;
    },
    setOrderItems(state, data) {
      state.orderItems = data;
    },
    setSearchQuery(state, query) {
      state.searchQuery = query;
    },
    addToCart(state, product_id){
      state.cartItems.push(product_id);
    },
    
    removeFromCart(state,product_id) {
      statusbar.cartItems =- state.cartItems.filter(item => item.id !== product_id)
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
    async fetchProduct(context, product_id) {
      try {
        const {result} = (await axios.get(`${apiUrl}product/${product_id}`)).data;
        context.commit('setProduct', result);
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
    async editUser({ commit }, userdata) {
      try {
        const response = await axios.put(`${apiUrl}user/${userdata.user_id}`, userdata);
        commit('updateUsers', response.data);
      } catch (error) {
        console.error('Error editing user:', error);
      }
    },
    async editProducts({ commit }, productdata) {
      try {
        const response = await axios.put(`${apiUrl}product/${productdata.id}`, productdata);
        commit('updateProducts', response.data);
      } catch (error) {
        console.error('Error editing product:', error);
      }
    },
    async addUser({commit}, userdata) {
      const response = await axios.post(`${apiUrl}register`, userdata);
        location.reload();
        commit('setAddUser', response.data);
    },
    async addProduct({ commit }, productdata) {
      try {
        const response = await axios.post(`${apiUrl}product`, productdata);
        location.reload();
        commit('setProducts', response.data); 
      } catch (error) {
        console.error('Error adding product:', error);
      }
    },
    async deleteProduct({ commit }, product_id) {
      try {
        await axios.delete(`${apiUrl}product/${product_id}`);
        location.reload();
        commit('setProducts', response.data);
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    },
    async deleteUser({commit}, user_id){
      try {
        await axios.delete(`${apiUrl}user/${user_id}`);
        location.reload();
        commit('setUsers', response.data);
      } catch (error) {
        console.error('Error deleting user', error);
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
    
      ConfirmEditUser({ commit }, userData) {
        return new Promise((resolve, reject) => {
          
          setTimeout(() => {
            if (Math.random() < 0.5) {
              resolve(); 
            } else {
              reject(new Error("Edit user failed")); 
            }
          }, 1000);
        });
      
    }, 
    addToCart({ commit }, product) {
      commit('addToCart', product);
    },
    removeFromCart({ commit }, product_id) {
      commit('removeFromCart', product_id);
    },
    updateQuantity({ commit }, { product_id, quantity }) {
      commit('updateQuantity', { product_id, quantity });
    },
                                                                                                                                   
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         

    // register
    async userAdd(context, content) {
      try {
        const { msg } = (await axios.post(`${apiUrl}user`, content)).data;
        if (msg) {
          // Show a success SweetAlert
          sweet.fire({
            title: 'User Add',
            text: msg,
            icon: 'success',
            timer: 5000,
          });
          // Fetch users and navigate to the login page
          await context.dispatch('fetchUsers');
          router.push({ name: 'login' });
        } else {
          // Show an error SweetAlert if registration failed
          sweet.fire({
            title: 'Error',
            text: msg || 'An error occurred during user registration.',
            icon: 'error',
            timer: 5000,
          });
        }
      } catch (error) {
        console.error('Error during user registration:', error);
      }
    },
  
    async LoginUser(context, payload) {
      try {
        const { msg, token, result } = (
          await axios.post(`${apiUrl}LoginUser`, payload)
        ).data;
        if (result) {
          // Show a success SweetAlert for successful login
          sweet.fire({
            title: msg,
            text: `Welcome back ${result?.firstName} ${result?.lastName}`,
            icon: 'success',
            timer: 5000,
          });
          // Set cookies, apply token, and navigate to the home page
          cookies.set('LegitUser', { token, msg, result });
          AuthenticateUser.applyToken(token);
          router.push({ name: 'home' });
        } else {
          // Show an error SweetAlert if login failed
          sweet.fire({
            title: 'Error',
            text: msg || 'Login failed. Please check your credentials.',
            icon: 'error',
            timer: 5000,
          });
        }
      } catch (error) {
        console.error('Error during login:', error);
      }
    },
  },
  getters: {
    filteredProducts(state) {
      return state.searchResults;
    },
    cartTotal (state) {
      return state.cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
    }
  },
  modules: {},
});

