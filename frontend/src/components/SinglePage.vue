<template>
    <div class="card" style="width: 18rem;">
      <img :src="$route.query.img" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{ $route.query.name }}</h5>
        <p class="card-text">
          <span>{{ $route.query.description }}</span>
        </p>
        <p class="card-text">
          <span> R{{ $route.query.price }}</span>
        </p>
        <div class="card-footer text-body-secondary">
          <router-link to="/products" class="btn">⬅️Back</router-link>
          <br /><br />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
  };
  </script>
  
  <style scoped>
  .btn {
    background-color: black;
    color: white;
  }
  </style>
  