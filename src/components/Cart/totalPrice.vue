<template>
  <transition name="totalPrice" appear mode="out-in">
    <div class="total" v-if="totalPrice">
      <div class="container">
        <div class="price">
          <h2>total price:</h2>
          <h3>{{ totalPrice }}$</h3>
        </div>
        <button>Paymen Methods <i class="bi bi-arrow-right"></i></button>
      </div>
    </div>
  </transition>

  <transition name="waiting" mode="out-in" appear>
    <div class="waiting text-center" v-if="!totalPrice">
      <h4>Nothing Yet..</h4>
    </div>
  </transition>
</template>

<script>
export default {
  computed: {
    items() {
      return this.$store.getters.cartProducts;
    },
    totalPrice() {
      return this.$store.getters.totalPrice;
    },
  },
};
</script>

<style lang="scss" scoped>
.total {
  margin: 10px auto;

  .price {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    text-transform: uppercase;

    h2 {
      font-size: 3rem;
    }

    h3 {
      font-size: 2.5rem;
      letter-spacing: 1px;
    }
  }
  button {
    background: #fff;
    color: #050505;
    min-width: 220px;
    height: 80px;
    transition: 0.3s;

    i {
      color: #050505;
    }
    &:hover {
      letter-spacing: 2px;
    }
  }
}

.totalPrice-enter-from,
.totalPrice-leave-to,
.waiting-enter-from,
.waiting-leave-to {
  opacity: 0;
  transform: scale(0);
}
.totalPrice-enter-active,
.totalPrice-leave-active,
.waiting-enter-active,
.waiting-leave-active {
  transition: all 0.3s ease-in-out;
}
@media (max-width: 768px) {
  .total {
    .price {
      h2 {
        font-size: 1.5rem;
      }

      h3 {
        font-size: 1.5rem;
      }
    }
    button {
      padding: 4px 8px;
      min-width: 160px;
      height: 50px;
    }
  }
}
</style>
