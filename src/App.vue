<template>
  <div id="app">
    <on-load />

    <nav-bar />
    <router-view v-slot="{ Component }">
      <transition name="rout" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
    <main-footer />
  </div>
</template>
<script>
import onLoad from "@/components/global/onload.vue";

import navBar from "@/components/global/navBar.vue";
import mainFooter from "@/components/global/mainFooter.vue";

export default {
  components: { onLoad, navBar, mainFooter },
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
