<template>
  
    <div class="home">
      <h1 class="h1">

      </h1>
       

        <div class="header">
          <div class="sides"> <a href="#" class="menu"> </a></div>
          <div class="info">
          <h1>Let's Make our Mark in the Metaverse</h1>
            <div class="meta">
              <div class="sides">
                <center> <a href="#" class="logo">Check us out</a></center>
              </div><br>
              <a href="https://twitter.com/nodws" target="_b"></a>
            </div>
          </div>
        </div>
        <section class="content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nisl turpis, porttitor et finibus id, viverra a metus. Praesent non ante sed orci posuere varius quis sit amet dui. Cras molestie magna orci, id gravida dolor molestie in. Duis sollicitudin turpis quis tortor egestas, ut ultrices nisl elementum. Vestibulum sed ipsum eget nulla laoreet cursus in ac sem. Integer a suscipit justo, quis aliquam sapien. Maecenas et tellus nibh. Vivamus tincidunt eros id commodo pellentesque.</p>
          <p align="center"><a href="https://twitter.com/nodws" class="btn twtr" target="_b">Follow me on Twitter</a>
          </p>
        </section>

        <div class="sidebar">
          <ul>
            <li><a href="#"><i class="fas fa-home"></i></a></li>
            <li><a href="#"><i class="fas fa-search"></i></a></li>
            <li><a href="#"><i class="fas fa-envelope"></i></a></li>
            <!-- Add more items as needed -->
          </ul>
        </div>
        
      

    <h1>Just Arrived</h1>
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="col">
        <div class="card">
          <img src="https://i.postimg.cc/HLtFFf33/51r-F0ezg-PHL.jpg" class="card-img-top" alt="">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img src="https://i.postimg.cc/d0nS5Gtx/71cj5c-Nm7-ZL-SY500.jpg" class="card-img-top" alt="">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img src="https://i.postimg.cc/HLsCWYrF/61m6w-Di1-SYL-SX522.jpg" class="card-img-top" alt="">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css?family=Josefin+Sans:400,400i,600,600i');
html, body {
  margin: 0;
  font-family: 'Josefin Sans', sans-serif;
  min-width: 300px; 
}
a{
  text-decoration:none
}
.header{
  position:relative;
  overflow:hidden;
  display:flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
  height:50vw;
  min-height:400px;
  max-height:550px;
  min-width:300px;
  color:#eee;
  height: 40vh; 
  min-height: 300px; 
  max-height: 400px;
}
.header:after{
  content:"";
  width:100%;
  height:100%;
  position:absolute;
  bottom:0;
  left:0;
  z-index:-1;
 background: linear-gradient(to bottom, rgba(0,0,0,0.12) 40%,rgba(27,32,48,1) 100%);
}
.header:before{
  content:"";
  width:100%;
  height:200%;
  position:absolute;
  top:0;
  left:0;
    -webkit-backface-visibility: hidden;
    -webkit-transform: translateZ(0); backface-visibility: hidden;
  scale:(1.0, 1.0);
    transform: translateZ(0);
  background:#1B2030 url(https://images.unsplash.com/photo-1571993142257-eae0b44cf0f1?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ) 50% 0 no-repeat;
  background-size:100%;
  background-attachment:fixed;
  animation: grow 360s  linear 10ms infinite;
  transition:all 0.4s ease-in-out;
  z-index:-2
}
.header a{
  color:#eee
}
.menu{
  display:block;
  width:40px;
  height:30px;
  border:2px solid #fff;
  border-radius:3px;
  position:absolute;
  right:20px;
  top:20px;
  text-decoration:none
}
.menu:after{
  content:"";
  display:block;
  width:20px;
  height:3px;
  background:#fff;
  position:absolute;
  margin:0 auto;
  top:5px;
  left:0;
  right:0;
  box-shadow:0 8px, 0 16px
}
.logo{
  border:2px solid #fff;
  border-radius:3px;
  text-decoration:none;
  display:inline-flex;
  align-items:center;
  align-content:center;
  margin:20px;
  padding:0px 10px;
  font-weight:900;
  font-size:1.1em;
  line-height:1;
  box-sizing:border-box;
  height:40px
}
.sides, .info{
  flex: 0 0 auto;
  width:50%
}
.info{
  width:100%;
  padding:15% 10% 0 10%;
  text-align:center;
  text-shadow:0 2px 3px rgba(0,0,0,0.2)
}
.author{
  display:inline-block;
  width:50px;
  height:50px;
  border-radius:50%;
  background:url(https://i.imgur.com/6DLCsZcb.jpg) center no-repeat;
  background-size:cover;
  box-shadow:0 2px 3px rgba(0,0,0,0.3);
  margin-bottom:3px
}
.info h4, .meta{
  font-size:0.7em
}
.meta{
  font-style:italic;
}
@keyframes grow{
  0% { transform: scale(1) translateY(0px)}
  50% { transform: scale(1.2) translateY(-400px)}
}
.content{  
  padding:5% 10%;
  text-align:justify
}
.btn{
  color:#333;
  border:2px solid;
  border-radius:3px;
  text-decoration:none;
  display:inline-block;
  padding:5px 10px;
  font-weight:600
}

.twtr{
  margin-top:100px
}.btn.twtr:after{content:"\1F426";padding-left:5px}

button {
  display: flex;
  width: 100%;
  max-width: 200px; 
  height: 3.125rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
}

/* Sidebar Styles */
.sidebar {
  position: fixed;
  left: -60px; /* Initially hide the sidebar to the left */
  top: 0;
  width: 60px;
  height: 100%;
  background-color: #333;
  color: #fff;
  transition: left 0.3s; /* Add a smooth transition for sliding in/out */
}

/* Show the sidebar on hover */
.sidebar:hover {
  left: 0;
}

/* Sidebar Item Styles */
.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar li {
  padding: 10px;
}

.sidebar a {
  text-decoration: none;
  color: #fff;
  display: block;
  position: relative; /* Position relative for absolute positioning of icons */
}

/* Icon Styles (adjust as needed) */
.sidebar i {
  margin-right: 10px;
  font-size: 18px;
  position: absolute;
  left: -30px; /* Position the icons outside the sidebar */
  opacity: 0; /* Initially hide the icons */
  transition: opacity 0.3s; /* Add a smooth transition for fading in/out */
}

/* Show the icons on hover */
.sidebar a:hover i {
  opacity: 1;
  left: 10px; /* Position the icons closer to the labels */
}

.card .card-img-top {
  width: 100%;
  max-width: 200px; 
  height: auto;
}
@media (max-width: 600px) {
  .header {
    height: 50vh; 
    min-height: 250px; 
    max-height: 350px; 
  }
}




</style>

