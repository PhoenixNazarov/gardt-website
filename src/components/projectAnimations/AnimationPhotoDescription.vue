<template>
  <div>
    <div class="drop-photo-container" style="height: 600vh">
      <div class="drop-photo-image"></div>
      <h1 class="drop-photo-text">Функциональное пространство с обеденной зоной</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "AnimationPhotoDescription",
}
</script>

<style scoped>
.drop-photo-image {
  height: 100vh;
  width: 80vw;
  background-size: cover;
  background-position: center;
  background-image: url("../../assets/images/main-slider/1.jpg");
  animation: drop-animation 5s infinite;
  transform-origin: bottom left;
  transform: translateX(-100vw);
}

.drop-photo-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 6em;
  line-height: 1.15em;
  color: var(--vt-c-white);
  animation: drop-text-animation 1s infinite;
  opacity: 0;
}

@keyframes drop-animation {
  0% {
    opacity: 0;
    transform: scale(1);
    margin-left: 0;
  }
  33% {
    opacity: 1;
    transform: scale(1);
    margin-left: 10vw;
  }
  66% {
    opacity: 1;
    transform: scale(0.6);
    margin-left: 10vw;
  }
  100% {
    opacity: 1;
    transform: scale(0.6);
    margin-left: 10vw;
  }
}

@keyframes drop-text-animation {
  /*0% {*/
  /*  opacity: 0;*/
  /*}*/
  /*66% {*/
  /*  opacity: 0;*/
  /*}*/
  /*100% {*/
  /*  opacity: 1;*/
  /*}*/
}


</style>