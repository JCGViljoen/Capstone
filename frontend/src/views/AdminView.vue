<template>
  <div class="admin">
    <h1 class="admin-heading">Admin</h1>
    
    <h2 class="section-heading">Products</h2>
    <button @click="addProduct" class="btn btn-dark"><AddProduct/></button>
    <div class="table-responsive" >
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Stock Quantity</th>
            <th>Image</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.product_id">
            <td>{{ product.product_id }}</td>
            <td>{{ product.prodName }}</td>
            <td>{{ product.prodDesc }}</td>
            <td>{{ product.price }}</td>
            <td>{{ product.stock_quantity }}</td>
            <td><img :src="product.product_image_url" :alt="product.prodName" style="max-width: 100px;"></td>
            <td></td>
            <td><button @click="deleteProduct(product.product_id)" class="btn btn-dark">Delete</button></td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 class="section-heading">Users</h2>
    <AddUser @click="addUser" class="btn btn-dark"/>
    <div class="table-responsive" v-if="users">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Profile Image</th>
            <th>Cell Number</th>
            <th>User Role</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.user_id">
            <td>{{ user.user_id }}</td>
            <td>{{ user.firstName }}</td>
            <td>{{ user.lastName }}</td>
            <td>{{ user.email }}</td>
            <td><img :src="user.profile_image_url" :alt="user.firstName" style="max-width: 100px;"></td>
            <td>0{{ user.cellNum }}</td>
            <td>{{ user.userRole }}</td>
            <td><router-link
              :to="{ name: 'edituser', params: { id: user.user_id } }"
              class="del btn btn-info"
              >Edit</router-link
            ></td>
            <td><button @click="deleteUser(user.user_id)" class="btn btn-dark">Delete</button></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>
      <Spinner/>
    </div>
  </div>
</template>

<script>
import AddProduct from '@/components/AddProduct.vue'
import AddUser from '@/components/AddUser.vue'
import Spinner from '@/components/SpinnerCom.vue'
export default {
  components: {
    AddProduct,
    AddUser,
    Spinner,
  },
  methods: {
    
    async addProduct(product_id){
      this.$store.dispatch("addProduct", product_id)

    },
    async deleteProduct(product_id) {
      this.$store.dispatch("deleteProduct", product_id);
    },
    async addUser(user_id) {
      this.$store.dispatch("addUser", user_id)
    },
    async deleteUser(user_id) {
      this.$store.dispatch("deleteUser", user_id);
    },
    
  
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
    products() {
      return this.$store.state.products;
    },
  },
  mounted() {
    this.$store.dispatch("fetchProducts");
    this.$store.dispatch("fetchUsers");
  },
};
    
</script>

<style scoped>
.admin-heading {
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
}

.section-heading {
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 10px;
}

.btn {
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 4px;
}

.btn-dark {
  background-color: #343a40;
}

table {
  width: 100%;
  border-collapse: collapse;
}

table, th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

thead {
  background-color: #f2f2f2;
}

th {
  background-color: #343a40;
  color: #fff;
}

@media (max-width: 768px) {
  .btn {
    font-size: 14px;
  }
  
  table {
    font-size: 14px;
  }
  
  th, td {
    padding: 6px;
  }
  
  .section-heading {
    font-size: 18px;
  }
}
</style>
