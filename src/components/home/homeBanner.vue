<template>
  <div class="banner">
    <video src="@/assets/statick/banner.mp4" autoplay loop>
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
    pointer-events: none;
  }
}
@media (max-width: 768px) {
  .banner {
    height: 65vh;
  }
}
@media (max-width: 555px) {
  .banner {
    height: 40vh;
  }
}
</style>
