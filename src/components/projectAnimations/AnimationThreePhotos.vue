<template>
  <div>
    <div class="animation-container">
      <div class="animation-1-container">
        <div class="animation-1 image-text-left">
          <h1 class="image-text">Обеденная зона</h1>
        </div>
      </div>

      <div class="animation-2-container">
        <div class="animation-2 image-text-left">
          <h1 class="image-text">Летняя кухня</h1>
        </div>
      </div>

      <div class="animation-3-container">
        <div class="animation-3">
          <h1 class="image-text">Лаунж зона</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AnimationThreePhotos'
}
</script>

<style scoped>
.animation-container {
  /*margin-left: 10vw;*/
  /*margin-right: 10vw;*/
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}

.animation-1-container, .animation-2-container, .animation-3-container {
  height: 100%;
}

.animation-1-container {
  width: 30vw;
}

.animation-2-container {
  margin-left: 2em;
  width: 25vw;
}

.animation-3-container {
  margin-left: 2em;
  width: 25vw;
}

.animation-1, .animation-2, .animation-3 {
  position: absolute;
  width: 100%;
  border-radius: 10px;
  background-size: cover;
  background-position: center;
}

.animation-1 {
  top: 60vh;
  height: 40vh;
  background-image: url("../../assets/images/main-slider/1.jpg");
  animation: animation-1 4s infinite alternate;
  z-index: 1;
}

@keyframes animation-1 {
  0% {
    height: 30vw;
    width: 25vw;
    transform: translate(20vw, -40vh);
  }
  50% {
    height: 40vh;
    width: 30vw;
    transform: translate(0, 0);
  }
}

.animation-2 {
  margin-top: 15vh;
  height: 50vh;
  background-image: url("../../assets/images/main-slider/2.jpg");
  animation: animation-2 4s infinite alternate;
  z-index: 3;

}

@keyframes animation-2 {
  0% {
    height: 50vh;
    width: 25vw;
    transform: translate(20vw, 5vh);
  }
  50% {
    height: 50vh;
    width: 25vw;
    transform: translate(0, 0);
  }
}

.animation-3 {
  margin-top: 40vh;
  height: 25vw;
  background-image: url("../../assets/images/main-slider/4.jpg");
  animation: animation-3 4s infinite alternate;
  z-index: 2;
}

@keyframes animation-3 {
  0% {
    height: 30vw;
    width: 25vw;
    transform: translate(-27vw, -5vw);
  }
  50% {
    height: 25vw;
    width: 25vw;
    transform: translate(0, 0);
  }
}

.image-text {
  position: absolute;
  top: calc(100% + 1em);

  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1.25em;

  color: var(--vt-c-white);
  animation: animation-text 4s infinite alternate;
}

@keyframes animation-text {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.image-text-left {
  display: flex;
  justify-content: flex-end;
}

</style>
