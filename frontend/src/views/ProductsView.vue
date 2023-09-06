<template>
    <div>
        <section class="hero">
            <div class="heading">
                <h1>Tools</h1>
                <h6>Find your tools to your next Project!</h6>
            </div>
        </section>
        <div class="product">
          <div class="col" v-for="product in products" :key="product.product_id">
            <div class="card">
              <img :src="products.product_image_url" class="card-img-top" :alt="products.prodName">
              <div class="card-body">
                <h5 class="card-title">{{ products.prodName }}</h5>
                <p class="card-text">{{ products.prodDesc }}</p>
                <p class="card-text"><strong>Price: R{{ products.price }}</strong></p>
              </div>
            </div>
          </div>            
          </div>
    </div>
    
  </template>
  
  <script>
  export default {
    computed: {
    products() {
      return this.$store.state.products;
    },
  },
  mounted() {
    this.$store.dispatch("fetchProducts");
  },              
    
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
  @media (max-width: 300px) {
    .product {
      min-width: 300px;
    }
  }
  </style>
  