<template>
    <div>
      <h2>Checkout</h2>
      <form @submit.prevent="submitOrder">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="customerName" required />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="customerEmail" required />
        </div>
        <div class="form-group">
          <label for="address">Shipping Address:</label>
          <textarea id="address" v-model="shippingAddress" required></textarea>
        </div>
        <div class="form-group">
          <label for="creditCard">Credit Card Number:</label>
          <input type="text" id="creditCard" v-model="creditCardNumber" required />
        </div>
        <div class="form-group">
          <label for="expiry">Expiration Date:</label>
          <input type="text" id="expiry" v-model="expiryDate" placeholder="MM/YY" required />
        </div>
        <div class="form-group">
          <label for="cvv">CVV:</label>
          <input type="text" id="cvv" v-model="cvv" required />
        </div>
        <button type="submit" class="btn btn-primary">Place Order</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        customerName: '',
        customerEmail: '',
        shippingAddress: '',
        creditCardNumber: '',
        expiryDate: '',
        cvv: '',
      };
    },
    methods: {
      submitOrder() {
        // Here, you can send the order details to your server for processing
        const order = {
          customerName: this.customerName,
          customerEmail: this.customerEmail,
          shippingAddress: this.shippingAddress,
          creditCardNumber: this.creditCardNumber,
          expiryDate: this.expiryDate,
          cvv: this.cvv,
          // Add any other relevant order details
        };
  
        // Send the order to the server or perform payment processing here
  
        // Clear the form fields after successful submission
        this.customerName = '';
        this.customerEmail = '';
        this.shippingAddress = '';
        this.creditCardNumber = '';
        this.expiryDate = '';
        this.cvv = '';
  
        // Optionally, you can redirect the user to an order confirmation page
        // this.$router.push('/order-confirmation');
      },
    },
  };
  </script>
  
  <style scoped>
/* Checkout form container */
form {
  max-width: 400px;
  margin: 0 auto;
}

/* Form fields */
.form-group {
  margin-bottom: 20px;
}

label {
  font-weight: bold;
  display: block;
}

input[type="text"],
input[type="email"],
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

input[type="text"],
input[type="email"],
input[type="password"] {
  height: 40px;
}

textarea {
  resize: vertical;
  min-height: 80px;
}

/* Credit card fields */
.credit-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

/* Submit button */
button[type="submit"] {
  background-color: #007BFF;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
}

button[type="submit"]:hover {
  background-color: #0056b3;
}

/* Responsive styles */
@media (max-width: 600px) {
  form {
    max-width: 100%;
    padding: 10px;
  }
}
</style>

  