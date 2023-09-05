<template>
    <div class="col">
      <div class="card">
        <img :src="product.imageUrl" class="card-img-top" :alt="product.name">
        <div class="card-body">
          <h5 class="card-title">{{ product.name }}</h5>
          <p class="card-text">{{ product.description }}</p>
          <p class="card-text"><strong>Price: ${{ product.price }}</strong></p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      product: Object, 
    },
  };
  </script>
  
  <style scoped>
  .card {
    border: 1px solid #e1e1e1;
    border-radius: 5px;
    transition: transform 0.2s; 
  }
  
  .card:hover {
    transform: scale(1.05); 
  }
  
  .card-title {
    font-size: 1.2rem; 
  }
  
  
  .card-img-top {
    max-width: 100%;
    height: auto;
  }
  </style>
  