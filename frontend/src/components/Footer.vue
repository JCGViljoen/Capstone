<template>
  <div class="container">
    <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-3 my-3 border-top" style="background-color: #eff2f;">
      <div class="col mb-3">
        <a href="home" class="d-flex align-items-center mb-3 link-dark text-decoration-none">
          <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
        </a>
        <p class="text-white">DIGI-STOP © 2023</p>
      </div>
      <div class="col mb-3">
        <h5><strong>Newsletter Signup</strong></h5>
        <form>
          <div class="mb-3">
            <label for="email" class="form-label text-white">Email address:</label>
            <input type="email" class="form-control" id="email" placeholder="Enter your email">
          </div>
          <button type="submit" class="btn btn-primary">Sign Up</button>
        </form>
      </div>
      <div class="col mb-3">
        <h5>Company</h5>
        <!-- Add your location information here -->
        <address class="text-white">
          123 Main Street<br>
          City, State, ZIP<br>
          Country
        </address>
      </div>
      <div class="col mb-3">
        <h5>DIGI-STOP</h5>
        <!-- Add social media icons here -->
        <ul class="list-inline">
          <li class="list-inline-item"><a href="#"><i class="bi bi-facebook"></i></a></li>
          <li class="list-inline-item"><a href="#"><i class="bi bi-twitter"></i></a></li>
          <li class="list-inline-item"><a href="#"><i class="bi bi-instagram"></i></a></li>
          <!-- Add more social media icons as needed -->
        </ul>
      </div>
      <div class="col mb-3">
        <h5>Support</h5>
        <!-- Add a contact form here -->
        <form action="https://formspree.io/f/mpzglage" method="POST">
          <div class="mb-3">
            <label for="name" class="form-label text-white">Name:</label>
            <input type="name" name="name" class="form-control" id="name" placeholder="Enter your name">
          </div>
          <div class="mb-3">
            <label for="emailSupport" class="form-label text-white">Email address:</label>
            <input type="email" name="email" class="form-control" id="emailSupport" placeholder="Enter your email">
          </div>
          <div class="mb-3">
            <label for="message" class="form-label text-white">Message:</label>
            <textarea name="message" class="form-control" id="message" rows="4" placeholder="Enter your message"></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Send Message</button>
        </form>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
footer {
  padding: 10px;
}

footer > div {
  padding: 10px;
}

@media (max-width: 300px) {
  footer {
    flex-direction: column;
    text-align: center;
  }
  
  footer > div {
    padding: 5px;
  }

  .form-label {
    text-align: left;
  }

  input[type="text"],
  input[type="email"],
  textarea {
    width: 100%;
  }
}
</style>
