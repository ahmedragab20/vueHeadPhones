<template>
  <div class="banner">
    <video src="@/assets/statick/banner.mp4" autoplay muted>
      Your Browsser doesn't support the videos
    </video>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.banner {
  height: 100vh;

  video {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
}
@media (max-width: 768px) {
  .banner {
    height: 70vh;
  }
}
</style>
