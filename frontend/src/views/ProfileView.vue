<template>
    <div>
      <div style="color: white;">
        <h1 class="text-center p-3 heading-text text-white">My Account</h1>
        <div class="card mx-auto my-3 p-5 user-card">
          <div class="m-3 text-center">
            <img :src="userData.profile_image_url" :alt="userData.firstName" class="img-fluid mb-5"
              style="max-width: 60%; border-radius: 50%;" />
            <h2 class="gold-text">
              {{ userData.firstName }} {{ userData.lastName }}
            </h2>
            <cite>{{ $store.state.user?.userRole }}</cite>
          </div>
          <div>
            <div class="card mb-5 p-3 info-card">
              <span><strong>User ID: </strong>{{ userData.user_id }}</span> <br> <br>
              <span><strong>Email: </strong>{{ userData.email }}</span> <br> <br>
            </div>
            <div class="d-flex justify-content-between">
              <update-user-comp class="btn edit-btn" />
              <button type="submit" class="btn del-btn" @click="deleteUser(userData.user_id)">Delete Account</button>
            </div>
            <div class="d-flex justify-content-between">
                <button @click="handleLogout">Logout</button>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import router from '@/router';
  import { mapActions } from 'vuex';
  
  export default {
    data() {
      return {
        userData: {}, 
      };
    },
    created() {
      const saveData = localStorage.getItem("user");
      if (saveData) {
        this.userData = JSON.parse(saveData); 
      }
  
      const data = JSON.parse(localStorage.getItem("user"));
      if (data) {
        this.$store.commit("setUser", data);
      }
    },
    methods: {
    ...mapActions(['logout']), 

    handleLogout() {
      this.logout(); 
    },
  },
    computed: {
      user() {
        return this.$store.state.user;
      },
    },
    methods: {
      deleteUser(user_id) {
        this.$store.dispatch('UserDeleted', user_id);
        this.$store.dispatch('LogOut');
        router.push({ name: 'home' });
      },
    },
  };
  </script>
  
  <style scoped>
  .img-fluid.mb-5 {
    width: 150px;
  }
  
  .user-card {
    height: 3%;
    width: 33rem;
  }
  
  .card {
    height: 5%;
  }
  </style>
  