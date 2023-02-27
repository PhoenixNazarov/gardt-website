<template>
  <div>
    <div class="animation-container">

      <div class="animation-container-1">
        <div class="animation-1-container">
          <div class="animation-1">
            <h1 class="image-text image-text-top">Обеденная зона</h1>
          </div>
        </div>

        <div class="animation-2-container">
          <div class="animation-2">
            <h1 class="image-text">Летняя кухня</h1>
          </div>
        </div>
      </div>

      <div class="animation-container-2">
        <div class="animation-3-container">
          <div class="animation-3">
            <h1 class="image-text">Лаунж зона</h1>
          </div>
        </div>
        <div class="animation-4-container">
          <div class="animation-4 image-text-left">
            <h1 class="image-text">Лаунж зона</h1>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "AnimationFourPhotos"
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
  height: 40%;
}

.animation-1-container {
  height: 55%;
  margin-bottom: 3em;
  width: 100%;
}

.animation-2-container {
  height: calc(45% - 3em);
  width: 100%;
}

.animation-container-1 {
  height: 80%;
  width: 50vw;
}

.animation-3-container {
  margin-top: 3em;
  width: 25vw;
  height: 40%;
  margin-bottom: 3em;
}

.animation-4-container {
  height: 40%;
  width: 25vw;
}

.animation-container-2 {
  height: 80%;
  width: 50vw;
  margin-left: 3em;
}

.animation-1, .animation-2, .animation-3, .animation-4 {
  position: absolute;
  width: 100%;
  border-radius: 10px;
  background-size: cover;
  background-position: center center;
}

.animation-1 {
  height: 100%;
  margin-left: 60%;
  width: 40%;
  background-image: url("../../assets/images/main-slider/1.jpg");
  animation: animation-1 4s infinite alternate;
  z-index: 3;

  /*height: 100%;*/
  /*width: 55%;*/
  /*transform: translate(40%, 15%);*/
}

@keyframes animation-1 {
  0% {
    height: 100%;
    width: 55%;
    transform: translate(40%, 15%);
  }
  50% {
    height: 100%;
    width: 40%;
    transform: translate(0, 0);
  }
}

.animation-2 {
  height: 100%;
  margin-left: 40%;
  width: 60%;
  background-image: url("../../assets/images/main-slider/2.jpg");
  animation: animation-2 4s infinite alternate;
  z-index: 1;

  /*height: 115%;*/
  /*width: 35%;*/
  /*transform: translate(50%, -10%);*/
}

@keyframes animation-2 {
  0% {
    height: 115%;
    width: 35%;
    transform: translate(50%, -10%);
  }
  50% {
    height: 100%;
    width: 60%;
    transform: translate(0, 0);
  }
}

.animation-3 {
  height: 100%;
  width: 90%;
  background-image: url("../../assets/images/main-slider/4.jpg");
  animation: animation-3 4s infinite alternate;
  z-index: 1;

  /*height: 100%;*/
  /*width: 90%;*/
  /*transform: translate(20%, 80%);*/
}

@keyframes animation-3 {
  0% {
    height: 100%;
    width: 90%;
    transform: translate(20%, 80%);
  }
  50% {
    height: 100%;
    width: 90%;
    transform: translate(0, 0);
  }
}

.animation-4 {
  height: 100%;
  width: 100%;
  background-image: url("../../assets/images/main-slider/4.jpg");
  animation: animation-4 4s infinite alternate;
  z-index: 0;

  /*height: 110%;*/
  /*width: 90%;*/
  /*transform: translate(-170%, -40%);*/
}

@keyframes animation-4 {
  0% {
    height: 110%;
    width: 90%;
    transform: translate(-170%, -40%);
  }
  50% {
    height: 100%;
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

.image-text-top {
  top: -1em;
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