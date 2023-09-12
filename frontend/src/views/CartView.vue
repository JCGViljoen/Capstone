<template>
  <div class="shopping-cart">
    <h2>Your Shopping Cart</h2>
    <ul v-if="cartItems.length" class="cart-items">
      <li v-for="item in cartItems" :key="item.id" class="cart-item">
        {{ item.prodName }} - Price: ${{ item.price }} - Quantity:
        <input
          type="number"
          v-model="item.quantity"
          @input="updateQuantity(item)"
          class="quantity-input"
        />
        <button @click="removeFromCart(item.id)" class="remove-button">Remove</button>
      </li>
    </ul>
    <p v-else class="empty-cart-message">No items in the cart.</p>
    <p class="cart-total">Total: R{{ cartTotal }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    cartItems() {
      return this.$store.state.cartItems;
    },
    cartTotal() {
      return this.$store.getters['cartTotal'];
    },
  },
  methods: {
    removeFromCart(product_id) {
      this.$store.dispatch('removeFromCart', product_id);
    },
    updateQuantity(item) {
      this.$store.dispatch('updateQuantity', { product_id: item.id, quantity: item.quantity });
    },
  },
};
</script>

<style scoped>
.shopping-cart {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.cart-items {
  list-style: none;
  padding: 0;
}

.cart-item {
  margin-bottom: 10px;
}

.quantity-input {
  width: 50px;
}

.remove-button {
  background-color: #ff5733;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}

.remove-button:hover {
  background-color: #e5482e;
}

.empty-cart-message {
  font-style: italic;
}

.cart-total {
  font-weight: bold;
  font-size: 1.2rem;
}
</style>
