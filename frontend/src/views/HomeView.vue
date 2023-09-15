<template>
  <div class="home">
    <div class="header">
      <div class="sides"><a href="#" class="menu"></a></div>
      <div class="info">
        <h1>Discover the Best Digital Products</h1>
        <div class="meta">
          <div class="sides">
            <center><a href="#" class="logo">Check us out</a></center>
          </div>
          <br>
          <a href="https://twitter.com/nodws" target="_blank"></a>
        </div>
      </div>
    </div>
    <section class="content">
      <p>Welcome to our digital wonderland! Explore a world of innovative digital products that will revolutionize your online experience. Whether you're a gamer, a creator, or a tech enthusiast, we've got something special for you. Dive into the metaverse with us!</p>
    </section>

    <h1>Just Arrived</h1>
    <h6>SCROLL THROUGH</h6>

    <!-- Swiper Carousel -->
    <swiper :slides-per-view="3" :space-between="50" @swiper="onSwiper" @slideChange="onSlideChange">
      <swiper-slide v-for="slide in slides" :key="slide.id">
        <img :src="slide.image" alt="Slide Image" class="responsive-image">
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      slides: [
        { id: 1, image: "https://i.postimg.cc/HLtFFf33/51r-F0ezg-PHL.jpg" },
        { id: 2, image: "https://i.postimg.cc/d0nS5Gtx/71cj5c-Nm7-ZL-SY500.jpg" },
        { id: 3, image: "https://i.postimg.cc/HLsCWYrF/61m6w-Di1-SYL-SX522.jpg" },
        { id: 4, image: "https://i.postimg.cc/KYSxQfBW/download.jpg" },
        { id: 5, image: "https://i.postimg.cc/133y07FH/share-default-14fadd993578b9916f855cebafb71e62.png" },
        { id: 6, image: "https://i.postimg.cc/Y2N75BfR/unnamed.webp" },
        { id: 7, image: "https://i.postimg.cc/Dw6dH08h/71-Vo5-Zbv1o-L-AC-UY327-FMwebp-QL65.webp" },

        
      ],
    };
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
    };
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Josefin+Sans:400,400i,600,600i');
html, body {
  margin: 0;
  font-family: 'Josefin Sans', sans-serif;
  min-width: 300px; 
}

a {
  text-decoration: none;
}
.responsive-image{
  width:20rem;
  height: auto;
}

.header {
  position: relative;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
  height: 50vw;
  min-height: 400px;
  max-height: 550px;
  min-width: 300px;
  color: #eee;
  height: 100vh; 
  min-height: 300px; 
  max-height: 700px;
}

.header:after {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -1;
  background: linear-gradient(to bottom, rgba(0,0,0,0.12) 40%, rgba(27,32,48,1) 100%);
}

.header:before {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  -webkit-backface-visibility: hidden;
  -webkit-transform: translateZ(0);
  backface-visibility: hidden;
  transform: translateZ(0);
  background-attachment: fixed; 
  animation: grow 360s linear 10ms infinite;
  transition: all 0.4s ease-in-out;
  z-index: -2;
}

.home {
  background-image: url(https://images.unsplash.com/photo-1571993142257-eae0b44cf0f1?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ);
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}

.menu {
  display: block;
  width: 40px;
  height: 30px;
  border: 2px solid #fff;
  border-radius: 3px;
  position: absolute;
  right: 20px;
  top: 20px;
  text-decoration: none;
}

.menu:after {
  content: "";
  display: block;
  width: 20px;
  height: 3px;
  background: #fff;
  position: absolute;
  margin: 0 auto;
  top: 5px;
  left: 0;
  right: 0;
  box-shadow: 0 8px, 0 16px;
}

.logo {
  border: 2px solid #fff;
  border-radius: 3px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  align-content: center;
  margin: 20px;
  padding: 0px 10px;
  font-weight: 900;
  font-size: 1.1em;
  line-height: 1;
  box-sizing: border-box;
  height: 40px;
}

.info {
  width: 100%;
  padding: 15% 10% 0 10%;
  text-align: center;
  text-shadow: 0 2px 3px rgba(0,0,0,0.2);
}

.author {
  display: inline-block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: url(https://i.imgur.com/6DLCsZcb.jpg) center no-repeat;
  background-size: cover;
  box-shadow: 0 2px 3px rgba(0,0,0,0.3);
  margin-bottom: 3px;
}

.info h4, .meta {
  font-size: 0.7em;
}

.meta {
  font-style: italic;
}

@keyframes grow {
  0% { transform: scale(1) translateY(0px); }
  50% { transform: scale(1.2) translateY(-400px); }
}

.content {
  padding: 5% 10%;
  text-align: justify;
}

.btn {
  color: red;
  border: 2px solid;
  border-radius: 3px;
  text-decoration: none;
  display: inline-block;
  padding: 5px 10px;
  font-weight: 600;
}

button {
  display: flex;
  width: 100%;
  max-width: 200px; 
  height: 3.125rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
}

.card {
  height: 25rem;
}

.card:hover {
  transform: scale(1.05);
  transition: transform 0.3s ease;
}

.col {
  flex: 1;
  max-width: 100%;
  width: 100%;
  height: auto;
  max-width: none;
}

.card .card-img-top {
  width: 100%;
  max-width: 200px; 
  height: auto;
}

.carousel-container {
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  position: relative;
  margin-top: 20px;
}

.carousel {
  display: flex;
  transition: transform 0.2s ease-in-out;
}

.carousel-slide {
  min-width: 100%;
  flex-shrink: 0;
}

.carousel img {
  max-width: 100%;
  height: auto;
}

@media (max-width: 600px) {
  .header {
    height: 50vh; 
    min-height: 250px; 
    max-height: 350px; 
  }
}

@media (max-width: 300px) {
  .carousel-container {
    max-width: 100%; 
    margin: 0; 
  }
}

@media screen and (max-width: 991px) {
  .logo {
    display: none;
  }
}
</style>
