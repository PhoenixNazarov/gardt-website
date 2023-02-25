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
  mounted() {
    let $image = this.$el.querySelector('.drop-photo-image');
    let $body = document.body.getBoundingClientRect();
    let offset = $image.getBoundingClientRect().top - $body.top


    $image.style.position = 'fixed';
    $image.style.top = '0';
    // offset=1200;
    $image.style.transform = `translateX(clamp(-100vw, calc( var(--scrollTop) - ${offset}px ), 200px)`
  }
}
</script>

<style scoped>
.drop-photo-image {
  height: 100vh;
  width: 80vw;
  background-size: cover;
  background-position: center;
  background-image: url("../../assets/images/main-slider/1.jpg");
  /*animation: drop-animation 5s infinite;*/
  /*transform-origin: bottom left;*/
  /*transform: translate(min(calc(var(--scrollTop)), 200px), 100px);*/
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
  /*0% {*/
  /*  opacity: 0;*/
  /*  transform-origin: center;*/
  /*}*/
  /*22% {*/
  /*  transform: scale(0.6);*/
  /*  opacity: 1;*/
  /*  transform-origin: center;*/
  /*}*/
  33% {
    margin-left: 20vw;
    /*transform: scale(0.6) translate(50%, calc(-50%));*/
    opacity: 1;
    /*filter: saturate(100%);*/
    transform-origin: bottom left;
  }
  66% {
    margin-left: 20vw;
    /*transform: scale(0.6) translate(50%, calc(-50%));*/
    opacity: 1;
    /*filter: saturate(100%);*/
    transform-origin: bottom left;
    transform: scale(1);
  }
  100% {
    margin-left: 20vw;
    transform: scale(0.5);

    /*filter: saturate(70%);*/
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