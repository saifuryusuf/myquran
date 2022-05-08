<script>
import 'bootstrap/dist/css/bootstrap.css'
export default {
  name : 'Navbar',
  components: {}
}
</script>
<template>
  <nav class="navbar navbar-expand-lg navbar-light shadow-lg fixed-top ">
    <div class="container">
      <a class="navbar-brand" style="color: white"   href="#">Amma<sup>+5</sup>Juz</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/"><div class="anav">Home</div></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/juzamma"><div class="anav">Juz Amma</div></a>
          </li>
          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              Juz 1-5
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a class="dropdown-item" href="/juz1-5#juzsatu">Juz1</a></li>
              <li><a class="dropdown-item" href="/juz1-5#juzdua">Juz2</a></li>
              <li><a class="dropdown-item" href="/juz1-5#juztiga">Juz3</a></li>
              <li><a class="dropdown-item" href="/juz1-5#juzempat">Juz4</a></li>
              <li><a class="dropdown-item" href="/juz1-5#juzlima">Juz5</a></li>
            </ul>
          </div>
          <li class="nav-item">
            <a class="nav-link" href="/about"><div class="anav">Audio Ngaji</div></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar-brand{
  font-family: "Microsoft YaHei Light";
  font-weight: bold;
  background: #282828;
}
.nav-link:hover{
  border-bottom: 3px solid #b4850e;
}
.navbar{
  background-image: url("../assets/navbar.jpg");
}
.anav{
  background: #282828;
  color: white;
  font-weight: bold;
}
</style>