<template>
  <div class="container" style="min-height: 100vh">
    <div class="anim-1">

    </div>
    <div class="anim-2">

    </div>
    <div class="anim-3">

    </div>
  </div>
</template>

<script>
export default {
  name: "AnimationOpacity"
}
</script>

<style scoped>
.container{

}
.anim-1, .anim-2, .anim-3 {
  width: 50vw;
  height: 50vh;
  position: absolute;
  background-size: cover;
  background-position: center;
}

@keyframes anim1 {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 1
  }
  100% {
    opacity: 1
  }
}

.anim-1 {
  background-image: url('../../assets/images/test/image1.png');
  animation: anim1 4s linear infinite alternate;
}

@keyframes anim2 {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0
  }
}

.anim-2 {
  background-image: url('../../assets/images/test/image2.png');
  animation: anim2 4s linear infinite alternate;
}


@keyframes anim3 {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1
  }
}

.anim-3 {
  background-image: url('../../assets/images/test/image3.png');
  animation: anim3 4s linear infinite alternate;
}

</style>