<template>
  <div class="row">
    <div class="col-md-12">
      <h1>Sign Up</h1>
      <form @submit.prevent="register">
        <fieldset>
          <legend>Your Basic Info</legend>

          <label for="profile_image_url">Profile Picture:</label>
          <input
            type="text"
            id="profile_image_url"
            name="profile_image_url"
            accept="image/*"
            v-model="content.profile_image_url"
          />

          <label for="user_name">Name:</label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            v-model="content.firstName"
            required
            placeholder="John"
          />

          <label for="surname">Surname:</label>
          <input
            type="text"
            id="surname"
            name="lastname"
            v-model="content.lastName"
            required
            placeholder="Doe"
          />

          <label for="user_email">Email:</label>
          <input
            type="email"
            id="user_email"
            name="user_email"
            v-model="content.email"
            required
            placeholder="johndoe@email.com"
          />

          <label for="cellNum">Cell Number:</label>
          <input
            type="tel"
            id="cellNum"
            name="cellNum"
            v-model="content.cellNum"
            required
            placeholder="0123456789"
          />

          <label for="userPass">Password:</label>
          <input
            type="password"
            id="userPass"
            name="userPass"
            v-model="content.userPass"
            required
            placeholder="freewilly123"
          />

          <label for="confirmPass">Confirm Password:</label>
          <input
            type="password"
            id="confirmPass"
            name="confirmPass"
            v-model="content.confirmPass"
            required
            placeholder="freewilly123"
          />
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
            this.$store.dispatch('register', this.content)
        }
  },
};
</script>


<style scoped>
*, *:before, *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Nunito', sans-serif;
    color: #384047;
  }
  
  form {
    max-width: 300px;
    margin: 10px auto;
    padding: 10px 20px;
    background: #f4f7f8;
    border-radius: 8px;
  }
  
  h1 {
    margin: 0 0 30px 0;
    text-align: center;
  }
  
  input[type="text"],
  input[type="password"],
  input[type="date"],
  input[type="datetime"],
  input[type="email"],
  input[type="number"],
  input[type="search"],
  input[type="tel"],
  input[type="time"],
  input[type="url"],
  textarea,
  select {
    background: rgba(255,255,255,0.1);
    border: none;
    font-size: 16px;
    height: auto;
    margin: 0;
    outline: 0;
    padding: 15px;
    width: 100%;
    background-color: #e8eeef;
    color: #8a97a0;
    box-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;
    margin-bottom: 30px;
  }
  
  
  
  button {
    padding: 19px 39px 18px 39px;
    color: #FFF;
    background-color: #4bc970;
    font-size: 18px;
    text-align: center;
    font-style: normal;
    border-radius: 5px;
    width: 100%;
    border: 1px solid #3ac162;
    border-width: 1px 1px 3px;
    box-shadow: 0 -1px 0 rgba(255,255,255,0.1) inset;
    margin-bottom: 10px;
  }
  
  fieldset {
    margin-bottom: 30px;
    border: none;
  }
  
  legend {
    font-size: 1.4em;
    margin-bottom: 10px;
  }
  
  label {
    display: block;
    margin-bottom: 8px;
  }
  
  label.light {
    font-weight: 300;
    display: inline;
  }
  
  
  
  @media screen and (min-width: 480px) {
  
    form {
      max-width: 480px;
    }
  
  }
  

</style>