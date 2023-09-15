<template>
  <div class="collapse" id="navbarToggleExternalContent" data-bs-theme="dark">
    <div class="bg-dark p-4">
      <h5 class="text-body-emphasis h4">DIGI-STOP</h5>
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link" id="home-nav" aria-current="page">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link">About</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/products" class="nav-link">Products</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/admin" class="nav-link">Admin</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="'/user/' + userId" class="nav-link">Profile</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/signup" class="nav-link">Sign Up</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link">Login</router-link>
        </li>
      </ul>
      <router-link to="/cart" class="nav-link">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
      </router-link>
      <router-link to="/checkout" class="nav-link">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-dash-fill" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM6 9.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H6z"/>
        </svg>
      </router-link>
    </div>
  </div>
  <nav class="navbar navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand logo-animation">
        DIGI-STOP
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      userId: 1 
    };
  }
}
</script>

<style scoped>
nav {
  padding-top: 0;
}

.container-fluid {
  background-color: #000;
  position: sticky;
  height: 10vh;
}
.logo-animation {
  color: red;
  transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
}

.logo-animation:hover {
  transform: scale(1.2);
  color: #fff;
}

.navbar-nav {
  text-align: center;
}

.nav-link {
  color: white;
  position: relative;
  text-decoration: none;
  transition: color 0.3s ease-in-out;
}

.nav-link:hover {
  color: red;
  text-decoration: underline;
}

.logo-animation {
  color: red;
  transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
}

.logo-animation:hover {
  transform: scale(1.2);
  color: #fff;
}

.navbar-toggler-icon {
  background-color: red;
}

@media screen and (max-width: 300px) {
  .navbar-nav {
    flex-direction: column;
  }

  .navbar-toggler {
    margin-top: 10px;
  }

  .navbar-collapse {
    text-align: center;
  }
}

@media screen and (max-width: 991px) {
  .nav-link {
    color: red;
    text-decoration: underline seashell;
  }
}
</style>
