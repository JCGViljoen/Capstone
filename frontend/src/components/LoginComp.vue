<template>
  <div class="main">
    <div class="login-box">
      <h2>Login</h2>
      <form @submit.prevent="login">
        <div class="user-box">
          <input type="email" name="email" v-model="payload.email" required>
          <label>Email</label>
        </div>
        <div class="user-box">
          <input type="password" name="password" v-model="payload.userPass" required>
          <label>Password</label>
        </div>
        <button class="btn btn-primary" type="submit">
          Login
        </button>
        <p class="message">Not registered? <a href="#"><router-link to="/register">Create an account</router-link></a></p>
      </form>
    </div>
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
      this.$store.dispatch('LoginUser', this.payload)
    }
  },
  beforeCreate() {
    this.$store.dispatch('fetchUsers')
  }
};
</script>

<style scoped>
body, .main {
  background-color: #f2f2f2;
  font-family: 'Montserrat', sans-serif;
  color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
}

.login-box {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  max-width: 400px;
  width: 100%;
  text-align: center;
}

h2 {
  margin-bottom: 20px;
  font-size: 24px;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.user-box {
  position: relative;
  margin-bottom: 30px;
}

.user-box input {
  width: 100%;
  padding: 10px 0;
  border: none;
  border-bottom: 2px solid #333;
  outline: none;
  font-size: 16px;
}

.user-box label {
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  font-size: 16px;
  transition: 0.2s ease all;
}

.user-box input:focus ~ label,
.user-box input:valid ~ label {
  top: -20px;
  font-size: 14px;
  color: #333;
}

.button {
  background-color: #333;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
  transition: 0.2s ease background-color;
}

.button:hover {
  background-color: #555;
}

.message {
  font-size: 14px;
  margin-top: 20px;
}

a {
  color: #333;
  text-decoration: none;
}
</style>
