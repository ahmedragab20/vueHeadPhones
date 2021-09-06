<template>
  <div
    class="
      err
      d-flex
      justify-content-center
      align-items-center
      flex-column
      text-center
    "
  >
    <div class="container">
      <h2>This Page Not Available Anymore</h2>
      <h2 class="h1">404 Error</h2>
      <router-link to="/" exact>Go Home</router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.err {
  min-height: 75vh;
  .h1 {
    font-size: 10rem;
    letter-spacing: 3px;
    margin: 20px auto;
  }
  a {
    text-decoration: underline;
  }
}

@media (max-width: 768px) {
  .err {
    .h1 {
      font-size: 5rem;
      letter-spacing: 1px;
      margin: 20px auto;
    }
  }
}

@media (max-width: 555px) {
  .err {
    h2 {
      font-size: 1rem;
    }
    .h1 {
      font-size: 2rem;
      letter-spacing: 0px;
      margin: 10px auto;
    }
  }
}
</style>
