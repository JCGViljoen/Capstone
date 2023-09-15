<template>
  <div class="page">
    <section class="hero">
      <div class="content">
        <h1>Welcome to Digistop</h1>
        <p>Your destination for digital products</p>
      </div>
    </section>
    <section class="about">
      <div class="content">
        <h2>About Us</h2>
        <p>
          We are a passionate team dedicated to bringing you the best digital products, from software to movies to music. Our values center around making a mark in the digital world by delivering high-quality products that enrich your digital experience.
        </p>
        <h3>Our Goals</h3>
        <ul>
          <li>Provide top-notch digital products.</li>
          <li>Stay up-to-date with the latest trends and technologies.</li>
          <li>Empower our customers with valuable digital solutions.</li>
          <li>Create a lasting impact in the digital space.</li>
        </ul>
      </div>
    </section>
    <section class="team">
      <div class="content">
        <h2>Meet the Team</h2>
        <div class="team-members">
          <div class="team-member-card">
            <div class="card">
              <img src="https://i.postimg.cc/ht27jMZN/images-2.jpg" class="card-img-top smaller-image" alt="Team Member 1" />
              <div class="card-body">
                <h5 class="card-title">Aminah Khan</h5>
                <p class="card-text">I want to make sure that we have a strong foot in whatever the digital world has in store for us.</p>
              </div>
            </div>
          </div>
          <div class="team-member-card">
            <div class="card">
              <img src="https://i.postimg.cc/QMMxy3by/how-to-draw-a-Person.webp" class="card-img-top smaller-image" alt="Team Member 2" />
              <div class="card-body">
                <h5 class="card-title">Steven Isaacs</h5>
                <p class="card-text">I understand that the digital world is something we can't run from, so let's take it on head first.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="gallery">
    <div class="content">
      <h2>Our Journey</h2>
      <swiper :slides-per-view="3" :space-between="20" @swiper="onSwiper" @slideChange="onSlideChange">
        <swiper-slide v-for="(image, index) in images" :key="index">
          <div class="swiper-slide-content">
            <img :src="image.src" alt="Gallery Image" class="swiper-slide-image" />
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
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
      images: [
        { src: 'https://i.postimg.cc/J7SzLrGW/pexels-bruno-massao-2873486.jpg' },
        { src: 'https://i.postimg.cc/7YBX6RrD/pexels-gustavo-fring-4173318.jpg' },
        { src: 'https://i.postimg.cc/Xv9wwHmr/pexels-google-deepmind-18069240.jpg' },
      ],
    };
  },
};
</script>

<style scoped>
.hero {
  background-color: #000;
  color: #fff;
  text-align: center;
}
.about .content{
  color: #fff
}

.about .content ul li{
  text-decoration: none;
}

.about, .team, .gallery {
  padding: 50px 0;
}

.page {
  background-image: url('https://i.postimg.cc/rFqYzWdG/pexels-brett-sayles-4031037.jpg');
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #1c1c1c; 
}

@media (max-width: 300px) {
  .hero {
    padding: 30px 0;
  }

  .about, .team, .gallery {
    padding: 20px 0;
  }

  .team-members {
    flex-direction: column;
    align-items: center;
  }

  .team-member-card {
    max-width: 80%;
    margin: 10px 0;
  }
}

.gallery .content {
  text-align: center;
}

.swiper-slide-content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px; 
}

.swiper-slide-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover; 
}

.swiper-slide {
  width: 33.33%;
}
ul {
  list-style: none;
  padding-left: 0;
}

@media screen and (max-width: 768px) {
  .swiper-slide {
    width: 50%;
  }

  .swiper-slide-image {
    max-width: 100%;
  }
}

@media screen and (max-width: 576px) {
  .swiper-slide {
    width: 100%;
  }
}

.image {
  margin: 10px;
  flex: 1;
  max-width: calc(50% - 20px);
  max-height: 300px;
}

.card-title {
  font-size: 1.25rem;
  color: #333;
  margin-bottom: 10px;
}

.card-text {
  font-size: 1rem;
  color: #666;
}

.smaller-image {
  max-width: 100px;
  max-height: 100px;
}
</style>
