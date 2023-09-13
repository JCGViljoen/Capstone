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
          <!-- Team member cards go here -->
          <div class="team-member-card">
            <div class="card">
              <img src="team_member_1.jpg" class="card-img-top" alt="Team Member 1" />
              <div class="card-body">
                <h5 class="card-title">Team Member 1</h5>
                <p class="card-text">Team member's role and brief description.</p>
              </div>
            </div>
          </div>
          <div class="team-member-card">
            <div class="card">
              <img src="team_member_2.jpg" class="card-img-top" alt="Team Member 2" />
              <div class="card-body">
                <h5 class="card-title">Team Member 2</h5>
                <p class="card-text">Team member's role and brief description.</p>
              </div>
            </div>
          </div>
          <!-- Add more team member cards as needed -->
        </div>
      </div>
    </section>
    <section class="gallery">
      <div class="content">
        <h2>Our Journey</h2>
        <div class="image-gallery">
          <transition-group name="fade" tag="div">
            <div v-for="(image, index) in images" :key="index" class="image">
              <img :src="image.src" alt="Gallery Image" />
            </div>
          </transition-group>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
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
  padding: 100px 0;
}

/* About Section */
.about {
  background-color: #f8f9fa;
  padding: 50px 0;
}
.page{
  background-image: url('https://i.postimg.cc/rFqYzWdG/pexels-brett-sayles-4031037.jpg');
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;

}

/* Team Section */
.team {
  padding: 50px 0;
}

.team-members {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.team-member-card {
  max-width: 300px;
  margin: 10px;
  transition: all 0.3s ease;
}

.card {
  border: 1px solid #e1e1e1;
  border-radius: 5px;
}

.card-title {
  font-size: 1.25rem;
}

.card-text {
  font-size: 1rem;
  color: #666;
}

/* Gallery Section */
.gallery {
  background-color: #f8f9fa;
  padding: 50px 0;
}

.image-gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.image {
  margin: 10px 0;
  
}
.image-gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 100%; /* Ensure the gallery fits the screen */
}

.image {
  margin: 10px 0;
  flex: 1; /* Allow images to grow to fill available space */
  max-width: calc(33.33% - 20px); /* Set maximum width for each image */
  max-height: 300px; /* Set maximum height for each image */
}



.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.fade-enter,
.fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}

@media (max-width: 300px) {
  .hero {
    padding: 50px 0;
  }

  .about {
    padding: 30px 0;
  }

  .team-members {
    flex-direction: column;
    align-items: center;
  }

  .team-member-card {
    max-width: 80%;
  }

  .gallery {
    padding: 30px 0;
  }
}

/* Animation for the gallery section */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.fade-enter,
.fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
