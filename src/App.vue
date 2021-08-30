<template>
  <div id="app">
    <div id="nav">
      <nav-bar />
    </div>
    <router-view v-slot="{ Component }">
      <transition name="rout" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
    <main-footer />
  </div>
</template>
<script>
import navBar from "@/components/global/navBar.vue";
import mainFooter from "@/components/global/mainFooter.vue";
export default {
  components: { navBar, mainFooter },
  mounted() {
    return setInterval(this.$store.commit("updateCartStorage"));
  },
};
</script>
<style lang="scss">
#app {
  position: relative;
}
.rout-enter-from,
.rout-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.rout-enter-active,
.rout-leave-active {
  transition: all 0.3s ease-in-out;
}
</style>
