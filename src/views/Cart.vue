<template>
  <div class="cart mt-5">
    <transition-group tag="div" name="list" appear>
      <cart-component
        v-for="item in items"
        :key="item.id"
        :item="item"
      ></cart-component>
    </transition-group>

    <total-price />
  </div>
</template>

<script>
import cartComponent from "@/components/Cart/cartProducts.vue";
import totalPrice from "@/components/Cart/totalPrice.vue";

export default {
  components: {
    cartComponent,
    totalPrice,
  },
  computed: {
    items() {
      return this.$store.getters.cartProducts;
    },
  },
};
</script>

<style lang="scss" scoped>
.cart {
  position: relative;
  min-height: 100vh;
  padding-top: 10vh;

  .list-enter-from,
  .list-leave-to {
    opacity: 0.6;
    transform: scale(0.6);
  }
  .list-enter-active,
  .list-leave-active,
  .list-move {
    transition: all 0.3s ease-in-out;
  }
}
</style>
