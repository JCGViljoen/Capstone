<template>
    <div class="user-profile">
      <h1>User Profile</h1>
      <div v-if="user">
        <div class="profile-info">
          <h2>{{ user.firstName }} {{ user.lastName }}</h2>
          <p>Email: {{ user.email }}</p>
        </div>
        <button @click="logout" class="logout-button">Logout</button>
      </div>
      <div v-else>
        <p>User is not logged in.</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      user() {
        return this.$store.state.user;
      },
    },
    methods: {
      logout() {
        this.$store.dispatch('Logout');
      },
    },
  };
  </script>
  
  <style scoped>
  .user-profile {
    max-width: 300px; 
    margin: 0 auto; 
    padding: 20px;
    background-color: #f0f0f0;
    border-radius: 10px;
  }
  
  .profile-info {
    margin-bottom: 20px;
  }
  
  .logout-button {
    background-color: #e74c3c;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
  }
  
  .logout-button:hover {
    background-color: #c0392b;
  }
  </style>
  