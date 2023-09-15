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
        // { src: 'https://i.postimg.cc/Xv9wwHmr/pexels-google-deepmind-18069240.jpg' },
      ],
    };
  },
};
</script>
<style scoped>
/* Common styles for different screen sizes */
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
}

/* Responsive styles */
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

/* Improved image layout */
.image-gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.image {
  margin: 10px;
  flex: 1;
  max-width: calc(50% - 20px);
  max-height: 300px;
}

/* Improved text styling */
.card-title {
  font-size: 1.25rem;
  color: #333;
  margin-bottom: 10px;
}

.card-text {
  font-size: 1rem;
  color: #666;
}
</style>
