<template>
  <div>
    <section class="hero">
      <div class="heading">
        <h1>Tools</h1>
        <h6>Find your tools for your next project!</h6>
      </div>
    </section>
    <div class="product" v-if="products">
      <div class="col" v-for="product in products" :key="product.product_id">
        <div class="card">
          <img :src="product.product_image_url" class="card-img-top" :alt="product.prodName" />
          <div class="card-body">
            <h5 class="card-title">{{ product.prodName }}</h5>
            <p class="card-text">{{ product.prodDesc }}</p>
            <p class="card-text"><strong>Price: R{{ product.price }}</strong></p>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import Spinner from '@/components/SpinnerCom.vue';

export default {
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  components: {
    Spinner,
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

.heading {
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
  width: 18rem;
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
