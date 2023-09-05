<template>
  <div>
    <h2>Admin</h2>

    <!-- Products Table -->
    <h3>Products</h3>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.id }}</td>
          <td>{{ product.name }}</td>
          <td>{{ product.price }}</td>
        </tr>
      </tbody>
    </table>

    <!-- Users Table -->
    <h3>Users</h3>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      products: [],
      users: [],
    };
  },
  mounted() {
    this.fetchProducts();
    this.fetchUsers();
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await axios.get("your_api_url/products");
        this.products = response.data;
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
    async fetchUsers() {
      try {
        const response = await axios.get("your_api_url/users");
        this.users = response.data;
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    },
  },
};
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

table, th, td {
  border: 1px solid #ddd; 
}

th, td {
  padding: 8px; 
  text-align: left; 
}

thead {
  background-color: #f2f2f2; 
}


th {
  background-color: #333; 
  color: white; 
}</style>
