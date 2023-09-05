<template>
    <div>
        <section class="hero">
            <div class="heading">
                <h1>Tools</h1>
                <h6>Find your tools to your next Project!</h6>
            </div>
        </section>
        <div class="product">
            <Products/>
            
          </div>
    </div>
    
  </template>
  
  <script>
  import Products from '../components/ProductCard.vue'
  export default {
    Products
    
  };
  </script>
  
  <style scoped>

  body, html {
    margin: 0;
    padding: 0;
  }

  .hero {
    background-color: #000;
    margin-top: 0;
    padding-top: 0; 
  }
  .heading{
    color: #fff;    
  }
  
  .product {
    text-align: center;
    padding: 20px;
  }
  
  .img-fluid {
    max-width: 100%; 
    height: auto; 
  }
  @media (max-width: 300px) {
    .product {
      min-width: 300px;
    }
  }
  </style>
  