<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <router-link class="navbar-brand logo-animation"  to="/">DIGI-STOP</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/" class="nav-link " id="home-nav" aria-current="page" >Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/products">Products</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/admin">Admin</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/signup">Sign Up</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/login">Login</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/checkout"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-dash-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM6 9.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H6z"/>
              </svg></router-link> 
            </li>
            
          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2"   aria-label="Search"  type="text"
      v-model="searchQuery"
      @input="updateSearchQuery"
      placeholder="Search for products">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  </template>
  <script>
  export default {
  computed: {
    searchQuery: {
      get() {
        return this.$store.state.searchQuery;
      },
      set(value) {
        this.$store.commit('setSearchQuery', value);
      },
    },
  },
  methods: {
    updateSearchQuery() {
      // The computed property handles updating the searchQuery in the Vuex store
    },
  },
};
</script>
  <style scoped>

  nav{
    padding-top: 0;
    position:sticky;
    
  }
  .container-fluid {
    background-color: #000;
  }
  
  .nav-link {
    color: white; 
  }

  .logo-animation {
    
    color: blue;  
    transition: transform 0.3s ease-in-out, color 0.3s ease-in-out; 
  }
  
  .logo-animation:hover {
    transform: scale(1.2); 
    color: red; 
  }
  
  </style>
  