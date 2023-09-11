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
  },
  mutations: {
    setProducts(state, data) {
      state.products = data;
    },
    setProducts(state, data) {
      state.products = data
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

    // register
    async userAdd(context, content) {
      try {
        const { msg } = (await axios.post(`${apiUrl}user`, content)).data;
        if (msg) {
          sweet({
            title: "User Add",
            text: msg,
            icon: "success",
            timer: 5000,
          });
          context.dispatch("fetchUsers");
          router.push({ name: "login" });
        } else {
          sweet({
            title: "Error",
            text: msg,
            icon: "error",
            timer: 5000,
          });
        }
      } catch (e) {
        console.log(e);
      }
    },
    async LoginUser(context, payload) {
      try {
        const { msg, token, result } = (
          await axios.post(`${apiUrl}LoginUser`, payload)
        ).data;
        if (result) {
          context.commit(`setUsers`, { result, msg });
          cookies.set("LegitUser", { token, msg, result });
          AuthenticateUser.applyToken(token);
          sweet({
            title: msg,
            text: `Welcome back ${result?.firstName}
            ${result?.lastName}`,
            icon: "success",
            timer: 5000,
          });
          router.push({ name: "home" });
        } else {
          sweet({
            title: "Error",
            text: msg,
            icon: "error",
            timer: 5000,
          });
        }
      } catch (e) {
        console.log(e);
      }
    }
  },
  getters: {
    filteredProducts(state) {
      return state.searchResults;
    },
  },
  modules: {},
});

