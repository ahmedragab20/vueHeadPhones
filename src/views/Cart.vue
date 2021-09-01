<template>
  <div class="cart mt-5">
    <transition-group name="cart-component" appear mode="out-in">
      <cart-component
        v-for="item in items"
        :key="item.id"
        :item="item"
      ></cart-component>
    </transition-group>

    <transition name="total" mode="out-in" appear>
      <total-price />
    </transition>
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

  .cart-component-enter-from,
  .cart-component-leave-to,
  .total-enter-from,
  .total-leave-to {
    opacity: 0.6;
    transform: scale(0.6);
  }
  .cart-component-enter-active,
  .cart-component-leave-active,
  .total-enter-active,
  .total-leave-active {
    transition: all 0.3s ease-in-out;
  }
}
</style>
