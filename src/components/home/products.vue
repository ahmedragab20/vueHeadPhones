<template>
  <div class="products mt-5">
    <div class="product position-relative">
      <div class="image h-75">
        <img :src="product.img" alt="product.name" />
      </div>
      <div class="name h-25 text-center">
        <h3>{{ product.name }}</h3>
      </div>

      <div class="content">
        <div class="image">
          <div class="img">
            <img :src="product.img" alt="product.name" />
          </div>
          <h6>{{ product.name }}</h6>
        </div>
        <div class="context">
          <p>{{ product.discribtion }}</p>
          <h4>{{ product.price.toFixed(2) }}$</h4>
          <button class="buy-now" @click="addToCart">Want this!</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
  methods: {
    addToCart() {
      this.$store.commit("addToCart", this.product);
    },
  },
};
</script>

<style lang="scss" scoped>
.product {
  width: 350px;
  height: 350px;
  border: 1px solid currentColor;
  flex: 96% / 3%;
  cursor: pointer;

  &:hover {
    .content {
      transform: scaleX(1);
    }
  }

  .image {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 70%;
      height: 70%;
    }
  }

  .content {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #050505;
    padding: 15px;
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;

    .image {
      height: 25%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 10px;

      img {
        width: 80px;
      }
    }
    .context {
      height: 75%;
      margin-top: 30px;

      button {
        margin-top: 15px;
        transition: all 0.3s ease-in-out;

        &:hover {
          background-color: #fff;
          color: #050505;
        }
      }
    }
  }
}
</style>
