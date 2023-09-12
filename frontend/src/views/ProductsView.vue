<template>
  <div>
    <section class="hero">
      <div class="heading">
        <h1>Tools</h1>
        <h6>Find your tools for your next project!</h6>
      </div>
    </section>
    <form class="d-flex" role="search">
      <input class="form-control me-2"   aria-label="Search"  type="text"
              v-model="searchQuery"
              @input="updateSearchQuery"
              placeholder="Search for products">

      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
    <div class="product" v-if="products">
      <div class="sort-buttons">
        <button @click="sortByPrice">Sort by Price</button>
        <button @click="sortByName">Sort by Name</button>
      </div>
      <div class="col" v-for="product in sortedProducts" :key="product.product_id">
        <div class="card">
          <img :src="product.product_image_url" class="card-img-top" :alt="product.prodName" />
          <div class="card-body">
            <h5 class="card-title">{{ product.prodName }}</h5>
            <p class="card-text">{{ product.prodDesc }}</p>
            <p class="card-text"><strong>Price: R{{ product.price }}</strong></p>
            <router-link
              :to="{
                name: 'single',
                params: { id: product.product_id },
                query: {
                  name: product.prodName,
                  description: product.prodDesc,
                  img: product.product_image_url,
                  price: product.price,
                },
              }"
            >
              <button class="btn">View Product</button>
            </router-link>
            <ul>
              <li>
                {{ product.prodName }} - Price: R{{ product.price }}
                <button @click="addToCart(product)">Add to Cart</button>
              </li>
            </ul>
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
import { mapState } from 'vuex';

export default {
  computed: {
    products() {
      return this.$store.state.products;
    },
    searchQuery: {
    get() {
      return this.$store.state.searchQuery;
    },
    set(value) {
      this.$store.commit('setSearchQuery', value);
    },
  },
    
    ...mapState(['searchQuery']),
    filteredProducts() {
      const query = this.searchQuery.toLowerCase();
      return this.products.filter(product => {
        return product.prodName.toLowerCase().includes(query);
      });
    },
    
    
    sortedProducts() {
      if (this.sortType === 'price') {
        return [...this.products].sort((a, b) => a.price - b.price);
      } else if (this.sortType === 'name') {
        return [...this.products].sort((a, b) => a.prodName.localeCompare(b.prodName));
      }
      return this.products;
    },
  },
  data() {
    return {
      sortType: '', 
    };
  },
  methods: {
    sortByPrice() {
      this.sortType = 'price';
    },
    sortByName() {
      this.sortType = 'name';
    },
    
    addToCart(product) {
      this.$store.dispatch('addToCart', product);
    },
  
    updateSearchQuery() {
    // The computed property handles updating the searchQuery in the Vuex store
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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
}

.card {
  border: 1px solid #e1e1e1;
  border-radius: 5px;
  transition: transform 0.2s;
  width: 18rem;
  margin: 10px;
  flex: 1;
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

@media (max-width: 768px) {
  .product {
    justify-content: space-around;
  }
}

@media (max-width: 576px) {
  .product {
    padding: 10px;
  }

  .card {
    width: 100%;
  }
}
</style>
