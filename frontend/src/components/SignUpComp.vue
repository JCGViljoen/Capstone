<template>
    <div class="row">
      <div class="col-md-12">
        <h1>Sign Up</h1>
        <form @submit.prevent="register">
          <fieldset>
            <legend>Your Basic Info</legend>
  
            <div class="form-group">
              <label for="profile_image_url">Profile Picture:</label>
              <input
                type="text"
                id="profile_image_url"
                name="profile_image_url"
                accept="image/*"
                v-model="content.profile_image_url"
              />
            </div>
  
            <div class="form-group">
              <label for="user_name">Name:</label>
              <input
                type="text"
                id="user_name"
                name="user_name"
                v-model="content.firstName"
                required
                placeholder="John"
              />
            </div>
  
            <div class="form-group">
              <label for="surname">Surname:</label>
              <input
                type="text"
                id="surname"
                name="lastname"
                v-model="content.lastName"
                required
                placeholder="Doe"
              />
            </div>
  
            <div class="form-group">
              <label for="user_email">Email:</label>
              <input
                type="email"
                id="user_email"
                name="user_email"
                v-model="content.email"
                required
                placeholder="johndoe@email.com"
              />
            </div>
  
            <div class="form-group">
              <label for="cellNum">Cell Number:</label>
              <input
                type="tel"
                id="cellNum"
                name="cellNum"
                v-model="content.cellNum"
                required
                placeholder="0123456789"
              />
            </div>
  
            <div class="form-group">
              <label for="userPass">Password:</label>
              <input
                type="password"
                id="userPass"
                name="userPass"
                v-model="content.userPass"
                required
                placeholder="freewilly123"
              />
            </div>
  
            <div class="form-group">
              <label for="confirmPass">Confirm Password:</label>
              <input
                type="password"
                id="confirmPass"
                name="confirmPass"
                v-model="content.confirmPass"
                required
                placeholder="freewilly123"
              />
            </div>
          </fieldset>
  
          <button type="submit">Sign Up</button>
        </form>
        <p>Already have an account? <router-link to="/login">Sign in</router-link></p>
      </div>
    </div>
  </template>
  
  <script>
  import { mapActions } from 'vuex';
  
  export default {
    data() {
      return {
        content: {
          firstName: '',
          lastName: '',
          email: '',
          userPass: '',
          profile_image_url: '',
          cellNum: '',
          userRole: '',
        },
      };
    },
    methods: {
      register() {
        // Call your registration logic here
        // Example: this.$store.dispatch('register', this.content)
      }
    },
  };
  </script>
  
  <style scoped>
  .row {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #f0f0f0;
  }
  
  .col-md-12 {
    max-width: 400px;
    width: 100%;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  }
  
  h1 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  form {
    padding: 20px;
    box-shadow: #000 5px 5px 3px;
  }
  
  legend {
    font-size: 1.4em;
    margin-bottom: 10px;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    font-weight: bold;
  }
  
  input[type="text"],
  input[type="password"],
  input[type="email"],
  input[type="tel"] {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    background-color: black;
    color: #fff;
    border: none;
    padding: 15px;
    font-size: 18px;
    width: 100%;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
  }
  
  button:hover {
    background-color: red;
    box-shadow: #000 3px 6px 5px 10px;
  }
  
  p {
    text-align: center;
    margin-top: 10px;
  }
  
  a {
    color: #4bc970;
    text-decoration: none;
  }
  </style>