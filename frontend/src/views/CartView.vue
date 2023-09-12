<template>
    <div>
        <h2>Your Shopping Cart</h2>
        <ul v-if="product">
          <li v-for="item in cartItems" :key="item.id">
            {{ item.prodName }} - Price: ${{ item.price }} - Quantity:
            <input type="number" v-model="item.quantity" @input="updateQuantity(item)">
            <button @click="removeFromCart(item.id)">Remove</button>
          </li>
        </ul>
        <p>Total: ${{ cartTotal }}</p>
      </div>
</template>

<script>
    export default {
        computed: {
    cartItems() {
      return this.$store.state.cart.cartItems;
    },
    cartTotal() {
      return this.$store.getters['cart/cartTotal'];
    },
}, 
methods: {
        removeFromCart(product_id){
            this.$store.commit('cart/removeFromCart', product_id)
        }
    }  
    }
    
</script>

<style scoped>

</style>