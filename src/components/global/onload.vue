<template>
  <div class="onload" v-if="!isload">
    <img src="@/assets/global/onload.gif" width="150" />
  </div>
</template>
<script>
export default {
  data: () => {
    return {
      isload: false,
    };
  },
  mounted() {
    document.onreadystatechange = () => {
      if (document.readyState == "complete") {
        this.isload = true;
      }
    };
  },
};
</script>
<style lang="scss" scoped>
.onload {
  position: fixed;
  top: 0;
  left: 0;
  min-height: 100vh;
  min-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 500;
  background-color: #ffff;
  img {
    position: fixed;
    top: 45%;
  }
}
</style>
