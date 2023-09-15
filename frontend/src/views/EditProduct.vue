<template>
    <div class="edit-product">
      <h2>Edit Product</h2>
      <form @submit.prevent="editProduct">
        <div class="form-group">
          <label for="productName">Product Name</label>
          <input type="text" id="productName" v-model="editedProduct.prodName" required>
        </div>
        <div class="form-group">
          <label for="productDescription">Product Description</label>
          <textarea id="productDescription" v-model="editedProduct.prodDesc" required></textarea>
        </div>
        <div class="form-group">
          <label for="productPrice">Price</label>
          <input type="number" id="productPrice" v-model="editedProduct.price" required>
        </div>
        <div class="form-group">
          <label for="stockQuantity">Stock Quantity</label>
          <input type="number" id="stockQuantity" v-model="editedProduct.stock_quantity" required>
        </div>
        <div class="form-group">
          <label for="productImage">Product Image URL</label>
          <input type="text" id="productImage" v-model="editedProduct.product_image_url">
        </div>
        <button type="submit" class="btn btn-primary">Save Changes</button>
      </form>
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  
  export default {
    data() {
      return {
        editedProduct: {
          id: null,
          prodName: '',
          prodDesc: '',
          price: 0,
          stock_quantity: 0,
          product_image_url: '',
        },
      };
    },
    computed: {
      ...mapState(['products']),
    },
    methods: {
      editProduct() {
        this.$store.dispatch('editProducts', this.editedProduct)
          .then(() => {
            this.$router.push({ name: 'admin' });
          })
          .catch((error) => {
            console.error('Error editing product:', error);
          });
      },
    },
    created() {
      const productId = this.$route.params.id;
      const product = this.products.find(p => p.id === productId);
      
      if (product) {
        this.editedProduct = { ...product }; 
      } else {
        console.error(`Product with ID ${productId} not found.`);
      }
    },
  };
  </script>
  
  <style scoped>
.edit-product {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.edit-product h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

input[type="text"],
input[type="number"],
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

button.btn-primary {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 3px;
  cursor: pointer;
}

button.btn-primary:hover {
  background-color: #0056b3;
}

</style>
  