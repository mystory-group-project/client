<template>
  <nav class="navbar navbar-expand-lg fixed-top justify-content-between">
    <div class="main-nav d-flex">
      <a class="navbar-brand" href="#">My Story</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="user-gate">
      <a href="" class="btn btn-warning">Logout</a>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
nav {
  background-color: #435fab;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.513);
}

nav a {
  color: white;
}

.navbar-brand {
  font-family: 'Beth Ellen'
}
</style>