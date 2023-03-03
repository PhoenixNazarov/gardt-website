<template>
  <div>
    <div class="main-gradient">
    </div>
  </div>
</template>

<script>
export default {
  name: 'AnimationBackground'
}
</script>

<style scoped>

@keyframes gradient-animate {
  to {
    background-position: top left;
  }
}

.main-gradient {
  /*background: rebeccapurple;*/
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: radial-gradient(87.55% 171.44% at 19.97% 22.27%, #02001A 36.2%, #060043 100%) top right/200% 200%;
  animation: gradient-animate 7s infinite alternate;
}
</style>
