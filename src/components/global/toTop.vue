<template>
  <transition name="top" appear>
    <div class="to-top">
      <a href="#">
        <i class="bi bi-arrow-up"></i>
      </a>
    </div>
  </transition>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
.to-top {
  width: 30px;
  height: 30px;
  position: fixed;
  bottom: 20px;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 50%;
  background-color: #050505;
  z-index: 5;
}

.top-enter-from,
.top-leave-to {
  opacity: 0;
  transform: translateY(-200px);
}
.top-enter-active,
.top-leave-active {
  transition: all 0.5s ease-in-out 5s;
}
</style>
