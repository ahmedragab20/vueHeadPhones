<template>
  <footer class="mt-5 text-center">
    <div class="container">
      <router-link to="/">Home</router-link>
      <router-link to="/Cart">Cart</router-link>
      <a href="#" class="top"> <i class="bi bi-arrow-up"></i>Top</a>
    </div>
    <h6 class="mt-3">Created by Ahmed Ragab &copy; 2021</h6>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  padding: 60px 0 30px 0;
  a {
    margin: 5px;
  }
  .top {
    margin-left: 10px;
    padding: 5px;
    border: 1px solid currentColor;
    text-transform: uppercase;
    transition: 00.3s;

    &:hover {
      color: #050505;
      background-color: #fff;
    }
  }
}
</style>
