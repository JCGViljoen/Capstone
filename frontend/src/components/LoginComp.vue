<template>
  <div class="login">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div class="user-box">
        <input type="email" v-model="payload.email" required>
        <label>Email</label>
      </div>
      <div class="user-box">
        <input type="password" v-model="payload.userPass" required>
        <label>Password</label>
      </div>
      <button type="submit">Login</button>
    </form>
    <p class="message">Not registered? <router-link to="/register">Create an account</router-link></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      payload: {
        email: "",
        userPass: ""
      }
    };
  },
  methods: {
   login() {
     this.$store.dispatch("LoginUser", this.payload);
  }
},
beforeCreate () {
this.$store.dispatch('fetchUsers')
}
};
</script>

<style scoped>
/* Your CSS styles for the login component */
</style>
