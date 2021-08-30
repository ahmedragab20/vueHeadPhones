<template>
  <div class="home">
    <home-banner />
    <poster-1 />
    <poster-2 />
    <div class="container">
      <h2 class="mt-5 text-center">Some Of Our Products</h2>
      <div class="products">
        <products v-for="product in db" :key="product.id" :product="product" />
      </div>
    </div>
    <poster-3 />
  </div>
</template>

<script>
import db from "@/db/db.js";

import homeBanner from "@/components/home/homeBanner.vue";
import poster1 from "@/components/home/poster-1.vue";
import poster2 from "@/components/home/poster-2.vue";
import products from "@/components/home/products.vue";
import poster3 from "@/components/home/poster-3.vue";

export default {
  name: "Home",
  data() {
    return {
      db,
    };
  },
  components: { homeBanner, poster1, poster2, products, poster3 },
};
</script>

<style lang="scss" scoped>
.products {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
}
</style>
