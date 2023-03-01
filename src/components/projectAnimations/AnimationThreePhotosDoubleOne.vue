<template>
  <div>
    <div class="animation-container">
      <div class="animation-container-1">
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
  name: "AnimationThreePhotosDoubleOne"
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

.animation-3-container {
  height: 100%;
}

.animation-1-container {
  height: 50%;
  margin-bottom: 2em;
  width: 100%;
}

.animation-2-container {
  height: 50%;
  width: 100%;
}

.animation-container-1 {
  height: 80%;
  width: 50vw;
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
  height: 100%;
  margin-left: 40%;
  width: 60%;
  background-image: url("../../assets/images/main-slider/1.jpg");
  /*animation: animation-1 4s infinite alternate;*/
  z-index: 3;
}

@keyframes animation-1 {
  0% {
    height: 150%;
    width: 50%;
    transform: translate(90%, 20%);
  }
  50% {
    height: 100%;
    width: 60%;
    transform: translate(0, 0);
  }
}

.animation-2 {
  height: 100%;
  margin-right: 40%;
  width: 60%;
  background-image: url("../../assets/images/main-slider/2.jpg");
  animation: animation-2 4s infinite alternate;
  z-index: 1;
}

@keyframes animation-2 {
  0% {
    height: 150%;
    width: 50%;
    transform: translate(50%, -70%);
  }
  50% {
    height: 100%;
    width: 60%;
    transform: translate(0, 0);
  }
}

.animation-3 {
  margin-top: 30vh;
  height: 50vh;
  background-image: url("../../assets/images/main-slider/4.jpg");
  animation: animation-3 4s infinite alternate;
  z-index: 2;
}

@keyframes animation-3 {
  0% {
    height: 55vh;
    width: 80%;
    transform: translate(-100%, 10%);
  }
  50% {
    height: 50vh;
    width: 100%;
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